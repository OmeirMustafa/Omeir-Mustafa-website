"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
    onContactClick: () => void;
}

// Floating orb component for subtle background animation
function FloatingOrb({
    className,
    delay = 0,
    duration = 20
}: {
    className?: string;
    delay?: number;
    duration?: number;
}) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay,
            }}
        />
    );
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
    const scrollToNext = () => {
        const caseStudy = document.querySelector("#case-study");
        if (caseStudy) {
            caseStudy.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Primary accent orb - top right */}
                <FloatingOrb
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-3xl"
                    delay={0}
                    duration={25}
                />
                {/* Secondary orb - bottom left */}
                <FloatingOrb
                    className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-3xl"
                    delay={5}
                    duration={30}
                />
                {/* Small accent orb - center */}
                <FloatingOrb
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.015] blur-3xl"
                    delay={2}
                    duration={35}
                />
            </div>

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <Container className="relative z-10 text-center">
                {/* Staggered content entrance */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Tagline - subtle, confident */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm font-medium text-accent mb-8 tracking-[0.2em] uppercase"
                    >
                        Revenue Operations
                    </motion.p>

                    {/* Main headline - short, confident, premium */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-foreground leading-[1.1] mb-8 tracking-tight"
                    >
                        Build Systems
                        <br />
                        <span className="text-foreground-muted">That Scale</span>
                    </motion.h1>

                    {/* Single line descriptor */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-foreground-muted mb-12 max-w-md mx-auto"
                    >
                        CRM architecture and automation for growth-stage companies.
                    </motion.p>

                    {/* Primary CTA only - restrained */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Button size="lg" onClick={onContactClick}>
                            Start a Project
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator - minimal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <button
                        onClick={scrollToNext}
                        className="group flex flex-col items-center gap-2 text-foreground-subtle hover:text-accent transition-colors duration-300"
                        aria-label="Scroll to next section"
                    >
                        <span className="text-xs tracking-wider uppercase">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }}
                            className="w-px h-8 bg-current opacity-50"
                        />
                    </button>
                </motion.div>
            </Container>
        </Section>
    );
}
