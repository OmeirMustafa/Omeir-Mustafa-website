"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { MouseEvent } from "react";

interface CaseStudy {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
    badge: "Client Project" | "Concept Case Study";
    strategicTradeoffs?: string[];
}

const caseStudies: CaseStudy[] = [
    {
        id: "lumina",
        title: "Lumina Law",
        category: "Visual Trust & Clarity",
        description: "Redesigned a legal firm's digital presence to modernize their authority without losing gravitas. Focused on immediate service comprehension.",
        image: "/lumina-preview.png",
        link: "https://lumina-law-website-rebuilt.vercel.app/",
        tags: ["Self-Initiated Redesign"],
        badge: "Client Project",
        strategicTradeoffs: [
            "Prioritized restraint over trendy animations",
            " Simplified navigation to reduce client friction",
            "Typography chosen for maximum readability"
        ]
    },
    {
        id: "anchor",
        title: "Anchor Capital",
        category: "Authority Positioning",
        description: "A 'dark-mode' concept for wealth advisors that signals exclusivity. Translates complex financial value into clear client outcomes.",
        image: "/anchor-preview.png",
        link: "https://financial-advisor-firm-anchor-case.vercel.app/",
        tags: ["Concept Case Study"],
        badge: "Concept Case Study",
        strategicTradeoffs: [
            "Used dark aesthetics to signal premium value",
            "Focused on 'outcome' messaging over features",
            "Built for high-net-worth mobile users"
        ]
    },
    {
        id: "aura",
        title: "Aura Health",
        category: "Clinical Authority",
        description: "A calm, accessible concept for a medical clinic. Designed to reduce patient anxiety and simplify the booking journey.",
        image: "/aura-preview.png",
        link: "https://healthcare-clinic-conceptual-case-s.vercel.app/",
        tags: ["Concept Case Study"],
        badge: "Concept Case Study",
        strategicTradeoffs: [
            "Selected soft 'calm' color palette",
            "Removed aggressive CTAs for a gentler flow",
            "Accessibility-first design structure"
        ]
    },
    {
        id: "revops",
        title: "RevOps Circuitry",
        category: "B2B Infrastructure",
        description: "Streamlined a complex technical service offering into a clear, high-conversion landing page for sophisticated B2B buyers.",
        image: "/revops-circuitry-preview.png",
        link: "https://revopscircuitry.vercel.app/",
        tags: ["Client Project"],
        badge: "Client Project",
        strategicTradeoffs: [
            "Condensed technical jargon into benefits",
            "High-contrast design for B2B clarity",
            "Direct-to-calendar conversion funnel"
        ]
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
            className={`group relative border border-white/10 bg-gray-900/20 overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            {children}
        </div>
    );
}

export function CaseStudySection() {
    return (
        <Section id="work" className="bg-background relative overflow-hidden">
            {/* Seamless Section Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Deep Background Glow */}
            <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 md:mb-24"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <ArrowRight className="text-accent w-6 h-6" />
                        <span className="text-sm font-medium tracking-widest text-accent uppercase">
                            Selected Work
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground mb-4 tracking-tight">
                        Case Studies
                    </h2>
                    <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
                        Solving business problems through clarity, structure, and strategic design.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {caseStudies.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`block relative ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
                        >
                            <SpotlightCard className="rounded-3xl h-full flex flex-col transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5">
                                {/* Image Area */}
                                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'} w-full`}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                        sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />

                                    {/* Glass Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-xl ${project.badge === "Client Project"
                                            ? "bg-accent/80 border-accent text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                            : "bg-black/40 border-white/10 text-white/90"
                                            }`}>
                                            {project.badge}
                                        </span>
                                    </div>

                                    {/* Action Button */}
                                    <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                        <div className="h-12 w-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10">
                                    <div className="mb-2">
                                        <span className="text-accent text-xs font-bold uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-heading font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-foreground-muted leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Trade-offs for featured */}
                                    {project.strategicTradeoffs && (
                                        <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
                                            {project.strategicTradeoffs.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 text-xs text-foreground-subtle">
                                                    <span className="text-accent mt-0.5">•</span>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </SpotlightCard>
                        </motion.a>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
