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
                        <span className="text-foreground-muted">Development With Precision.</span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-foreground-muted leading-relaxed mb-16">
                        <p>
                            I&apos;m Omeir Mustafa — a web designer and developer focused on building premium digital experiences.
                        </p>
                        <p>
                            I don&apos;t use templates. Every interface, animation, and interaction is carefully crafted to reflect your brand, improve user experience, and drive meaningful results.
                        </p>
                        <p>
                            Whether it&apos;s a business website, landing page, or full redesign, my approach combines strategy, aesthetics, and performance.
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
                </motion.div>
            </Container>
        </Section>
    );
}
