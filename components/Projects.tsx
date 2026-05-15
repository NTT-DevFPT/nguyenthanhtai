'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { projects, type ProjectMeta } from '@/lib/data';
import { useLanguage } from '@/lib/i18n/context';

const ProjectShape = dynamic(() => import('./three/ProjectShape'), { ssr: false });

function ProjectCard({ project, index }: { project: ProjectMeta; index: number }) {
    const { t } = useLanguage();
    const reverse = index % 2 === 1;
    const content = t.projects.items[project.id];

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative grid lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-center"
        >
            <div
                className={`absolute font-mono text-[8rem] md:text-[12rem] font-extrabold text-border/50 pointer-events-none -z-0 leading-none ${
                    reverse ? 'right-0 -top-8' : 'left-0 -top-8'
                }`}
            >
                {project.num}
            </div>

            <div className={`relative z-10 ${reverse ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="font-mono text-accent text-xs uppercase tracking-[2px]">
                        {project.tag}
                    </span>
                    {project.status === 'current' && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-warm">
                            <span className="relative flex w-1.5 h-1.5">
                                <span className="absolute inset-0 rounded-full bg-accent-warm animate-pulse-glow" />
                                <span className="relative rounded-full w-1.5 h-1.5 bg-accent-warm" />
                            </span>
                            {t.projects.ongoing}
                        </span>
                    )}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">{project.title}</h3>
                <p className="font-mono text-xs text-text-muted mb-4">{project.period}</p>

                <div className="glass border border-border rounded-xl p-6 mb-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]">
                    <p className="text-text-dim text-base leading-relaxed">{content.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                    {content.features.map((f) => (
                        <li key={f} className="text-text-dim text-sm pl-6 relative">
                            <span className="absolute left-0 text-accent font-bold">▹</span>
                            {f}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="font-mono text-xs px-2.5 py-1 bg-bg-card border border-border-soft rounded text-text-muted"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {project.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-mono text-text-dim hover:text-accent transition-colors group/link"
                            >
                                <Github size={14} />
                                {t.projects[link.labelKey]}
                                <ArrowUpRight
                                    size={12}
                                    className="opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all"
                                />
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className={`relative aspect-[4/3] rounded-2xl bg-bg-card border border-border overflow-hidden group ${
                    reverse ? 'lg:order-1' : ''
                }`}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                <ProjectShape shape={project.shape} color={project.color} />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-bg">
                        <ArrowUpRight size={16} />
                    </div>
                </div>
            </motion.div>
        </motion.article>
    );
}

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-24 md:py-32 relative">
            <div className="container-x">
                <SectionHeader num={t.sections.projects.num} title={t.sections.projects.title} />

                <div className="space-y-20 md:space-y-28">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-16"
                >
                    <a
                        href="https://github.com/NTT-DevFPT?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-all hover:-translate-y-0.5"
                    >
                        {t.projects.viewAll}
                        <ExternalLink size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
