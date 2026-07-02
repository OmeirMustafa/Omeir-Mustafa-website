"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Gauge, Zap } from "lucide-react";
import { getFeaturedWorkflows } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

const difficultyColors: Record<string, string> = {
    beginner: "text-emerald-400",
    intermediate: "text-amber-400",
    advanced: "text-rose-400",
};

export function WorkflowsPreviewSection() {
    const workflows = getFeaturedWorkflows();

    return (
        <Section className="bg-black">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-end justify-between mb-16"
                >
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6">/ Workflow Library</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                            AI Workflows <br />
                            <span className="text-zinc-500">That Save Time</span>
                        </h2>
                    </div>
                    <Link
                        href="/workflows"
                        className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors group"
                    >
                        View All Workflows
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {workflows.slice(0, 3).map((workflow, index) => (
                        <motion.div
                            key={workflow.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link
                                href={`/workflows/${workflow.slug}`}
                                className="group block p-6 md:p-8 rounded-3xl bg-zinc-950/20 border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Metadata */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <Badge variant="difficulty">
                                            <Gauge size={10} className={`mr-1 ${difficultyColors[workflow.difficulty]}`} />
                                            {workflow.difficulty}
                                        </Badge>
                                        <Badge variant="default">
                                            <Clock size={10} className="mr-1" />
                                            {workflow.estimatedTime}
                                        </Badge>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-zinc-200 transition-colors leading-snug">
                                        {workflow.name}
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-2">
                                        {workflow.shortDescription}
                                    </p>

                                    {/* Time Saved */}
                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2">
                                        <Zap size={14} className="text-zinc-500" />
                                        <span className="text-xs font-mono text-zinc-400">
                                            Saves <span className="text-white font-semibold">{workflow.timeSaved}</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <Link
                    href="/workflows"
                    className="md:hidden mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors group"
                >
                    View All Workflows
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </Container>
        </Section>
    );
}
