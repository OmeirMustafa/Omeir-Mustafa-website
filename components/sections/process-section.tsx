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
        <Section id="process" className="bg-black relative overflow-hidden py-24 md:py-32">
            {/* Seamless Section Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/[0.005] rounded-full blur-[150px] pointer-events-none" />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 md:mb-32 max-w-2xl"
                >
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6">/ Tactical Process</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        How It <br />
                        <span className="text-zinc-500">Works</span>
                    </h2>
                    <p className="text-base text-zinc-400 leading-relaxed">
                        A structured, transparent engineering process designed for serious businesses. Expect focused telemetry, no scope creep, and deterministic outcomes.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative">
                    {/* Vertical Line - Animated with Fade */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]">
                        {/* Track - Fades at both ends */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

                        {/* Progress Line - Fades at bottom */}
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/30 via-white/10 to-transparent"
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
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.08)] z-10" />

                                {/* Content - Alternating sides */}
                                <div className={`pl-12 md:pl-0 ${index % 2 === 1 ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}>
                                    <span className="text-7xl md:text-8xl font-sans font-bold text-white/[0.02] absolute -top-8 left-8 md:left-auto md:right-0 pointer-events-none select-none">
                                        {step.number}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-4 relative">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 relative">
                                        {step.description}
                                    </p>
                                    <ul className={`space-y-2 ${index % 2 === 1 ? 'md:ml-auto md:flex md:flex-col md:items-end' : ''}`}>
                                        {step.details.map(detail => (
                                            <li key={detail} className="text-xs text-zinc-500 font-mono flex items-center gap-2">
                                                {index % 2 === 0 && <span className="w-1.5 h-1.5 rounded-full bg-white/30" />}
                                                <span>{detail}</span>
                                                {index % 2 === 1 && <span className="w-1.5 h-1.5 rounded-full bg-white/30" />}
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
                    <p className="text-sm text-zinc-500 italic max-w-2xl mx-auto leading-relaxed">
                        &quot;Throughout the process, every single architectural decision is fully documented, benchmarked, and aligned with your operational targets—never subjective.&quot;
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
}
