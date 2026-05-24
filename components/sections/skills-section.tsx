"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const coreExpertise = [
    { name: "AI Integrations", desc: "Autonomous agent execution, dynamic prompt engineering, RAG pipelines, OpenAI, Anthropic, LangChain." },
    { name: "Product Architecture", desc: "High-performance full-stack system structures, state machines, WebSocket integrations, low latency." },
    { name: "Next.js & React", desc: "Production-grade, highly-responsive client experiences, server components, routing optimization." },
    { name: "TypeScript & Node.js", desc: "Type-safe robust backends, microservice integrations, secure API pipelines." },
];

const additionalTools = [
    "AWS Suite", "FastAPI", "Docker", "Python", "Prisma ORM", "pgvector", "GraphQL", "Redis", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Git / CI/CD"
];

export function SkillsSection() {
    return (
        <Section id="skills" className="bg-black relative overflow-hidden py-24 md:py-32">
            {/* Seamless Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            <Container>
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 max-w-2xl"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6">/ Core Competencies</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-6">
                            Technical Stack
                        </h2>
                        <p className="text-base text-zinc-400 leading-relaxed">
                            A curated selection of core technologies and architectures designed for high performance, reliability, and business impact. Focused on specialized depth rather than template generality.
                        </p>
                    </motion.div>

                    {/* Dashboard-Style Modular Grid */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                        {/* Core Expertise Column */}
                        <div className="md:col-span-7 space-y-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 block mb-4">Core Focus Areas</span>
                            
                            <div className="grid sm:grid-cols-2 gap-4">
                                {coreExpertise.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05, duration: 0.4 }}
                                        className="p-5 rounded-2xl bg-zinc-950/45 border border-white/5 hover:border-white/10 transition-colors group"
                                    >
                                        <h3 className="text-sm font-bold text-white mb-2 font-sans group-hover:text-zinc-300 transition-colors">
                                            {skill.name}
                                        </h3>
                                        <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                                            {skill.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Tools Column */}
                        <div className="md:col-span-5">
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 block mb-8 md:mb-6">Secondary & Tooling Ecosystem</span>
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="p-6 rounded-3xl bg-zinc-950/15 border border-white/5"
                            >
                                <div className="flex flex-wrap gap-2.5">
                                    {additionalTools.map((tool, index) => (
                                        <motion.span
                                            key={tool}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.02, duration: 0.3 }}
                                            className="px-3.5 py-2 rounded-xl bg-zinc-950 border border-white/5 text-xs font-medium text-zinc-400 font-mono hover:text-white hover:border-white/20 transition-all duration-300 select-none cursor-default"
                                        >
                                            {tool}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
