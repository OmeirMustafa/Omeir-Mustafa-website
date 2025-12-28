"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";

export function CaseStudySection() {
    const highlights = [
        "Complete UI/UX redesign",
        "Improved navigation and content structure",
        "Performance-optimized layout",
        "Modern, professional visual identity",
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
                    <p className="text-2xl md:text-3xl font-medium text-foreground-muted">
                        Lumina Law — Website Redesign
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
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Summary</h3>
                        <p className="text-foreground-muted text-lg leading-relaxed mb-8">
                            A full website redesign for a law firm focused on improving visual hierarchy, credibility, and user flow.
                        </p>
                        <a
                            href="https://lumina-law-website-rebuilt.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" size="lg">
                                <span className="flex items-center gap-2">
                                    View Live Project
                                    <ExternalLink size={16} />
                                </span>
                            </Button>
                        </a>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card/30 rounded-2xl p-8 border border-border"
                    >
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Highlights</h3>
                        <ul className="space-y-4">
                            {highlights.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-accent mt-1 flex-shrink-0" />
                                    <span className="text-foreground-muted">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </Container>
        </Section>
    );
}
