"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { useModal } from "@/components/providers/modal-provider";

export function HeroSection() {
    const { openModal } = useModal();
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
            className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black"
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
                    className="absolute inset-0 bg-radial from-transparent via-black/50 to-black"
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
                    {/* Tiny Seniority Tag */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm"
                    >
                        <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                            <span>AI Infra & Product Systems</span>
                        </p>
                    </motion.div>

                    {/* Headline */}
                    <div className="mb-6">
                        <h1 className="font-sans font-bold text-white leading-[1.08] tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            <motion.span variants={itemVariants} className="block mb-2">
                                Designing and engineering
                            </motion.span>
                            <motion.span 
                                variants={itemVariants} 
                                className="block text-zinc-400"
                            >
                                production-grade AI systems.
                            </motion.span>
                        </h1>
                    </div>

                    {/* Support copy */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-normal px-4"
                    >
                        Full-stack architect focused on intelligent agents, low-latency LLM orchestration, and hyper-scalable modern web experiences. Bridging technical rigor with premium commercial design.
                    </motion.p>

                    {/* Action controls */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
                    >
                        <button 
                            onClick={openModal} 
                            className="w-full sm:w-auto h-12 px-8 text-sm font-semibold rounded-full bg-white text-black hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none transition-all duration-300 border border-white/10"
                        >
                            Initiate Alignment
                        </button>
                        <button 
                            onClick={scrollToCaseStudy} 
                            className="w-full sm:w-auto h-12 px-8 text-sm font-semibold rounded-full border border-white/10 text-white hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none transition-all duration-300"
                        >
                            Explore Architecture
                        </button>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Seamless Bottom Divider Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </Section>
    );
}
