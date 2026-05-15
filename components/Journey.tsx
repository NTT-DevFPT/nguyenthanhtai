'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Plane, ShoppingBag, Brain } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useLanguage } from '@/lib/i18n/context';

const milestoneIcons = [GraduationCap, Code2, Plane, ShoppingBag, Brain];
const milestoneColors = ['#5eead4', '#22d3ee', '#fbbf24', '#a78bfa', '#f472b6'];

function MilestoneItem({
    item,
    index,
    Icon,
    color,
}: {
    item: { date: string; title: string; description: string };
    index: number;
    Icon: typeof GraduationCap;
    color: string;
}) {
    const left = index % 2 === 0;
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-12 md:mb-16 last:mb-0"
        >
            {/* Content card */}
            <div className={`relative ${left ? 'md:order-1' : 'md:order-2'} ${!left ? 'md:text-left' : 'md:text-right'}`}>
                <motion.div
                    whileHover={{ y: -4 }}
                    className="relative bg-bg-card border border-border rounded-2xl p-6 group hover:border-accent/40 transition-colors overflow-hidden"
                    style={{ boxShadow: `0 10px 30px -10px ${color}33` }}
                >
                    <div
                        className="absolute top-0 left-0 right-0 h-px opacity-50"
                        style={{
                            background: `linear-gradient(to right, transparent, ${color}, transparent)`,
                        }}
                    />
                    <div
                        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                        style={{ background: color }}
                    />
                    <div className="relative">
                        <div className="font-mono text-xs tracking-wider mb-2" style={{ color }}>
                            {item.date}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 tracking-tight">
                            {item.title}
                        </h3>
                        <p className="text-text-dim text-sm leading-relaxed">{item.description}</p>
                    </div>
                </motion.div>
            </div>

            {/* Icon centerpiece */}
            <div className={`absolute left-1/2 -translate-x-1/2 hidden md:block`}>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                    className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                        background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-full animate-pulse-glow opacity-50"
                        style={{ background: `${color}20` }}
                    />
                    <div
                        className="relative w-12 h-12 rounded-full flex items-center justify-center border-2 bg-bg-card"
                        style={{ borderColor: color, color }}
                    >
                        <Icon size={20} />
                    </div>
                </motion.div>
            </div>

            {/* Spacer for the side without the card */}
            <div className={left ? 'md:order-2 hidden md:block' : 'md:order-1 hidden md:block'} />

            {/* Mobile icon */}
            <div className="md:hidden flex items-center gap-3 -mb-3 -mt-2 order-first">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border bg-bg-card"
                    style={{ borderColor: color, color }}
                >
                    <Icon size={16} />
                </div>
                <span className="font-mono text-xs tracking-wider" style={{ color }}>
                    {item.date}
                </span>
            </div>
        </motion.div>
    );
}

export default function Journey() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 60%', 'end 60%'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section id="journey" className="py-24 md:py-32 relative">
            <div className="container-x">
                <SectionHeader num={t.sections.journey.num} title={t.sections.journey.title} />

                <div ref={containerRef} className="relative">
                    {/* Center line (desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-border hidden md:block" />
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-1/2 top-0 -translate-x-1/2 w-px bg-gradient-to-b from-accent via-accent-2 to-accent hidden md:block origin-top"
                    />

                    {/* Left line (mobile) */}
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:hidden" />
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-5 top-0 w-px bg-gradient-to-b from-accent via-accent-2 to-accent md:hidden origin-top"
                    />

                    {t.journey.items.map((item, i) => {
                        const Icon = milestoneIcons[i] || Code2;
                        const color = milestoneColors[i] || '#5eead4';
                        return (
                            <MilestoneItem
                                key={item.date + item.title}
                                item={item}
                                index={i}
                                Icon={Icon}
                                color={color}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
