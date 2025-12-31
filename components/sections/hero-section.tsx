"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroSectionProps {
    onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const scrollToCaseStudy = () => {
        const caseStudy = document.querySelector("#work");
        if (caseStudy) {
            caseStudy.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Staggered Text Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, rotateX: 20 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    return (
        <Section
            id="hero"
            as="header"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Parallax Background Atmos */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <motion.div
                    style={{ y: y1, opacity: 0.4 }}
                    className="absolute top-0 right-[-10%] w-[800px] h-[800px] rounded-full bg-accent/5 blur-[80px] will-change-transform"
                />
                <motion.div
                    style={{ y: y2, opacity: 0.3 }}
                    className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[60px] will-change-transform"
                />
            </div>

            <Container className="relative z-10 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto"
                >
                    {/* Main Headline - Broken into cinematic segments */}
                    <div className="overflow-hidden mb-6">
                        <motion.h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-foreground leading-[1.05] tracking-tight">
                            <span className="block overflow-hidden">
                                <motion.span variants={itemVariants} className="block">
                                    Websites designed for
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                                <motion.span variants={itemVariants} className="block">
                                    high-trust service businesses
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden text-foreground-muted/60 text-4xl md:text-6xl lg:text-7xl mt-2">
                                <motion.span variants={itemVariants} className="block">
                                    where credibility drives conversion.
                                </motion.span>
                            </span>
                        </motion.h1>
                    </div>

                    {/* Sub-headline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-foreground-muted mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        I help professional service firms turn complex offerings into clear, confidence-building websites.
                    </motion.p>

                    {/* Trust Bar */}
                    <motion.div variants={itemVariants} className="mb-12 flex justify-center">
                        <div className="px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                            <p className="text-sm font-medium tracking-widest uppercase text-foreground-subtle">
                                Specialized in: Legal • Financial • Healthcare • Advisory
                            </p>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" onClick={onContactClick} className="h-14 px-8 text-lg shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] transition-shadow duration-500">
                            Start a Project
                        </Button>
                        <Button variant="outline" size="lg" onClick={scrollToCaseStudy} className="h-14 px-8 text-lg border-white/10 hover:bg-white/5">
                            View Case Studies
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
}
