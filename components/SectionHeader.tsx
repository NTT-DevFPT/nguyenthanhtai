'use client';

import { motion } from 'framer-motion';

export default function SectionHeader({ num, title }: { num: string; title: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-14"
        >
            <span className="font-mono text-accent text-sm">{num}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap">
                {title}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-[300px]" />
        </motion.div>
    );
}
