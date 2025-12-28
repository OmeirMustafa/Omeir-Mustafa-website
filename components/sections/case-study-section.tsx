"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function CaseStudySection() {
    return (
        <Section id="case-study" className="bg-background-subtle">
            <Container>
                {/* Header - minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <p className="text-sm text-foreground-subtle mb-6 tracking-[0.15em] uppercase">
                        Selected work
                    </p>
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground">
                        Lumina Law
                    </h2>
                </motion.div>

                {/* Large preview - confident, no explanation */}
                <motion.a
                    href="https://lumina-law-website-rebuilt.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="block group"
                >
                    {/* Browser mockup - larger */}
                    <div className="relative glass rounded-2xl overflow-hidden">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-foreground-subtle/20" />
                                <div className="w-3 h-3 rounded-full bg-foreground-subtle/20" />
                                <div className="w-3 h-3 rounded-full bg-foreground-subtle/20" />
                            </div>
                        </div>

                        {/* Preview area - taller */}
                        <div className="relative aspect-[16/10] bg-gradient-to-br from-card via-muted to-card flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                                    Website Rebuild
                                </p>
                                <p className="text-foreground-muted mb-6">
                                    Clarity, trust, and modern presentation.
                                </p>
                                <span className="inline-flex items-center gap-2 text-sm text-accent group-hover:underline transition-all">
                                    View project
                                    <ExternalLink size={14} />
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.a>
            </Container>
        </Section>
    );
}
