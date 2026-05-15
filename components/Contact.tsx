'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Linkedin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { personalInfo } from '@/lib/data';
import { useLanguage } from '@/lib/i18n/context';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 md:py-32 relative">
            <div className="container-x">
                <SectionHeader num={t.sections.contact.num} title={t.sections.contact.title} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h3 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-balance">
                        {t.contact.headingPre}
                        <span className="gradient-text">{t.contact.headingAccent}</span>
                    </h3>

                    <p className="text-text-dim text-base md:text-lg mb-10 text-balance">
                        {t.contact.descPre}
                        <strong className="text-text">{t.contact.descBold}</strong>
                        {t.contact.descPost}
                    </p>

                    <motion.a
                        href={`mailto:${personalInfo.email}`}
                        whileHover={{ y: -3 }}
                        className="inline-flex items-center gap-3 px-8 py-5 border-2 border-accent text-accent rounded-lg font-mono text-base md:text-lg font-medium transition-all hover:bg-accent/10 hover:shadow-[0_15px_40px_-10px_rgba(94,234,212,0.4)] mb-12"
                    >
                        {personalInfo.email}
                        <ArrowRight size={20} />
                    </motion.a>

                    <div className="flex justify-center gap-4">
                        {[
                            { Icon: Github, href: personalInfo.github, label: 'GitHub' },
                            { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                            { Icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
                        ].map(({ Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                aria-label={label}
                                whileHover={{ y: -4 }}
                                className="w-12 h-12 inline-flex items-center justify-center border border-border rounded-full text-text-dim hover:border-accent hover:text-accent hover:shadow-[0_8px_20px_-8px_rgba(94,234,212,0.5)] transition-all"
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
