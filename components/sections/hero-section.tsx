"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";

export function HeroSection() {
    // Staggered Text Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    return (
        <Section
            id="hero"
            as="header"
            className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background"
        >
            {/* Cinematic Background Elements: Subtle CAD Line Grid & Fade-out Gradient */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
                <div 
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* Radial Mask to keep grid faint and center-focused */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(circle at center, transparent 20%, #000000 80%)"
                    }}
                />
                
                {/* Single super faint white light centered high up */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.015] blur-[120px] rounded-full" />
            </div>

            <Container className="relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center flex flex-col items-center"
                >
                    {/* Status Tag */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8 px-3 py-1 rounded-full border border-border bg-white/[0.02] backdrop-blur-sm"
                    >
                        <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                            <span>AI Educator & Systems Builder</span>
                        </p>
                    </motion.div>

                    {/* Headline */}
                    <div className="mb-6">
                        <h1 className="font-sans font-bold text-white leading-[1.08] tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            <motion.span variants={itemVariants} className="block mb-2">
                                Building AI Systems.
                            </motion.span>
                            <motion.span 
                                variants={itemVariants} 
                                className="block text-foreground-muted"
                            >
                                Teaching the Future of Work.
                            </motion.span>
                        </h1>
                    </div>

                    {/* Support copy */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl text-foreground-muted mb-10 max-w-2xl mx-auto leading-relaxed font-normal px-4"
                    >
                        Exploring AI agents, automation workflows, and the tools reshaping how we build software. Helping developers and creators harness the power of AI.
                    </motion.p>

                    {/* Action controls */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
                    >
                        <Link 
                            href="/newsletter" 
                            className={buttonStyles({ variant: "primary", className: "w-full sm:w-auto min-w-[200px]" })}
                        >
                            Join the Newsletter
                        </Link>
                    </motion.div>
                </motion.div>
            </Container>

            <SectionDivider />
        </Section>
    );
}
