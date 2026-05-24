"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const metrics = [
    {
        value: "99.99%",
        label: "System Uptime",
        desc: "Autonomous orchestrator nodes operational consistency in high-concurrency loops."
    },
    {
        value: "<100ms",
        label: "Query Latency",
        desc: "Avg document processing and pgvector database retrieval latency overheads."
    },
    {
        value: "14M+",
        label: "AI State Transits",
        desc: "Multi-agent interactions successfully routed, resolved, and saved to ledger."
    },
    {
        value: "98+",
        label: "Performance Score",
        desc: "Avg Core Web Vitals rating across responsive production interfaces."
    }
];

export function CredentialsSection() {
    return (
        <Section id="credentials" className="bg-black relative overflow-hidden py-20 md:py-24">
            {/* Seamless Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <Container>
                <div className="relative z-10">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-12 text-center">/ Verified Benchmarks</span>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metrics.map((m, index) => (
                            <motion.div
                                key={m.label}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                className="p-6 rounded-3xl bg-zinc-950/20 border border-white/5 flex flex-col justify-between min-h-[170px]"
                            >
                                <div>
                                    <span className="text-3xl sm:text-4xl font-bold font-mono text-white block mb-2 tracking-tighter">
                                        {m.value}
                                    </span>
                                    <span className="text-xs font-bold text-zinc-300 block mb-3 font-sans">
                                        {m.label}
                                    </span>
                                </div>
                                <p className="text-[11px] text-zinc-500 font-mono leading-relaxed">
                                    {m.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
