"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

interface ContactCTASectionProps {
    onContactClick: () => void;
}

export function ContactCTASection({ onContactClick }: ContactCTASectionProps) {
    return (
        <Section id="contact-cta" className="bg-black relative overflow-hidden py-24 md:py-32">
            {/* Seamless Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            {/* Ambient Glow - Faint and White */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.015] blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto flex flex-col items-center"
                >
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6">/ Collaboration</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
                        System Integration. <br />
                        <span className="text-zinc-500">Initiate Alignment.</span>
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-10">
                        Let&apos;s evaluate your current technical architecture and map out a robust, high-performance solution. Expect detailed project telemetry, clear scopes, and strict engineering boundaries.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="w-full sm:w-auto px-4"
                    >
                        <button 
                            onClick={onContactClick} 
                            className="w-full sm:w-auto h-12 px-8 text-sm font-semibold rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 border border-white/10"
                        >
                            Initiate Alignment
                        </button>
                    </motion.div>

                    {/* Trust Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-[10px] text-zinc-600 font-mono max-w-sm mx-auto uppercase tracking-wider"
                    >
                        Detailed brief or technical specs are reviewed in &lt; 24 hours.
                    </motion.p>
                </motion.div>
            </Container>
        </Section>
    );
}
