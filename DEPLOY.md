# Deploy to Vercel — Step-by-step

Hai cách triển khai. Cách 1 nhanh nhất (10 phút), Cách 2 chuẩn industry (15 phút, có Git history).

---

## Cách 1: Deploy nhanh bằng Vercel CLI (không cần GitHub)

```powershell
# 1. Cài Vercel CLI (chỉ chạy 1 lần)
npm i -g vercel

# 2. Tại thư mục E:\portfolio
vercel

# Lần đầu sẽ hỏi:
#   ? Set up and deploy "E:\portfolio"? [Y/n]   → Y
#   ? Which scope?                              → chọn account của bạn
#   ? Link to existing project?                 → N
#   ? Project name?                             → ntt-portfolio (Enter)
#   ? Directory?                                → ./ (Enter)
#   ? Auto-detected Project Settings (Next.js)? → Y

# 3. Vercel build + deploy → trả về URL preview, ví dụ:
#    https://ntt-portfolio-xxxxx.vercel.app

# 4. Khi đã ưng, deploy bản production:
vercel --prod
```

Sau đó vào [vercel.com/dashboard](https://vercel.com/dashboard) → project → **Settings → Domains** để gắn custom domain (ví dụ `nguyenthanhtai.dev`).

---

## Cách 2: Deploy qua GitHub (khuyến nghị — auto-deploy mỗi lần push)

### 2.1. Khởi tạo Git và commit lần đầu

```powershell
# Trong E:\portfolio
git init
git branch -M main

# Tạo .gitignore (đã có sẵn rồi, kiểm tra)
git add .
git commit -m "feat: portfolio v1 with Next.js + Three.js + i18n"
```

### 2.2. Tạo repo trên GitHub

Lên [github.com/new](https://github.com/new):
- Owner: **NTT-DevFPT**
- Repository name: **portfolio** (hoặc `ntt-portfolio`)
- **Private** hoặc **Public** đều được
- **KHÔNG** tick "Initialize with README" (vì local đã có code rồi)
- Click **Create repository**

### 2.3. Push lên GitHub

GitHub sẽ hiển thị lệnh — copy phần "push existing repo":

```powershell
git remote add origin https://github.com/NTT-DevFPT/portfolio.git
git push -u origin main
```

### 2.4. Kết nối với Vercel

1. Lên [vercel.com/signup](https://vercel.com/signup) → **Continue with GitHub** (dùng account NTT-DevFPT).
2. Authorize Vercel để truy cập repos.
3. Trên dashboard → **Add New → Project**.
4. Chọn repo **portfolio** → click **Import**.
5. Vercel auto-detect Next.js — giữ nguyên tất cả settings:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
6. Click **Deploy**.
7. Đợi ~2 phút → có URL: `https://portfolio-xxxxx.vercel.app`.

### 2.5. Auto-deploy mỗi lần push

Từ giờ, mỗi `git push origin main` → Vercel tự build và deploy production.
Mỗi push lên branch khác → tạo preview URL riêng để review trước khi merge.

---

## Sau khi deploy

### Đổi tên / Domain
- Vercel cho `*.vercel.app` miễn phí
- Custom domain (`.dev`, `.com`, …): vào **Settings → Domains** → Add → trỏ DNS theo hướng dẫn
- Domain miễn phí khuyến nghị: [nguyenthanhtai.id.vn](https://nhanhoa.com/ten-mien.html) (~30k/năm) hoặc [vercel.app subdomain](https://vercel.com/docs/concepts/projects/domains)

### Environment variables (nếu sau này thêm)
Chưa cần. Khi nào thêm API key, Firebase, … vào **Settings → Environment Variables**.

### Analytics miễn phí
Bật **Vercel Analytics** ở dashboard → tracking lượt visit không cần config.

### Open Graph image (đề xuất sau)
Tạo `app/opengraph-image.tsx` để khi share trên LinkedIn / Twitter có thumbnail đẹp. Mình có thể làm tiếp.

---

## Troubleshooting

**Build fail vì three.js?** Đã set `transpilePackages: ['three']` trong `next.config.mjs` — nên OK.

**Image domain error?** Hiện avatar nằm trong `/public/` nên không cần config remote pattern.

**Font loading chậm khi deploy?** Đã dùng `next/font` với `display: 'swap'` — Vercel cache cực nhanh.

---

## Quick reference

| Action | Command |
|---|---|
| Local dev | `npm run dev` |
| Production build local | `npm run build && npm start` |
| Deploy preview | `vercel` |
| Deploy production | `vercel --prod` |
| Pull env vars | `vercel env pull` |
| Logs | `vercel logs <deployment-url>` |
