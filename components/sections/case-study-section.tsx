"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Cpu, Network, Layers } from "lucide-react";
import { MouseEvent, useState, useEffect, useRef } from "react";

interface CaseStudy {
    id: string;
    title: string;
    category: string;
    description: string;
    tech: string[];
    context: string;
    constraints: string[];
    impact: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: "omnisearch",
        title: "OmniSearch AI",
        category: "AI Infrastructure",
        description: "A high-performance semantic search and RAG engine that parses millions of multi-format enterprise documents in real-time.",
        tech: ["Next.js", "FastAPI", "pgvector", "OpenAI API", "Redis", "AWS"],
        context: "Enterprise clients had multi-terabyte unindexed knowledge bases with zero semantic correlation.",
        constraints: ["Sub-100ms vector retrieval", "Strict GDPR isolation logic", "Dynamic context chunking"],
        impact: "Reduced internal support document search latency by 82% and increased agent operational efficiency by 3x."
    },
    {
        id: "synapse",
        title: "Synapse Orchestrator",
        category: "Intelligent Systems",
        description: "A low-latency developer platform for modeling, deploying, and tracking autonomous multi-agent state machines.",
        tech: ["React", "Node.js", "TypeScript", "WebSockets", "Docker", "Prisma"],
        context: "Development teams lacked tooling to coordinate complex async LLM chains with persistent state.",
        constraints: ["Exactly-once state execution", "Visual node-routing interface", "Sub-second agent handovers"],
        impact: "Facilitated over 14M+ agent execution states with 99.99% system uptime since deployment."
    },
    {
        id: "aether",
        title: "Aether Core",
        category: "Systems Engineering",
        description: "An event-driven data streaming pipeline designed to ingest, clean, and write high-throughput financial transactions.",
        tech: ["Next.js", "Go", "Apache Kafka", "AWS Suite", "Docker", "GraphQL"],
        context: "Legacy transactional architecture failed during peak events, causing database lag and event losses.",
        constraints: ["Handling 50k+ events per second", "ACID transactional consistency", "Zero-downtime cluster migrations"],
        impact: "Ingested 1.2B+ events with zero transactional losses, reducing infrastructure server costs by 42%."
    }
];

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-white/5 bg-zinc-950/20 overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 255, 255, 0.04),
                            transparent 80%
                        )
                    `,
                }}
            />
            {children}
        </div>
    );
}

// 1. OmniSearch Visual Mockup: Simulating semantic vector search coordinates
function OmniSearchVisual() {
    return (
        <div className="absolute inset-0 bg-black flex flex-col p-6 font-mono text-[10px] text-zinc-500 overflow-hidden select-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="flex items-center gap-1.5 text-white">
                    <Cpu size={12} className="text-zinc-400" />
                    <span>vector_search_engine.log</span>
                </span>
                <span className="text-zinc-600">v1.4.2</span>
            </div>
            <div className="space-y-2.5">
                <div className="text-zinc-500 flex justify-between">
                    <span>$ query --input &quot;document compliance check&quot;</span>
                    <span className="text-zinc-700">14:38:02</span>
                </div>
                <div className="text-zinc-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse"></span>
                    <span>Parsing semantic embeddings... done.</span>
                </div>
                <div className="p-3 bg-zinc-900/60 rounded-xl border border-white/5 space-y-1.5 text-zinc-400">
                    <div className="text-white flex justify-between font-semibold">
                        <span>MATCH FOUND [id: doc_9982]</span>
                        <span>SCORE: 0.9431</span>
                    </div>
                    <p className="text-[9px] text-zinc-500 line-clamp-2">
                        &quot;Section 4.2 compliance clause specifies that multi-tenant vector structures require absolute data-isolation models.&quot;
                    </p>
                </div>
                <div className="text-zinc-600">$ retrieval_latency: 78.4ms | pgvector_nodes: 32/32 active</div>
            </div>
            
            {/* Visual Vector Node Dot Matrix Background */}
            <div className="absolute right-4 bottom-4 w-28 h-20 opacity-[0.08] pointer-events-none flex flex-wrap gap-2">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 14 ? 'bg-white scale-125' : 'bg-white/50'}`} />
                ))}
            </div>
        </div>
    );
}

// 2. Synapse Visual Mockup: Node-based LLM Router state simulator
function SynapseVisual() {
    return (
        <div className="absolute inset-0 bg-black flex flex-col p-6 font-mono text-[10px] text-zinc-500 overflow-hidden select-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="flex items-center gap-1.5 text-white">
                    <Network size={12} />
                    <span>agent_orchestration_state.json</span>
                </span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-white/10 text-white text-[9px]">ACTIVE</span>
            </div>

            {/* Interactive Node Path */}
            <div className="relative flex-1 flex items-center justify-around px-2">
                <div className="flex flex-col items-center gap-1 z-10">
                    <div className="px-2.5 py-1.5 rounded-xl border border-white/10 bg-zinc-950 text-white font-semibold flex items-center gap-1">
                        <span>Gateway</span>
                    </div>
                    <span className="text-[8px] text-zinc-600">INPUT PORT</span>
                </div>

                <div className="w-10 h-px bg-dashed border-t border-white/10" />

                <div className="flex flex-col items-center gap-1 z-10">
                    <div className="px-2.5 py-1.5 rounded-xl border border-white/20 bg-zinc-900 text-white font-semibold flex items-center gap-1.5 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        <span>Router LLM</span>
                    </div>
                    <span className="text-[8px] text-zinc-500">RESOLVING</span>
                </div>

                <div className="w-10 h-px bg-dashed border-t border-white/10" />

                <div className="flex flex-col gap-2 z-10">
                    <div className="px-2.5 py-1 rounded-xl border border-white/5 bg-zinc-950 text-zinc-500">
                        <span>Research</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-xl border border-white/5 bg-zinc-950 text-zinc-500">
                        <span>Synthesize</span>
                    </div>
                </div>
            </div>

            <div className="text-[8px] text-zinc-600 border-t border-white/5 pt-3 flex justify-between">
                <span>execution_depth: 4 | async_threads: 12</span>
                <span>latency: 0.28s</span>
            </div>
        </div>
    );
}

