"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
    onContactClick: () => void;
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
            {/* Background: Single, barely perceptible gradient - no animation */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-accent/[0.015] blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent/[0.01] blur-[100px]" />
            </div>

            <Container className="relative z-10 text-center">
                {/* Single wrapper - slower entrance */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    {/* Main headline - DOMINANT */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-semibold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
                        Premium websites.
                        <br />
                        <span className="text-foreground-muted">Built with intention.</span>
                    </h1>

                    {/* Single line - minimal */}
                    <p className="text-lg text-foreground-muted mb-14 max-w-sm mx-auto leading-relaxed">
                        Design, motion, and performance — done properly.
                    </p>

                    {/* CTA - single word */}
                    <Button size="lg" onClick={onContactClick}>
                        Contact
                    </Button>
                </motion.div>

                {/* Scroll indicator - very subtle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-16 left-1/2 -translate-x-1/2"
                >
                    <button
                        onClick={scrollToNext}
                        className="flex flex-col items-center gap-3 text-foreground-subtle hover:text-foreground-muted transition-colors duration-500"
                        aria-label="Scroll to next section"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.5,
                                ease: "easeInOut"
                            }}
                            className="w-px h-12 bg-current"
                        />
                    </button>
                </motion.div>
            </Container>
        </Section>
    );
}
