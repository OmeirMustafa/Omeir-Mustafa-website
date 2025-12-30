"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CaseStudy {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
    badge: "Client Project" | "Concept Case Study";
}

const caseStudies: CaseStudy[] = [
    {
        id: "lumina",
        title: "Lumina Law",
        category: "Visual Trust & Clarity",
        description: "Lumina Law required a modern website that communicated credibility and professionalism while making it easy for prospective clients to understand services and initiate contact. Intended Outcome: Reduce hesitation, improve clarity, and help potential clients feel confident enough to make first contact.",
        image: "/lumina-preview.png",
        link: "https://lumina-law-website-rebuilt.vercel.app/",
        tags: ["Client Project"],
        badge: "Client Project"
    },
    {
        id: "anchor",
        title: "Anchor Capital",
        category: "Authority Positioning",
        description: "Generic branding failed to resonate with HNW founders. Solution: A 'dark-mode' aesthetic architecture that signals exclusivity, competence, and absolute financial seriousness.",
        image: "/anchor-preview.png",
        link: "https://financial-advisor-firm-anchor-case.vercel.app/",
        tags: ["Concept Case Study"],
        badge: "Concept Case Study"
    },
    {
        id: "aura",
        title: "Aura Health",
        category: "Clinical Authority",
        description: "Standard medical sites feel sterile and impersonal. Solution: A warm, high-end digital experience that reduces patient anxiety and simplifies the booking journey.",
        image: "/aura-preview.png",
        link: "https://healthcare-clinic-conceptual-case-s.vercel.app/",
        tags: ["Concept Case Study"],
        badge: "Concept Case Study"
    }
];

export function CaseStudySection() {
    return (
        <Section id="work" className="bg-background relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-ghost-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-sm font-medium tracking-widest text-accent uppercase">
                            Selected Case Studies
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground mb-4">
                        Selected Case Studies
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl">
                        Real client work and strategic concept studies focused on business clarity, trust, and conversion.
                    </p>
                </motion.div>

                {/* Case Study Grid - Scalable Layout (1 Featured + 2 Grid) */}
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
                            className={`group block relative ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
                        >
                            {/* Card Surface */}
                            <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] group-hover:-translate-y-1 h-full flex flex-col">

                                {/* Image Container */}
                                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />

                                    {/* Badge - Concept vs Client */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${project.badge === "Client Project"
                                            ? "bg-accent/20 border-accent/30 text-white"
                                            : "bg-background/40 border-white/10 text-foreground-muted"
                                            }`}>
                                            {project.badge}
                                        </span>
                                    </div>

                                    {/* View Project Button (Floating) */}
                                    <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center shadow-lg text-white">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 pt-6 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-accent text-xs font-bold uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-foreground-muted text-sm leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                        {project.description}
                                    </p>

                                    {/* Minimal Tags - Push to bottom */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full bg-muted border border-border text-foreground-subtle group-hover:border-accent/20 group-hover:text-foreground-muted transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Secondary Call to Action - MID PAGE REASSURANCE */}
                <div className="mt-24 py-12 border-t border-border/50 text-center">
                    <h3 className="text-xl md:text-2xl font-heading font-medium text-foreground mb-4">
                        Not sure if this is the right fit?
                    </h3>
                    <p className="text-foreground-muted mb-8 max-w-lg mx-auto">
                        See how I approach projects and whether my process aligns with your goals.
                    </p>
                    <Button variant="outline" size="lg" className="border-border hover:border-accent/50 text-foreground" onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}>
                        Understand the Process
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
