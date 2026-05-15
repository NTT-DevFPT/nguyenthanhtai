'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useLanguage } from '@/lib/i18n/context';

export default function Experience() {
    const { t } = useLanguage();
    const exp = t.experience.fptJapan;
    const edu = t.experience.education;

    return (
        <section id="experience" className="py-24 md:py-32 relative">
            <div className="container-x">
                <SectionHeader num={t.sections.experience.num} title={t.sections.experience.title} />

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -4 }}
                        className="relative bg-bg-card border border-border rounded-2xl p-7 group hover:border-accent/40 transition-colors"
                    >
                        <div className="absolute -top-3 left-7 px-3 py-0.5 rounded-full bg-accent/10 border border-accent/30 backdrop-blur">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                                {t.experience.workBadge}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                <Briefcase size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold leading-tight">{exp.company}</h3>
                                <p className="text-sm text-text-dim">{exp.role}</p>
                            </div>
                        </div>

                        <p className="font-mono text-xs text-text-muted mb-4">{exp.period}</p>

                        <ul className="space-y-2">
                            {exp.points.map((p) => (
                                <li key={p} className="text-sm text-text-dim pl-5 relative">
                                    <span className="absolute left-0 text-accent">▹</span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        whileHover={{ y: -4 }}
                        className="relative bg-bg-card border border-border rounded-2xl p-7 group hover:border-accent-2/40 transition-colors"
                    >
                        <div className="absolute -top-3 left-7 px-3 py-0.5 rounded-full bg-accent-2/10 border border-accent-2/30 backdrop-blur">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-accent-2">
                                {t.experience.eduBadge}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-11 h-11 rounded-xl bg-accent-2/10 border border-accent-2/20 flex items-center justify-center text-accent-2">
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold leading-tight">{edu.school}</h3>
                                <p className="text-sm text-text-dim">{edu.degree}</p>
                            </div>
                        </div>

                        <p className="font-mono text-xs text-text-muted mb-4">{edu.period}</p>

                        <ul className="space-y-2">
                            {edu.points.map((p) => (
                                <li key={p} className="text-sm text-text-dim pl-5 relative">
                                    <span className="absolute left-0 text-accent-2">▹</span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-8 relative glass border border-border rounded-2xl p-8 overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
                    <div className="font-mono text-xs uppercase tracking-[2px] text-accent mb-3">
                        {t.experience.objectiveBadge}
                    </div>
                    <p className="text-lg md:text-xl leading-relaxed text-text relative">
                        {t.experience.objective}
                        <span className="gradient-text font-semibold">
                            {t.experience.objectiveHighlight1}
                        </span>
                        {' / '}
                        <span className="gradient-text font-semibold">
                            {t.experience.objectiveHighlight2}
                        </span>
                        .
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
