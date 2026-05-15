'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations, type Locale, type Dictionary } from './translations';

type LanguageContextValue = {
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'ntt-portfolio-locale';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('vi');

    useEffect(() => {
        const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
        if (stored && (stored === 'vi' || stored === 'en' || stored === 'ja')) {
            setLocaleState(stored as Locale);
            document.documentElement.lang = stored;
        }
    }, []);

    const setLocale = useCallback((l: Locale) => {
        setLocaleState(l);
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, l);
            document.documentElement.lang = l;
        }
    }, []);

    const value: LanguageContextValue = {
        locale,
        setLocale,
        t: translations[locale],
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return ctx;
}
