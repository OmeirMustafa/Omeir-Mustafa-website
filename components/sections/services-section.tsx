"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Palette, Terminal, MonitorSmartphone, MousePointerClick } from "lucide-react";

const services = [
    {
        title: "Demand Qualification Systems",
        icon: Palette,
        description: "We don't just 'design websites'. We build specific user flows that filter out low-value inquiries and qualify high-intent buyers before they ever speak to you.",
        tags: ["Logic Mapping", "Funnel Strategy", "buyer Psychology"]
    },
    {
        title: "Trust Infrastructure",
        icon: MousePointerClick,
        description: "In high-stakes services, trust is the currency. We engineer interfaces that signal authority, competence, and reliability in milliseconds.",
        tags: ["Authority Markers", "Social Proof Systems", "Visual Credibility"]
    },
    {
        title: "Revenue Architecture",
        icon: Terminal,
        description: "Performance is revenue. We build blazing-fast, SEO-optimized systems that ensure no lead is lost to latency or technical failure.",
        tags: ["Latency Elimination", "Conversion SEO", "Scalable Tech"]
    },
    {
        title: "Scalable Operations",
        icon: MonitorSmartphone,
        description: "A system you can own. We deliver robust CMS structures that allow your team to publish insights and case studies without developer dependency.",
        tags: ["Headless CMS", "Content Operations", "Mobile Systems"]
    }
];

export function ServicesSection() {
    return (
        <Section id="services" className="bg-black relative overflow-hidden py-24 md:py-32">
            {/* Seamless Section Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.01] blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 md:mb-32 max-w-2xl"
                >
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6">/ Service Suite</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        Operational <br />
                        <span className="text-zinc-500">Capabilities</span>
                    </h2>
                    <p className="text-base text-zinc-400 leading-relaxed">
                        I bridge the gap between high-fidelity conversion-focused user interfaces and rigorous back-end systems engineering. Every deployment is custom-optimized for speed and business conversion.
                    </p>
                </motion.div>

                {/* Holographic Bento Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative p-8 md:p-10 rounded-3xl bg-zinc-950/20 border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden flex flex-col h-full"
                        >
                            {/* Hover Gradient Reveal */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-105 group-hover:bg-white/10 group-hover:text-white transition-all duration-300 border border-white/10 text-white">
                                <service.icon size={20} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                {/* Tags - Pushed to bottom */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono font-medium px-3 py-1 rounded-lg bg-white/5 text-zinc-400 border border-white/5 group-hover:border-white/10 group-hover:text-zinc-300 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
