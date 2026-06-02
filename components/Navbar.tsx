'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinkHrefs, personalInfo } from '@/lib/data';
import { useLanguage } from '@/lib/i18n/context';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'py-3 glass border-b border-border' : 'py-5 bg-transparent'
            }`}
        >
            <div className="container-x flex items-center justify-between gap-4">
                <a
                    href="/#home"
                    className="font-mono font-bold text-lg tracking-wide hover:text-accent transition-colors"
                >
                    <span className="text-accent">&lt;</span>NTT<span className="text-accent">/&gt;</span>
                </a>

                <ul className="hidden md:flex items-center gap-7 flex-1 justify-center">
                    {navLinkHrefs.map((link, i) => (
                        <motion.li
                            key={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.08 }}
                        >
                            <a
                                href={link.href}
                                className="text-sm text-text-dim hover:text-accent transition-colors group relative"
                            >
                                <span className="font-mono text-xs text-accent mr-1">0{i + 1}.</span>
                                {t.nav[link.key]}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-3">
                    <LanguageToggle />
                    <a
                        href={personalInfo.cv}
                        download
                        className="inline-flex font-mono text-xs px-4 py-2 bg-accent/10 text-accent rounded-md hover:bg-accent/20 transition-all"
                    >
                        {t.hero.ctaCV}
                    </a>
                    <a
                        href="/#contact"
                        className="inline-flex font-mono text-xs px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent/10 transition-all"
                    >
                        {t.nav.hireMe}
                    </a>
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <LanguageToggle />
                    <button
                        onClick={() => setOpen(!open)}
                        className="p-2 text-text"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-border overflow-hidden"
                    >
                        <ul className="container-x py-6 flex flex-col gap-5">
                            {navLinkHrefs.map((link, i) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="block text-text-dim hover:text-accent transition-colors"
                                    >
                                        <span className="font-mono text-xs text-accent mr-2">
                                            0{i + 1}.
                                        </span>
                                        {t.nav[link.key]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
