"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
    const corePrinciples = [
        {
            icon: Cpu,
            title: "Production-Grade AI Architecture",
            description: "I build robust integrations utilizing advanced LLM orchestrations, RAG pipelines, and agent frameworks designed for deterministic outcomes and sub-second latency.",
        },
        {
            icon: ShieldCheck,
            title: "Systems-First Engineering",
            description: "Performance is not optional. Every system is structured with custom-crafted, clean Next.js, robust APIs, type-safety, and streamlined backend architectures.",
        },
    ];

    return (
        <Section id="about" className="bg-black relative overflow-hidden py-24 md:py-32">
            {/* Ambient Lighting - Extreme faint white */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

            <Container>
                <div className="relative z-10">

                    {/* Editorial Layout Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 md:mb-28"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6">/ Professional Context</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-12">
                            Technical Rigor. <br />
                            <span className="text-zinc-500">Commercial Perspective.</span>
                        </h2>

                        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
                            {/* Profile Bio Column */}
                            <div className="md:col-span-7 text-base sm:text-lg text-zinc-400 leading-relaxed space-y-6">
                                <p>
                                    I am Omeir Mustafa, a product engineer and systems architect. I operate at the intersection of complex backends and refined user experiences, building applications that validate high-trust demands, solve hard technical bottlenecks, and accelerate startup velocity.
                                </p>
                                <p>
                                    Most developer portfolios focus on listings of technologies. I focus on execution. I collaborate with early-stage founders and high-performance teams to design and code production-grade applications that scale seamlessly and feel incredibly responsive.
                                </p>
                                <div className="pt-4 flex flex-wrap gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-zinc-600 font-mono">LOCATION</span>
                                        <span className="text-sm font-semibold text-white">Dhaka, BD (Remote)</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-zinc-600 font-mono">FOCUS</span>
                                        <span className="text-sm font-semibold text-white">AI Infrastructure & Web</span>
                                    </div>
                                </div>
                            </div>

                            {/* Image & Card Column */}
                            <div className="md:col-span-5 flex flex-col gap-6 w-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="p-6 rounded-3xl bg-zinc-950 border border-white/5 flex items-center gap-5 shadow-xl relative overflow-hidden"
                                >
                                    {/* Abstract vector overlay in box */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent pointer-events-none" />
                                    
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/5 shadow-inner bg-zinc-900 flex-shrink-0">
                                        <Image
                                            src="/omeir-profile.jpg"
                                            alt="Omeir Mustafa - Product Architect & Senior AI Engineer"
                                            fill
                                            className="object-cover grayscale brightness-95"
                                            sizes="80px"
                                            onError={(e) => {
                                                // Fallback if image doesn't exist
                                                const target = e.target as HTMLElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                        {/* Avatar Fallback Graphic */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-white font-mono text-xl font-bold select-none z-[-1]">
                                            OM
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold text-white leading-tight">Omeir Mustafa</h4>
                                        <p className="text-xs text-zinc-500 mb-2 font-mono">PRODUCT ARCHITECT</p>
                                        <a 
                                            href="https://linkedin.com/in/omeirmustafa" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider text-white hover:text-zinc-300 transition-colors uppercase"
                                        >
                                            Verify Profile <ArrowUpRight size={10} />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Operational Core Capability Cards */}
                    <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-white/5">
                        {corePrinciples.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group p-8 rounded-3xl bg-zinc-950/30 border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent pointer-events-none" />

                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300">
                                    <item.icon size={18} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </Container>
        </Section>
    );
}
