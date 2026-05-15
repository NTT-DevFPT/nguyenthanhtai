'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [enabled, setEnabled] = useState(false);
    const [variant, setVariant] = useState<'default' | 'hover'>('default');

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
    const dotX = useSpring(mouseX, { damping: 30, stiffness: 800, mass: 0.2 });
    const dotY = useSpring(mouseY, { damping: 30, stiffness: 800, mass: 0.2 });
    const ringX = useSpring(mouseX, { damping: 22, stiffness: 160, mass: 0.4 });
    const ringY = useSpring(mouseY, { damping: 22, stiffness: 160, mass: 0.4 });

    useEffect(() => {
        // Disable on touch devices
        if (typeof window === 'undefined') return;
        const isFinePointer = window.matchMedia('(pointer: fine)').matches;
        if (!isFinePointer) return;
        setEnabled(true);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseEnter = () => setVariant('hover');
        const handleMouseLeave = () => setVariant('default');

        window.addEventListener('mousemove', handleMouseMove);

        const hoverables = document.querySelectorAll('a, button, [data-cursor="hover"]');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        const observer = new MutationObserver(() => {
            document.querySelectorAll('a, button, [data-cursor="hover"]').forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, [mouseX, mouseY]);

    if (!enabled) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div
                    className="rounded-full bg-white transition-all duration-200"
                    style={{
                        width: variant === 'hover' ? 0 : 6,
                        height: variant === 'hover' ? 0 : 6,
                    }}
                />
            </motion.div>
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div
                    className="rounded-full border border-accent transition-all duration-300"
                    style={{
                        width: variant === 'hover' ? 48 : 28,
                        height: variant === 'hover' ? 48 : 28,
                        background:
                            variant === 'hover'
                                ? 'rgba(94, 234, 212, 0.1)'
                                : 'transparent',
                    }}
                />
            </motion.div>
        </>
    );
}
