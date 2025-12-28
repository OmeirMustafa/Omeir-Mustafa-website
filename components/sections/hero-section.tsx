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
                    animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-accent/[0.015] blur-[120px]"
                />
                <motion.div
                    animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent/[0.01] blur-[100px]"
                />
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
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-foreground leading-[1.05] tracking-[-0.02em] mb-8">
                        Premium Websites Built
                        <br />
                        <span className="text-foreground-muted">to Convert, Perform, and Scale</span>
                    </h1>

                    {/* Sub-headline */}
                    <h2 className="text-xl md:text-2xl text-foreground-muted mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
                        I design and develop ultra-modern, high-performance websites for brands that care about quality, credibility, and results.
                    </h2>

                    {/* Supporting Line */}
                    <p className="text-sm text-accent mb-12 uppercase tracking-widest font-medium">
                        Strategy-driven design • Custom animations • Clean, scalable code
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" onClick={onContactClick}>
                            Start a Project
                        </Button>
                        <Button variant="outline" size="lg" onClick={scrollToCaseStudy}>
                            View Case Study
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
