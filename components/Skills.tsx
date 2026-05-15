'use client';

import { motion } from 'framer-motion';
import { Database, Server, Monitor, Cloud, Brain } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { skillGroups, type SkillGroup } from '@/lib/data';
import { useLanguage } from '@/lib/i18n/context';

const iconMap = {
    backend: Server,
    database: Database,
    frontend: Monitor,
    devops: Cloud,
    ai: Brain,
};

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
    const Icon = iconMap[group.icon];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            style={{ transformPerspective: 1000, transformStyle: 'preserve-3d' }}
            className="group relative bg-bg-card border border-border rounded-2xl p-8 transition-colors hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(94,234,212,0.25)]"
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-3 mb-6 text-accent">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                    <span
                        key={skill.name}
                        className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-all ${
                            skill.learning
                                ? 'text-accent-warm relative pr-6'
                                : 'border-accent/20 text-accent hover:-translate-y-0.5'
                        }`}
                        style={
                            skill.learning
                                ? {
                                      background: 'rgba(251, 191, 36, 0.08)',
                                      borderColor: 'rgba(251, 191, 36, 0.3)',
                                  }
                                : { background: 'rgba(94, 234, 212, 0.08)' }
                        }
                    >
                        {skill.name}
                        {skill.learning && (
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-warm shadow-[0_0_8px_#fbbf24] animate-pulse-glow" />
                        )}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="py-24 md:py-32 relative">
            <div className="container-x">
                <SectionHeader num={t.sections.skills.num} title={t.sections.skills.title} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillGroups.map((group, i) => (
                        <SkillCard key={group.title} group={group} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
