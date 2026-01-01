"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Discovery & Alignment",
        description: "We begin with a deep dive into your business model, audience psychology, and competitive landscape. No assumptions—only clarity.",
        details: ["Stakeholder interviews", "Competitive audit", "Success metrics definition"]
    },
    {
        number: "02",
        title: "Strategy & Design",
        description: "Translate insights into a visual and technical blueprint. Every design decision is rooted in business logic, not aesthetics alone.",
        details: ["Information architecture", "Wireframes & prototypes", "Design system creation"]
    },
    {
        number: "03",
        title: "Engineering & Launch",
        description: "Build a performance-first, production-ready website. Rigorous testing, zero shortcuts, and a seamless handover.",
        details: ["Next.js development", "Performance optimization", "Analytics integration"]
    },
];

export function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    return (
        <Section id="process" className="bg-background-subtle relative overflow-hidden">
            {/* Seamless Section Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 md:mb-32 max-w-2xl"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground mb-6 tracking-tight">
                        How It <br />
                        <span className="text-foreground-muted">Works</span>
                    </h2>
                    <p className="text-lg text-foreground-muted leading-relaxed">
                        A structured, transparent process designed for serious businesses. No surprises, no scope creep—just focused execution.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative">
                    {/* Vertical Line - Animated with Fade */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]">
                        {/* Track - Fades at both ends */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                        {/* Progress Line - Fades at bottom */}
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent via-accent to-transparent"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="space-y-24 md:space-y-32">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-start ${index % 2 === 1 ? 'md:text-right' : ''}`}
                            >
                                {/* Node Indicator */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10" />

                                {/* Content - Alternating sides */}
                                <div className={`pl-12 md:pl-0 ${index % 2 === 1 ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}>
                                    <span className="text-7xl md:text-8xl font-heading font-bold text-white/[0.03] absolute -top-8 left-8 md:left-auto md:right-0 pointer-events-none select-none">
                                        {step.number}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-4 relative">
                                        {step.title}
                                    </h3>
                                    <p className="text-foreground-muted leading-relaxed mb-6 relative">
                                        {step.description}
                                    </p>
                                    <ul className={`space-y-2 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                                        {step.details.map(detail => (
                                            <li key={detail} className="text-sm text-foreground-subtle flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Empty space for alternation */}
                                <div className={`hidden md:block ${index % 2 === 1 ? 'md:order-1' : ''}`} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trust Anchor */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 pt-12 border-t border-white/5 text-center"
                >
                    <p className="text-sm md:text-base text-foreground-muted italic max-w-2xl mx-auto">
                        &quot;Throughout the process, every decision is documented, explained, and aligned with your business priorities—not personal design preference.&quot;
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
}
