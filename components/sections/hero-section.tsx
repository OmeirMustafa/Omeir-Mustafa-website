"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
    onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
    const scrollToCaseStudy = () => {
        const caseStudy = document.querySelector("#case-study");
        if (caseStudy) {
            caseStudy.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Section
            id="hero"
            as="header" // Render as <header>
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background: Single, barely perceptible gradient - no animation */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-accent/10 blur-[120px] will-change-transform"
                />
                <motion.div
                    animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-ghost-blue/5 blur-[100px] will-change-transform"
                />
            </div>

            <Container className="relative z-10 text-center">
                {/* Single wrapper - slower entrance */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2
                    }}
                >
                    {/* Main headline - DOMINANT */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-foreground leading-[1.05] tracking-[-0.02em] mb-8">
                        Your Website Should Be Your Best
                        <br />
                        <span className="text-foreground-muted">Revenue Asset.</span>
                    </h1>

                    {/* Sub-headline */}
                    <h2 className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                        I partner with businesses to build high-converting, authoritative websites that reduce risk and clarify your value proposition.
                    </h2>

                    {/* Supporting Line - HIDDEN (Removed to reduce noise/length per user request for clarity) */}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" onClick={onContactClick}>
                            Discuss a Project
                        </Button>
                        <Button variant="outline" size="lg" onClick={scrollToCaseStudy}>
                            View Selected Work
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
