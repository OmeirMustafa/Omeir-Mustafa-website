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
                    {/* Main headline - DOMINANT */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-foreground leading-[1.05] tracking-[-0.02em] mb-8">
                        Websites engineered to earn trust, clarify value, and convert serious clients
                    </h1>

                    {/* Sub-headline */}
                    <h2 className="text-xl md:text-2xl text-foreground-muted mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
                        I design and build custom websites for service-based businesses where credibility, clarity, and decision confidence directly impact revenue.
                    </h2>

                    {/* Trust Anchor Line */}
                    <p className="text-sm font-medium tracking-widest uppercase text-foreground-subtle mb-10 opacity-90">
                        Strategic UX • Conversion-focused structure • Modern, maintainable engineering
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" onClick={onContactClick}>
                            Start a Project
                        </Button>
                        <Button variant="outline" size="lg" onClick={scrollToCaseStudy}>
                            View Case Studies
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
