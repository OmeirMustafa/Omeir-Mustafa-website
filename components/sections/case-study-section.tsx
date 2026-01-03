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
    badge: "Client Project" | "Concept Case Study";
    businessContext: string;
    constraints: string[];
    impact: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: "lumina",
        title: "Lumina Law",
        category: "Visual Trust & Clarity",
        description: "Modernizing a legacy law firm to compete with digital-first disruptors without losing their established gravitas.",
        image: "/lumina-preview.png",
        link: "https://lumina-law-website-rebuilt.vercel.app/",
        badge: "Client Project",
        businessContext: "Firm was losing leads to newer, less experienced competitors with better websites.",
        constraints: ["Must retain conservative 'serious' tone", "Zero tolerance for flashy animations", "Mobile-first for commuter clients"],
        impact: "Established a digital presence that validated their premium hourly rates."
    },
    {
        id: "revops",
        title: "RevOps Circuitry",
        category: "B2B Infrastructure",
        description: "Transforming a complex technical service offering into a streamlined conversion engine for 6-figure contracts.",
        image: "/revops-circuitry-preview.png",
        link: "https://revopscircuitry.vercel.app/",
        badge: "Client Project",
        businessContext: "Prospects were confused by the technical complexity of the service offering.",
        constraints: ["High-ticket B2B Audience", "Need to filter out low-budget leads", "Explain 'invisible' backend work"],
        impact: "Reduced sales cycle time by clarifying value proposition upfront."
    },
    {
        id: "anchor",
        title: "Anchor Capital",
        category: "Authority Positioning",
        description: "Wealth management infrastructure designed to signal exclusivity and competence to high-net-worth individuals.",
        image: "/anchor-preview.png",
        link: "https://financial-advisor-firm-anchor-case.vercel.app/",
        badge: "Concept Case Study",
        businessContext: "Wealth advisors often look generic. Anchor needed to look like a 'private bank'.",
        constraints: ["Dark mode requirement (rare in finance)", "Strict data privacy signaling", "Mobile-heavy user base"],
        impact: "Demonstrated how visual design affects perceived asset value."
    },
    {
        id: "aura",
        title: "Aura Health",
        category: "Clinical Authority",
        description: "Reducing patient booking anxiety through an interface designed for calm, accessibility, and speed.",
        image: "/aura-preview.png",
        link: "https://healthcare-clinic-conceptual-case-s.vercel.app/",
        badge: "Concept Case Study",
        businessContext: "Medical websites are often cluttered, increasing patient stress.",
        constraints: ["WCAG Accessibility Compliance", "Calm color psychology", "One-click booking flow"],
        impact: "Hypothesis: 20% increase in booking completion due to reduced friction."
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

                                    {/* Business Context Block */}
                                    <div className="mt-auto space-y-6 pt-6 border-t border-white/5">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground-subtle mb-2">Context</h4>
                                            <p className="text-sm text-foreground-muted">{project.businessContext}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground-subtle mb-2">Constraints & Logic</h4>
                                            <ul className="space-y-1">
                                                {project.constraints.map((c, i) => (
                                                    <li key={i} className="text-xs text-foreground-muted/80 flex items-start gap-2">
                                                        <span className="text-accent">•</span> {c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground-subtle mb-2">Impact</h4>
                                            <p className="text-sm text-foreground font-medium border-l-2 border-accent pl-3 text-white/90">
                                                {project.impact}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.a>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
