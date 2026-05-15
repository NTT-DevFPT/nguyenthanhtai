'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/context';
import { locales, type Locale } from '@/lib/i18n/translations';

export default function LanguageToggle() {
    const { locale, setLocale } = useLanguage();

    return (
        <div className="relative inline-flex items-center gap-0 bg-bg-card border border-border rounded-full p-1">
            {locales.map((l) => {
                const active = l.code === locale;
                return (
                    <button
                        key={l.code}
                        onClick={() => setLocale(l.code as Locale)}
                        className="relative px-2.5 py-1 text-[11px] font-mono font-semibold tracking-wide rounded-full transition-colors z-10"
                        aria-label={`Switch to ${l.label}`}
                    >
                        {active && (
                            <motion.span
                                layoutId="locale-pill"
                                className="absolute inset-0 bg-accent rounded-full -z-10"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                            />
                        )}
                        <span className={active ? 'text-bg' : 'text-text-dim hover:text-text'}>
                            <span className="mr-1">{l.flag}</span>
                            {l.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
