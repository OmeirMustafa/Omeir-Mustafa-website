"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Cog, CheckCircle2 } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        title: "Conversation",
        description: "We start with a focused call to understand your goals, challenges, and timeline.",
        expectation: "No pressure, just clarity.",
    },
    {
        icon: FileText,
        title: "Proposal",
        description: "You receive a clear scope, timeline, and investment — no hidden fees or surprises.",
        expectation: "Full transparency.",
    },
    {
        icon: Cog,
        title: "Execution",
        description: "I handle the build while keeping you updated. You stay in the loop without the overwhelm.",
        expectation: "White-glove delivery.",
    },
    {
        icon: CheckCircle2,
        title: "Handoff",
        description: "You get documentation, training, and ongoing support to ensure long-term success.",
        expectation: "You're never left hanging.",
    },
];

export function ProcessSection() {
    return (
        <Section id="process" className="bg-background-subtle">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20"
                >
                    <p className="text-sm font-medium text-accent mb-4 tracking-[0.2em] uppercase">
                        Process
                    </p>
                    <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground max-w-xl">
                        What to Expect
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

                    <div className="space-y-8 md:space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative flex gap-6 md:gap-10"
                            >
                                {/* Step indicator */}
                                <div className="relative z-10 flex-shrink-0">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-muted border border-border flex items-center justify-center"
                                    >
                                        <step.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1 md:pt-3">
                                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-foreground-muted leading-relaxed mb-3">
                                        {step.description}
                                    </p>
                                    <p className="text-sm text-accent font-medium">
                                        {step.expectation}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
