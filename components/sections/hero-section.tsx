"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { motion, useScroll, useTransform } from "framer-motion";

interface HeroSectionProps {
    onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
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
                    {/* Main Headline */}
                    <div className="overflow-hidden mb-8">
                        <motion.h1
                            className="font-heading font-semibold text-foreground leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                        >
                            <span className="block overflow-hidden">
                                <motion.span variants={itemVariants} className="block">
                                    We design digital systems that
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                                <motion.span variants={itemVariants} className="block">
                                    reduce friction, qualify demand,
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden text-foreground-muted/80 text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-4">
                                <motion.span variants={itemVariants} className="block">
                                    and increase revenue clarity for service businesses.
                                </motion.span>
                            </span>
                        </motion.h1>
                    </div>

                    {/* Sub-headline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground-muted mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-medium px-2"
                    >
                        This website is not a brochure. It is operational infrastructure for law firms, medical practices, and consultancies that demand results.
                    </motion.p>

                    {/* Trust Bar */}
                    <motion.div variants={itemVariants} className="mb-10 md:mb-12 flex justify-center px-2">
                        <div className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                            <p className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wider sm:tracking-widest uppercase text-foreground-subtle flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent hidden sm:block"></span>
                                <span>Systems Thinking</span>
                                <span className="text-white/10">•</span>
                                <span>Operational Clarity</span>
                                <span className="text-white/10">•</span>
                                <span>Revenue-First</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button onClick={onContactClick} className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full bg-accent text-white font-medium shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-shadow duration-500 border border-accent/20">
                            Assess Your System
                        </button>
                        <button onClick={scrollToCaseStudy} className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full border border-white/10 text-foreground font-medium hover:bg-white/5 transition-colors">
                            View the Architecture
                        </button>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
}
