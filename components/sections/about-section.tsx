import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
    const corePrinciples = [
        {
            icon: Cpu,
            title: "Production-Grade AI Architecture",
            description: "I build robust AI workflows and automation pipelines designed for reliability and speed.",
        },
        {
            icon: ShieldCheck,
            title: "Systems-First Engineering",
            description: "Performance is not optional. Every system is structured with custom-crafted, clean Next.js, robust APIs, type-safety, and streamlined backend architectures.",
        },
    ];

    return (
        <Section id="about" className="bg-background relative overflow-hidden py-24 md:py-32">
            {/* Ambient Lighting - Extreme faint white */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

            <Container>
                <div className="relative z-10">

                    {/* Editorial Layout Header */}
                    <div
                        className="mb-20 md:mb-28"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-6">/ Professional Context</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-12">
                            Technical Rigor. <br />
                            <span className="text-muted-foreground">Commercial Perspective.</span>
                        </h2>

                        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
                            {/* Profile Bio Column */}
                            <div className="md:col-span-7 text-base sm:text-lg text-foreground-muted leading-relaxed space-y-6">
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
                                <div
                                    className="p-6 rounded-3xl bg-muted border border-border flex items-center gap-5 shadow-xl relative overflow-hidden"
                                >
                                    {/* Abstract vector overlay in box */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent pointer-events-none" />
                                    
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-border shadow-inner bg-zinc-900 flex-shrink-0">
                                        <Image
                                            src="/omeir-profile.jpg"
                                            alt="Omeir Mustafa - Product Architect & Senior AI Engineer"
                                            fill
                                            className="object-cover grayscale brightness-95"
                                            sizes="80px"
                                        />
                                        {/* Avatar Fallback Graphic */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-white font-mono text-xl font-bold select-none z-[-1]">
                                            OM
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold text-white leading-tight">Omeir Mustafa</h4>
                                        <p className="text-xs text-muted-foreground mb-2 font-mono">PRODUCT ARCHITECT</p>
                                        <a 
                                            href="https://linkedin.com/in/omeirmustafa" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider text-white hover:text-zinc-300 transition-colors uppercase"
                                        >
                                            Verify Profile <ArrowUpRight size={10} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Operational Core Capability Cards */}
                    <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-border">
                        {corePrinciples.map((item, index) => (
                            <div
                                key={item.title}
                                className="group p-8 rounded-3xl bg-muted/30 border border-border hover:border-border-hover transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent pointer-events-none" />

                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-border-hover flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300">
                                    <item.icon size={18} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-foreground-muted text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <div
                        className="mt-16 flex justify-center"
                    >
                        <a 
                            href="/about"
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground-muted hover:text-white transition-colors"
                        >
                            Learn More About My Work
                            <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
