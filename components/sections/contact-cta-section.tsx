"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useModal } from "@/components/providers/modal-provider";

export function ContactCTASection() {
    const { openModal } = useModal();
    return (
        <Section id="contact-cta" className="bg-background relative overflow-hidden py-24 md:py-32">
            {/* Seamless Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            {/* Ambient Glow - Faint and White */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.015] blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div
                    className="text-center max-w-2xl mx-auto flex flex-col items-center"
                >
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-6">/ Collaboration</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
                        System Integration. <br />
                        <span className="text-muted-foreground">Initiate Alignment.</span>
                    </h2>
                    <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-10">
                        Let&apos;s evaluate your current technical architecture and map out a robust, high-performance solution. Expect detailed project telemetry, clear scopes, and strict engineering boundaries.
                    </p>

                    <div
                        className="w-full sm:w-auto px-4"
                    >
                        <button 
                            onClick={openModal} 
                            className="w-full sm:w-auto h-12 px-8 text-sm font-semibold rounded-full bg-white text-black hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none transition-all duration-300 border border-border-hover"
                        >
                            Initiate Alignment
                        </button>
                    </div>

                    {/* Trust Note */}
                    <p
                        className="mt-8 text-[10px] text-zinc-600 font-mono max-w-sm mx-auto uppercase tracking-wider"
                    >
                        Detailed brief or technical specs are reviewed in &lt; 24 hours.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
