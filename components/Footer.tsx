'use client';

import { useLanguage } from '@/lib/i18n/context';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-border py-8 mt-10 relative bg-bg">
            <div className="container-x flex flex-wrap justify-between items-center gap-3 font-mono text-xs text-text-muted">
                <p>
                    © {new Date().getFullYear()} Nguyễn Thành Tài · {t.footer.builtWith}{' '}
                    <span className="text-red-400 inline-block animate-heartbeat">♥</span> &amp; lots of coffee
                </p>
                <p>{t.footer.designed}</p>
            </div>
        </footer>
    );
}