// 3. Aether Visual Mockup: Real-time event logging partition simulator
function AetherVisual() {
    const [events, setEvents] = useState<string[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const timer = setInterval(() => {
            const logs = [
                `TOPIC:tx-ingest | ID:${Math.floor(1000 + Math.random() * 9000)} | VOL:482.4 | SUCCESS`,
                `PARTITION:02 | OFFSET:${Math.floor(100000 + Math.random() * 900000)} | ACK_OK`,
                `PIPELINE_FLOW: Event written to db node [tx_ledger]`,
            ];
            setEvents(prev => [logs[Math.floor(Math.random() * logs.length)], ...prev.slice(0, 3)]);
        }, 1200);
        return () => clearInterval(timer);
    }, [isVisible]);

    return (
        <div ref={containerRef} className="absolute inset-0 bg-black flex flex-col p-6 font-mono text-[10px] text-zinc-500 overflow-hidden select-none">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="flex items-center gap-1.5 text-white">
                    <Layers size={12} />
                    <span>kafka_broker_stream.log</span>
                </span>
                <span className="text-zinc-600 font-mono">52.4k events/s</span>
            </div>

            <div className="flex-1 space-y-2">
                {events.length === 0 ? (
                    <>
                        <div className="text-zinc-600">Initializing connection...</div>
                        <div className="text-zinc-500">Listening to partition tx-stream-ledger [Broker #04]</div>
                    </>
                ) : (
                    events.map((evt, idx) => (
                        <div key={idx} className={`truncate ${idx === 0 ? 'text-zinc-300' : 'text-zinc-600'}`}>
                            {idx === 0 ? "> " : "  "} {evt}
                        </div>
                    ))
                )}
            </div>

            <div className="text-[8px] text-zinc-600 border-t border-white/5 pt-3 flex justify-between">
                <span>node_cluster: AWS-us-east-1</span>
                <span className="text-white font-semibold">LOSS_RATE: 0.0000%</span>
            </div>
        </div>
    );
}

export function CaseStudySection() {
    const renderVisual = (id: string) => {
        switch (id) {
            case "omnisearch":
                return <OmniSearchVisual />;
            case "synapse":
                return <SynapseVisual />;
            case "aether":
                return <AetherVisual />;
            default:
                return null;
        }
    };

    return (
        <Section id="work" className="bg-black relative overflow-hidden py-24 md:py-32">
            {/* Seamless Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6">/ Production Work</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Selected Case Studies
                    </h2>
                    <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
                        A deep dive into actual software architectures engineered to resolve structural business bottlenecks, handle extreme throughput, and deliver autonomous intelligence.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {caseStudies.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full"
                        >
                            <SpotlightCard className="rounded-3xl border border-white/5 transition-all duration-300">
                                <div className="grid md:grid-cols-12 items-stretch min-h-[460px]">
                                    
                                    {/* Visual Representation Area - Left on even, Right on odd */}
                                    <div className={`md:col-span-5 relative min-h-[250px] md:min-h-auto border-b md:border-b-0 border-white/5 ${index % 2 === 1 ? 'md:order-last md:border-l' : 'md:border-r'}`}>
                                        {renderVisual(project.id)}
                                    </div>

                                    {/* Project Copy Area */}
                                    <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-xs font-bold text-white uppercase tracking-widest font-mono">
                                                    {project.category}
                                                </span>
                                                <div className="flex gap-1.5 flex-wrap">
                                                    {project.tech.slice(0, 3).map(t => (
                                                        <span key={t} className="text-[9px] font-semibold font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-zinc-200">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                                                {project.description}
                                            </p>

                                            {/* Structured Problem-Solution-Result Grid */}
                                            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 font-mono block mb-1">Context</span>
                                                    <p className="text-xs text-zinc-400 leading-relaxed">{project.context}</p>
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 font-mono block mb-1">Constraints & Logic</span>
                                                    <ul className="space-y-1">
                                                        {project.constraints.map((c, i) => (
                                                            <li key={i} className="text-xs text-zinc-400 font-mono flex items-start gap-1.5">
                                                                <span className="text-white">•</span>
                                                                <span>{c}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quantitative Impact Indicator */}
                                        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 font-mono block mb-1">Measurable Impact</span>
                                                <p className="text-sm font-semibold text-white font-mono leading-tight pl-2.5 border-l border-white/20">
                                                    {project.impact}
                                                </p>
                                            </div>
                                            <a 
                                                href="#contact-cta" 
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 transition-colors uppercase self-start"
                                            >
                                                Inquire about system <ArrowRight size={14} />
                                            </a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
