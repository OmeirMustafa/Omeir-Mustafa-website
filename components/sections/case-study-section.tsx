"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";

export function CaseStudySection() {
    const luminaHighlights = [
        "Complete UI/UX redesign",
        "Improved navigation and content structure",
        "Performance-optimized layout",
        "Modern, professional visual identity",
    ];

    const anchorHighlights = [
        "High-trust financial authority aesthetic",
        "Tax-loss audit & calculator widgets",
        "Private wealth gated content architecture",
        "Dark-mode premium positioning",
    ];

    return (
        <Section id="case-study" className="bg-background-subtle">
            <Container>
                {/* Header - minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground mb-4">
                        Selected Work
                    </h2>
                    <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
                        A curation of high-impact digital experiences built for authority and conversion.
                    </p>
                </motion.div>

                {/* 1. Lumina Law */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-2">
                            Lumina Law
                        </h3>
                        <p className="text-foreground-muted text-lg">
                            Estate Planning & Probate — Website Redesign
                        </p>
                    </motion.div>

                    {/* Before/After Visualization */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-16"
                    >
                        <BeforeAfterSlider
                            beforeImage="/lumina-before.jpg"
                            afterImage="/lumina-after.jpg"
                            beforeLabel="Before (Standard)"
                            afterLabel="After (Premium)"
                        />

                        <div className="flex justify-center mt-8">
                            <a
                                href="https://lumina-law-website-rebuilt.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="lg" className="border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50 text-blue-400">
                                    <span className="flex items-center gap-2">
                                        View Live Transformation
                                        <ExternalLink size={16} />
                                    </span>
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Summary */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-heading font-semibold text-foreground mb-4">The Challenge</h4>
                                <p className="text-foreground-muted leading-relaxed">
                                    A full website redesign for a law firm focused on improving visual hierarchy, credibility, and user flow without losing the approachable local feel.
                                </p>
                            </div>

                            <a
                                href="https://lumina-law-website-rebuilt.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Button variant="outline" size="lg">
                                    <span className="flex items-center gap-2">
                                        View Live Project
                                        <ExternalLink size={16} />
                                    </span>
                                </Button>
                            </a>
                        </div>

                        {/* Highlights */}
                        <div className="bg-card/30 rounded-2xl p-8 border border-border">
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-6">Key Upgrades</h4>
                            <ul className="space-y-4">
                                {luminaHighlights.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-accent mt-1 flex-shrink-0" />
                                        <span className="text-foreground-muted">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2. Anchor Capital (NEW) */}
                <div className="border-t border-border pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-2">
                                    Anchor Capital
                                </h3>
                                <p className="text-foreground-muted text-lg">
                                    Wealth Management for Founders — Brand & Platform
                                </p>
                            </div>
                            <a
                                href="https://financial-advisor-firm-anchor-case.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="w-full md:w-auto">
                                    Visit Website <ExternalLink size={16} className="ml-2" />
                                </Button>
                            </a>
                        </div>

                        {/* Project Preview */}
                        <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl aspect-[16/9] mb-12 group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/anchor-preview.png"
                                alt="Anchor Capital Website Preview"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 pointer-events-none" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6">
                                <h4 className="text-lg font-heading font-semibold text-foreground">The Mission</h4>
                                <p className="text-foreground-muted leading-relaxed">
                                    Design an ultra-premium, high-authority digital presence for a wealth management firm targeting post-exit tech founders. The goal: Unshakable trust and immediate value demonstration.
                                </p>
                            </div>

                            <div className="bg-card/30 rounded-2xl p-8 border border-border">
                                <h4 className="text-lg font-heading font-semibold text-foreground mb-6">Key Features</h4>
                                <ul className="space-y-4">
                                    {anchorHighlights.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-accent mt-1 flex-shrink-0" />
                                            <span className="text-foreground-muted">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </Container>
        </Section>
    );
}
