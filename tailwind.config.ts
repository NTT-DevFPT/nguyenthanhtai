import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                bg: {
                    DEFAULT: '#0a0e14',
                    elev: '#0f1419',
                    card: '#131820',
                },
                border: {
                    DEFAULT: '#1f2937',
                    soft: 'rgba(148, 163, 184, 0.08)',
                },
                text: {
                    DEFAULT: '#e6edf3',
                    dim: '#94a3b8',
                    muted: '#64748b',
                },
                accent: {
                    DEFAULT: '#5eead4',
                    2: '#22d3ee',
                    warm: '#fbbf24',
                    glow: 'rgba(94, 234, 212, 0.15)',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                mono: ['var(--font-jetbrains)', 'monospace'],
            },
            animation: {
                'fade-up': 'fadeUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
                'reveal': 'revealUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards',
                'blink': 'blink 1s steps(1) infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                'scroll-down': 'scrollDown 2s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                revealUp: {
                    from: { opacity: '0', transform: 'translateY(40px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                blink: {
                    '50%': { opacity: '0' },
                },
                pulseGlow: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '1' },
                    '50%': { transform: 'scale(1.3)', opacity: '0.7' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '25%': { transform: 'scale(1.2)' },
                },
                scrollDown: {
                    '0%': { transform: 'translateY(-40px)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { transform: 'translateY(40px)', opacity: '0' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
