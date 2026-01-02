"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Check, Layout, Sparkles, X, Zap } from "lucide-react";

export function AboutSection() {
    const traits = [
        {
            icon: Layout,
            title: "Custom-Built Architecture",
            description: "No templates. No bloat. Every line of code is written to serve your specific business logic.",
        },
        {
            icon: Zap,
            title: "Performance-First Core",
            description: "Engineered for sub-second loads, perfect Lighthouse scores, and instant user interaction.",
        },
        {
            icon: Sparkles,
            title: "Premium Micro-Interactions",
            description: "Subtle, physics-based motion that signals quality without distracting from the message.",
        },
    ];

    return (
        <Section id="about" className="bg-background relative overflow-hidden">
            {/* Ultra-Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <Container>
                <div className="relative z-10">

                    {/* 1. Header Block - Editorial Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-24 md:mb-32"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-foreground tracking-tight leading-[1.1] mb-8">
                            Design With Intention. <br />
                            <span className="text-foreground-muted opacity-60">Development With Purpose.</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                            <div className="text-lg text-foreground-muted leading-relaxed">
                                <p className="mb-6">
                                    I help consultants, agencies, and service firms turn their websites into high-performance assets.
                                </p>
                                <p>
                                    Most sites are treated as digital business cards—passive, static, and forgettable. I build revenue engines that validate pricing, handle objections, and close deals while you sleep.
                                </p>
                            </div>
                            <div className="flex flex-col justify-end">
                                <p className="text-xl md:text-2xl font-medium text-foreground border-l-2 border-accent pl-6 py-2">
                                    &quot;I don&apos;t just write code. I engineer clarity, trust, and revenue opportunity.&quot;
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-32">
                        {traits.map((trait, index) => (
                            <motion.div
                                key={trait.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group p-8 rounded-3xl bg-background-subtle border border-white/5 hover:border-accent/20 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="w-14 h-14 rounded-2xl bg-muted border border-white/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-500 relative z-10">
                                    <trait.icon size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 relative z-10">
                                    {trait.title}
                                </h3>
                                <p className="text-foreground-muted text-sm leading-relaxed relative z-10">
                                    {trait.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* 3. The "Filter" - High Contrast Comparison */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Who This Is For - Dark/Premium */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-background-subtle to-background border border-accent/20 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] rounded-full" />

                            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-accent rounded-full" />
                                Who This Is For
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Firms losing high-value leads due to outdated positioning",
                                    "Experts whose digital presence contradicts their real-world reputation",
                                    "Teams tired of cosmetic redesigns that fail to move business metrics"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground-muted">
                                        <div className="mt-1 p-0.5 rounded-full bg-accent/20 text-accent">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Who This Is Not For - Muted/Standard */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-transparent border border-white/5 rounded-3xl p-8 md:p-10 opacity-70 hover:opacity-100 transition-opacity duration-500"
                        >
                            <h3 className="text-2xl font-heading font-semibold text-foreground-muted mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-foreground-subtle rounded-full" />
                                Who This Is Not For
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Quick 1-week template builds",
                                    "Lowest-bidder price shopping",
                                    "Design-by-committee environments"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground-subtle">
                                        <div className="mt-1 p-0.5 rounded-full bg-white/5 text-foreground-subtle">
                                            <X size={12} strokeWidth={3} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
