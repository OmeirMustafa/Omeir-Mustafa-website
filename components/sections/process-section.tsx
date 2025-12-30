"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery & Alignment",
        description: "Understand the business, audience, constraints, and success criteria before design begins.",
    },
    {
        number: "02",
        title: "Strategy & Execution",
        description: "Translate business goals into structure, UX decisions, and a scalable technical build.",
    },
    {
        number: "03",
        title: "Launch & Refinement",
        description: "Deliver a production-ready website with clarity, performance, and long-term maintainability.",
    },
];

export function ProcessSection() {
    return (
        <Section id="process">
            <Container>
                {/* Header - minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground">
                        How It Works
                    </h2>
                </motion.div>

                {/* Steps - simple grid, no icons */}
                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <p className="text-sm text-foreground-subtle mb-4">
                                {step.number}
                            </p>
                            <h3 className="text-xl font-heading font-medium text-foreground mb-3">
                                {step.title}
                            </h3>
                            <p className="text-foreground-muted leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Expectation Setting - Trust Anchor */}
                <div className="mt-16 text-center border-t border-border/30 pt-8">
                    <p className="text-sm md:text-base text-foreground-muted italic max-w-2xl mx-auto">
                        Throughout the process, decisions are documented, explained, and aligned with business priorities — not personal design preference.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
