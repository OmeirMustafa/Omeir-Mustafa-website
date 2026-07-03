import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const principles = [
    {
        num: "01",
        title: "Performance is a Feature",
        description: "Latency is a business bottleneck, not just a developer metric. Sub-100ms response times reduce user friction, accelerate conversion cycles, and optimize operational margins."
    },
    {
        num: "02",
        title: "Deterministic State Machines",
        description: "In complex asynchronous systems and autonomous LLM threads, predictability is critical. Systems are architected with absolute type-safety, strict error boundaries, and state consistency."
    },
    {
        num: "03",
        title: "Outcome-Oriented Velocity",
        description: "Specialized expert logic beats template generalists. I design and code highly focused, production-grade applications that solve precise commercial objectives rather than writing generic boilerplate."
    }
];

export function PrinciplesSection() {
    return (
        <Section id="principles" className="bg-background relative overflow-hidden py-24 md:py-32">
            {/* Seamless Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            
            <Container>
                <div className="relative z-10">
                    <div
                        className="mb-20 max-w-2xl"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-6">/ Systems Thinking</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-6">
                            Engineering Philosophy
                        </h2>
                        <p className="text-base text-foreground-muted leading-relaxed">
                            Robust systems are not built by chance. They are designed under strict constraints and clear parameters to guarantee production reliability and elite user experiences.
                        </p>
                    </div>

                    {/* Editorial Layout: Alternating columns or clean row list */}
                    <div className="grid md:grid-cols-3 gap-12 md:gap-8 pt-8 border-t border-border">
                        {principles.map((p, index) => (
                            <div
                                key={p.num}
                                className="flex flex-col justify-between min-h-[180px] group"
                            >
                                <div>
                                    <span className="text-xs font-mono text-zinc-600 block mb-4 group-hover:text-white transition-colors duration-300">
                                        // {p.num}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                                        {p.title}
                                    </h3>
                                    <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed">
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
