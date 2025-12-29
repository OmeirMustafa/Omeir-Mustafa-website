"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Diagnosis & Strategy",
        description: "We identify the friction points in your current presence and define exactly what success looks like for your business.",
    },
    {
        number: "02",
        title: "Authority Architecture",
        description: "I design a system that positions you as the market leader, removing doubt and validating your pricing.",
    },
    {
        number: "03",
        title: "Commercial Build",
        description: "Development focused on stability and speed. No bloated code, just a lean asset ready for traffic.",
    },
    {
        number: "04",
        title: "Deployment & Handover",
        description: "A stress-free launch. I ensure you own your assets and understand how to use them.",
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
                <div className="grid md:grid-cols-4 gap-12 md:gap-8">
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
            </Container>
        </Section>
    );
}
