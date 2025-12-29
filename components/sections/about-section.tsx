"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Layout, Zap, Sparkles } from "lucide-react";

export function AboutSection() {
    const traits = [
        {
            icon: Layout,
            title: "Custom-Built",
            description: "No templates, no shortcuts.",
        },
        {
            icon: Zap,
            title: "Performance-First",
            description: "Optimized for speed, SEO, and scalability.",
        },
        {
            icon: Sparkles,
            title: "Detail-Obsessed",
            description: "Micro-interactions, motion, and polish.",
        },
    ];

    return (
        <Section id="about" className="bg-background-subtle">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground mb-8">
                        Design With Intention.
                        <br />
                        <span className="text-foreground-muted">Development With Commercial Purpose.</span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-foreground-muted leading-relaxed mb-16">
                        <p>
                            I&apos;m Omeir. I help consultants, agencies, and service businesses turn their websites into assets that actually work.
                        </p>
                        <p>
                            Most websites are treated as digital business cards. That is a missed opportunity. Your website should be your hardest-working employee—validating your pricing, answering objections, and closing deals while you sleep.
                        </p>
                        <p className="font-medium text-foreground">
                            I don&apos;t just write code. I engineer clarity, trust, and revenue opportunity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 border-t border-border pt-12">
                        {traits.map((trait, index) => (
                            <motion.div
                                key={trait.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                                    <trait.icon size={20} className="text-accent" />
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                                    {trait.title}
                                </h3>
                                <p className="text-foreground-muted text-sm">
                                    {trait.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Anchors - Who This Is For */}
                    <div className="mt-20 border-t border-border pt-12">
                        <div className="grid md:grid-cols-2 gap-12 text-left">
                            <div>
                                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                                    Who This Is For
                                </h3>
                                <ul className="space-y-3 text-foreground-muted">
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Service businesses selling high-ticket offers ($5k+)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Consultants who need to justify premium pricing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1">✓</span>
                                        <span>Founders aiming to exit or raise capital</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                                    Who This Is Not For
                                </h3>
                                <ul className="space-y-3 text-foreground-muted">
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground-subtle mt-1">×</span>
                                        <span>Concept-stage startups looking for a "quick MVP"</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground-subtle mt-1">×</span>
                                        <span>Projects where "cheap" is the main priority</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground-subtle mt-1">×</span>
                                        <span>Those who view design as "just decoration"</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Authority Insight */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-muted/30 border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto mt-16 text-center"
                        >
                            <p className="text-lg text-foreground font-medium italic">
                                &ldquo;If your website confuses your visitors, you are voluntarily lowering your revenue. Clarity is the ultimate competitive advantage.&rdquo;
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
