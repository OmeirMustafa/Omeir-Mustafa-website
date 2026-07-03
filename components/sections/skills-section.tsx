import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

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
        <Section id="skills" className="bg-background relative overflow-hidden py-24 md:py-32">
            {/* Seamless Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            <Container>
                <div className="relative z-10">
                    <div
                        className="mb-16 max-w-2xl"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-6">/ Core Competencies</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-6">
                            Technical Stack
                        </h2>
                        <p className="text-base text-foreground-muted leading-relaxed">
                            A curated selection of core technologies and architectures designed for high performance, reliability, and business impact. Focused on specialized depth rather than template generality.
                        </p>
                    </div>

                    {/* Dashboard-Style Modular Grid */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                        {/* Core Expertise Column */}
                        <div className="md:col-span-7 space-y-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 block mb-4">Core Focus Areas</span>
                            
                            <div className="grid sm:grid-cols-2 gap-4">
                                {coreExpertise.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="p-5 rounded-2xl bg-muted/45 border border-border hover:border-border-hover transition-colors group"
                                    >
                                        <h3 className="text-sm font-bold text-white mb-2 font-sans group-hover:text-zinc-300 transition-colors">
                                            {skill.name}
                                        </h3>
                                        <p className="text-xs text-foreground-muted leading-relaxed font-mono">
                                            {skill.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Tools Column */}
                        <div className="md:col-span-5">
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 block mb-8 md:mb-6">Secondary & Tooling Ecosystem</span>
                            
                            <div
                                className="p-6 rounded-3xl bg-muted/15 border border-border"
                            >
                                <div className="flex flex-wrap gap-2.5">
                                    {additionalTools.map((tool, index) => (
                                        <span
                                            key={tool}
                                            className="px-3.5 py-2 rounded-xl bg-muted border border-border text-xs font-medium text-foreground-muted font-mono hover:text-white hover:border-white/20 transition-all duration-300 select-none cursor-default"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
