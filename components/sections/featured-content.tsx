"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Image as ImageIcon, Youtube, FileText, ArrowRight } from "lucide-react";
import { getFeaturedContent } from "@/lib/content";
import type { ContentItem } from "@/types";

const platformIcons: Record<string, React.ElementType> = {
    reel: Play,
    carousel: ImageIcon,
    youtube: Youtube,
    blog: FileText,
};

const platformLabels: Record<string, string> = {
    reel: "Latest Reel",
    carousel: "Latest Carousel",
    youtube: "Latest Video",
    blog: "Latest Article",
};

function ContentCard({ item, index }: { item: ContentItem; index: number }) {
    const Icon = platformIcons[item.type] || FileText;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 md:p-8 rounded-3xl bg-zinc-950/20 border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden h-full"
            >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    {/* Platform Badge */}
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                            {platformLabels[item.type]}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                            <Icon size={18} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-zinc-200 transition-colors leading-snug">
                        {item.title}
                    </h3>

                    {/* Description */}
                    {item.description && (
                        <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                            {item.description}
                        </p>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {item.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/5 text-zinc-400 border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </motion.div>
    );
}

export function FeaturedContentSection() {
    const featuredContent = getFeaturedContent();

    return (
        <Section className="bg-black">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-end justify-between mb-16"
                >
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6">/ Latest Content</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                            Fresh from the <br />
                            <span className="text-zinc-500">Studio</span>
                        </h2>
                    </div>
                    <Link
                        href="/content"
                        className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors group"
                    >
                        View All Content
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredContent.slice(0, 4).map((item, index) => (
                        <ContentCard key={item.slug} item={item} index={index} />
                    ))}
                </div>

                <Link
                    href="/content"
                    className="md:hidden mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors group"
                >
                    View All Content
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </Container>
        </Section>
    );
}
