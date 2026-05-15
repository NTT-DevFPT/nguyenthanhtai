'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import { statKeys, statValues, personalInfo } from '@/lib/data';
import { useLanguage } from '@/lib/i18n/context';

function Counter({ value, suffix }: { value: number | string; suffix: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [count, setCount] = useState<number | string>(typeof value === 'number' ? 0 : value);

    useEffect(() => {
        if (!isInView || typeof value !== 'number') return;
        const duration = 1500;
        const start = performance.now();
        let rafId: number;

        const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) {
                rafId = requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [isInView, value]);

    return (
        <div
            ref={ref}
            className="font-mono text-4xl md:text-5xl font-bold text-accent leading-none"
        >
            {count}
            {suffix}
        </div>
    );
}

export default function About() {
    const { t } = useLanguage();
    const learningTags = ['Spring Cloud', 'Kubernetes', 'AWS Advanced', 'System Design'];

    return (
        <section id="about" className="py-24 md:py-32 relative">
            <div className="container-x">
                <SectionHeader num={t.sections.about.num} title={t.sections.about.title} />

                <div className="grid lg:grid-cols-[280px_1fr_320px] gap-10 lg:gap-12 items-start">
                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                        className="relative mx-auto lg:mx-0 max-w-[280px] w-full group"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-accent-2 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                        <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-colors">
                            <Image
                                src={personalInfo.avatar}
                                alt="Nguyễn Thành Tài"
                                fill
                                sizes="(max-width: 768px) 280px, 280px"
                                className="object-cover transition-all duration-500 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-bg/30 to-transparent" />
                        </div>
                        {/* Decorative corner brackets */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-md" />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-md" />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="space-y-5 text-text-dim text-base md:text-lg"
                    >
                        <p>
                            {t.about.p1Pre}
                            <strong className="text-text font-semibold">{t.about.p1Role}</strong>
                            {t.about.p1Mid}
                            <strong className="text-text font-semibold">{t.about.p1Location}</strong>
                            {t.about.p1Mid2}
                            <strong className="text-text font-semibold">{t.about.p1School}</strong>.
                        </p>
                        <p>{t.about.p2}</p>
                        <p>
                            {t.about.p3Pre}
                            <strong className="text-text font-semibold">{t.about.p3Academy}</strong>
                            {t.about.p3Mid}
                            <strong className="text-text font-semibold">{t.about.p3N3}</strong>
                            {t.about.p3End}
                        </p>
                        <p>{t.about.p4}</p>

                        <div className="pt-5 mt-5 border-t border-border">
                            <div className="font-mono text-accent text-xs uppercase tracking-[1.5px] mb-2">
                                {t.about.learning}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {learningTags.map((tag) => (
                                    <code
                                        key={tag}
                                        className="font-mono text-sm bg-bg-card border border-border text-accent px-3 py-1 rounded-md"
                                    >
                                        {tag}
                                    </code>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid grid-cols-2 gap-3"
                    >
                        {statKeys.map((key, i) => {
                            const { value, suffix } = statValues[i];
                            const label = t.stats[key];
                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -6 }}
                                    className="bg-bg-card border border-border rounded-xl p-5 text-center relative overflow-hidden group hover:border-accent transition-colors"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative">
                                        {typeof value === 'number' ? (
                                            <Counter value={value} suffix={suffix} />
                                        ) : (
                                            <div className="font-mono text-4xl md:text-5xl font-bold text-accent leading-none">
                                                {value}
                                            </div>
                                        )}
                                        <div className="text-xs text-text-muted mt-2">{label}</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
