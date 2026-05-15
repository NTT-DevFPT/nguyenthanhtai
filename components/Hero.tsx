'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ArrowRight, Github, Mail, MapPin, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useLanguage } from '@/lib/i18n/context';

const HeroScene = dynamic(() => import('./three/HeroScene'), { ssr: false });
const ParticleField = dynamic(() => import('./three/ParticleField'), { ssr: false });

function useTyped(words: string[]) {
    const [text, setText] = useState('');
    const [wordIdx, setWordIdx] = useState(0);

    useEffect(() => {
        setText('');
        setWordIdx(0);
    }, [words]);

    useEffect(() => {
        let charIdx = 0;
        let deleting = false;
        let timer: NodeJS.Timeout;

        const tick = () => {
            const word = words[wordIdx % words.length];
            if (!deleting) {
                setText(word.slice(0, ++charIdx));
                if (charIdx === word.length) {
                    deleting = true;
                    timer = setTimeout(tick, 1800);
                    return;
                }
            } else {
                setText(word.slice(0, --charIdx));
                if (charIdx === 0) {
                    deleting = false;
                    setWordIdx((wordIdx + 1) % words.length);
                    return;
                }
            }
            timer = setTimeout(tick, deleting ? 40 : 90);
        };

        timer = setTimeout(tick, 500);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wordIdx, words]);

    return text;
}

export default function Hero() {
    const { t, locale } = useLanguage();
    const typed = useTyped(t.hero.titles);
    const isJp = locale === 'ja';

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
        >
            <div className="absolute inset-0 z-0 opacity-70">
                <ParticleField />
            </div>

            <div className="absolute inset-0 grid-bg z-0" aria-hidden="true" />

            <div className="container-x relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap items-center gap-3 mb-6"
                    >
                        <span className="font-mono text-accent text-sm md:text-base flex items-center gap-2.5">
                            <span className="relative flex w-2 h-2">
                                <span className="absolute inset-0 rounded-full bg-accent animate-pulse-glow" />
                                <span className="relative rounded-full w-2 h-2 bg-accent" />
                            </span>
                            {t.hero.greeting}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-accent-warm/30 bg-accent-warm/10 text-accent-warm">
                            <Sparkles size={11} />
                            {t.hero.openBadge}
                        </span>
                    </motion.div>

                    <h1
                        className={`font-extrabold leading-[1.05] tracking-tight mb-3 flex flex-wrap ${
                            isJp ? 'text-5xl md:text-6xl xl:text-7xl gap-x-0' : 'text-5xl md:text-7xl xl:text-[5.5rem] gap-x-6'
                        }`}
                    >
                        {personalInfo.nameParts.map((part, i) => (
                            <motion.span
                                key={part}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.2 + i * 0.12,
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={i === 2 ? 'gradient-text' : ''}
                            >
                                {part}{i < 2 && !isJp ? '' : i < 2 ? ' ' : ''}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-2xl md:text-4xl font-semibold text-text-dim min-h-[1.5em] mb-6"
                    >
                        <span className="text-text">{typed}</span>
                        <span className="caret" />
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.85 }}
                        className="flex flex-wrap gap-2 mb-7"
                    >
                        {Object.values(t.hero.chips).map((chip) => (
                            <span
                                key={chip}
                                className="font-mono text-xs px-3 py-1.5 rounded-full bg-bg-card border border-border text-text-dim"
                            >
                                {chip}
                            </span>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.95 }}
                        className="text-base md:text-lg text-text-dim max-w-xl mb-10 text-balance"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="flex flex-wrap gap-3 mb-12"
                    >
                        <a href="#projects" className="btn btn-primary group">
                            {t.hero.ctaProjects}
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <a href={personalInfo.cv} download className="btn btn-ghost group">
                            <Download
                                size={16}
                                className="group-hover:translate-y-0.5 transition-transform"
                            />
                            {t.hero.ctaCV}
                        </a>
                        <a href="#contact" className="btn btn-ghost">
                            {t.hero.ctaContact}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="flex flex-wrap items-center gap-x-7 gap-y-3 text-text-muted font-mono text-sm"
                    >
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-accent transition-colors"
                        >
                            <Github size={16} />
                            NTT-DevFPT
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="flex items-center gap-2 hover:text-accent transition-colors"
                        >
                            <Mail size={16} />
                            {personalInfo.email}
                        </a>
                        <span className="flex items-center gap-2">
                            <MapPin size={16} />
                            {t.about.p1Location}
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                    className="relative h-[420px] md:h-[540px] hidden lg:block"
                >
                    <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
                    <HeroScene />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-text-muted text-xs font-mono uppercase tracking-[2px]"
            >
                <span>{t.hero.scroll}</span>
                <div className="relative w-px h-10 bg-gradient-to-b from-accent to-transparent overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-accent animate-scroll-down" />
                </div>
            </motion.div>
        </section>
    );
}
