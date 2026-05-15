"""Extract the avatar image from the CV PDF.

Strategy: enumerate all embedded raster images on page 1 and save the largest
square-ish one — that's the portrait. Falls back to saving every image if
nothing matches the heuristic.
"""

import fitz  # PyMuPDF
import os
import sys

PDF_PATH = r"E:\CV\Nguyen_Thanh_Tai-CV.pdf"
OUT_DIR = r"E:\portfolio\public"
OUT_NAME = "avatar.png"


def main() -> int:
    doc = fitz.open(PDF_PATH)
    page = doc[0]
    images = page.get_images(full=True)
    print(f"Found {len(images)} embedded images on page 1")

    if not images:
        print("ERROR: no images found")
        return 1

    candidates = []
    for img_idx, img in enumerate(images):
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        w, h = pix.width, pix.height
        # Skip alpha-only or 1-bit masks (logos, separators)
        if pix.n < 3 or w < 80 or h < 80:
            print(f"  [{img_idx}] {w}x{h} n={pix.n} — skip (small or mask)")
            pix = None
            continue
        ratio = min(w, h) / max(w, h)
        score = (w * h) * ratio  # large + square wins
        candidates.append((score, img_idx, xref, w, h, ratio))
        print(f"  [{img_idx}] {w}x{h} ratio={ratio:.2f} score={score:.0f}")
        pix = None

    if not candidates:
        print("ERROR: no suitable candidate images")
        return 1

    candidates.sort(reverse=True)
    _, _, xref, w, h, ratio = candidates[0]
    pix = fitz.Pixmap(doc, xref)

    # Convert CMYK to RGB if needed
    if pix.n - pix.alpha > 3:
        pix = fitz.Pixmap(fitz.csRGB, pix)

    os.makedirs(OUT_DIR, exist_ok=True)
    out_path = os.path.join(OUT_DIR, OUT_NAME)
    pix.save(out_path)
    print(f"\nSaved avatar: {out_path} ({w}x{h}, ratio={ratio:.2f})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
