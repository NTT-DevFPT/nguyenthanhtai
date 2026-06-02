'use client';

import { motion } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';
import { certificates } from '@/lib/data';
import { useLanguage } from '@/lib/i18n/context';

export default function Certificates() {
    const { t } = useLanguage();

    return (
        <section id="certificates" className="py-12 md:py-20 relative">
            <div className="container-x">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-border flex-1" />
                    <h2 className="font-mono text-sm md:text-base font-semibold text-accent whitespace-nowrap">
                        {t.certificates.title}
                    </h2>
                    <div className="h-px bg-border flex-1" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {certificates.map((cert, index) => (
                        <motion.a
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group block relative h-full glass border border-border rounded-xl hover:border-accent/50 transition-colors overflow-hidden flex flex-col"
                        >
                            <div className="relative aspect-[4/3] w-full bg-white/5 border-b border-border overflow-hidden pointer-events-none">
                                <iframe 
                                    src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} 
                                    className="absolute top-0 left-0 w-full h-full border-none pointer-events-none"
                                    title={cert.title}
                                    tabIndex={-1}
                                />
                                <div className="absolute inset-0 bg-transparent group-hover:bg-accent/10 transition-colors" />
                            </div>
                            
                            <div className="p-4 flex flex-col justify-between flex-1 gap-4">
                                <h3 className="text-sm font-bold text-text group-hover:text-accent transition-colors leading-tight">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center gap-2 text-xs font-mono text-text-muted group-hover:text-accent transition-colors">
                                    {t.certificates.viewFile}
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
