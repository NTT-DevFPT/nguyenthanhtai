import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n/context';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jetbrains',
});

export const metadata: Metadata = {
    metadataBase: process.env.VERCEL_URL
        ? new URL(`https://${process.env.VERCEL_URL}`)
        : new URL('http://localhost:3000'),
    title: 'Nguyễn Thành Tài — Backend Developer',
    description:
        'Backend Developer chuyên Java & Spring Boot. Xây dựng hệ thống backend mở rộng và hiệu năng cao.',
    keywords: ['Backend Developer', 'Java', 'Spring Boot', 'Portfolio', 'Nguyễn Thành Tài'],
    authors: [{ name: 'Nguyễn Thành Tài', url: 'https://github.com/NTT-DevFPT' }],
    openGraph: {
        title: 'Nguyễn Thành Tài — Backend Developer',
        description: 'Backend Developer chuyên Java & Spring Boot.',
        type: 'website',
        locale: 'vi_VN',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Nguyễn Thành Tài Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nguyễn Thành Tài — Backend Developer',
        description: 'Backend Developer chuyên Java & Spring Boot.',
        images: ['/og-image.png'],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" className={`${inter.variable} ${jetbrains.variable}`}>
            <body className="font-sans">
                <div className="noise" aria-hidden="true" />
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
