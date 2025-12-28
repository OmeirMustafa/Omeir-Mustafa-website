"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Zap, TrendingUp } from "lucide-react";

const outcomes = [
    { icon: Sparkles, label: "Premium Design", value: "Complete Redesign" },
    { icon: Zap, label: "Performance", value: "95+ Lighthouse" },
    { icon: TrendingUp, label: "Conversion", value: "+180% Leads" },
];

export function CaseStudySection() {
    return (
        <Section id="case-study" className="bg-background-subtle overflow-hidden">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium text-accent mb-4 tracking-[0.2em] uppercase">
                        Featured Work
                    </p>
                    <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground">
                        Real Results, Premium Execution
                    </h2>
                </motion.div>

                {/* Case Study Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    {/* Browser mockup container */}
                    <div className="relative glass rounded-2xl p-2 md:p-3 overflow-hidden">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-foreground-subtle/30" />
                                <div className="w-3 h-3 rounded-full bg-foreground-subtle/30" />
                                <div className="w-3 h-3 rounded-full bg-foreground-subtle/30" />
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="px-4 py-1.5 bg-muted rounded-lg text-xs text-foreground-muted flex items-center gap-2">
                                    <span className="hidden sm:inline">lumina-law-website-rebuilt.vercel.app</span>
                                    <span className="sm:hidden">lumina-law.vercel.app</span>
                                </div>
                            </div>
                        </div>

                        {/* Website preview - gradient placeholder with project info */}
                        <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-muted via-card to-muted overflow-hidden">
                            {/* Decorative elements representing the site */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-3">
                                        Lumina Law
                                    </h3>
                                    <p className="text-foreground-muted mb-6 max-w-md">
                                        Complete website rebuild for a modern law firm
                                    </p>
                                    <a
                                        href="https://lumina-law-website-rebuilt.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-accent hover:underline"
                                    >
                                        View Live Site
                                        <ExternalLink size={16} />
                                    </a>
                                </motion.div>
                            </div>

                            {/* Subtle animated gradient overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "linear",
                                }}
                            />
                        </div>
                    </div>

                    {/* Glow effect behind the card */}
                    <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-3xl -z-10" />
                </motion.div>

                {/* Before/After + Outcomes */}
                <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                    {/* Before/After Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-foreground-subtle mb-2 uppercase tracking-wider">Before</p>
                                <p className="text-foreground-muted">
                                    Outdated design, poor mobile experience, slow load times,
                                    and a brand presence that didn&apos;t reflect their expertise.
                                </p>
                            </div>
                            <div className="w-16 h-px bg-accent/30" />
                            <div>
                                <p className="text-sm text-accent mb-2 uppercase tracking-wider">After</p>
                                <p className="text-foreground">
                                    A premium, conversion-focused website that positions Lumina Law
                                    as a modern, trustworthy firm — built for performance and results.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Outcome Metrics */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-4"
                    >
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={outcome.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <outcome.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                                <div className="text-lg md:text-xl font-heading font-bold text-foreground mb-1">
                                    {outcome.value}
                                </div>
                                <div className="text-xs text-foreground-muted">
                                    {outcome.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://lumina-law-website-rebuilt.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" size="lg">
                            <span className="flex items-center gap-2">
                                View Full Project
                                <ExternalLink size={16} />
                            </span>
                        </Button>
                    </a>
                </motion.div>
            </Container>
        </Section>
    );
}
