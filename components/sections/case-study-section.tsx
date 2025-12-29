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
}

const caseStudies: CaseStudy[] = [
    {
        id: "lumina",
        title: "Lumina Law",
        category: "Estate Planning Firm",
        description: "Complete visual clarity overhaul for a high-trust legal firm. Increased engagement by streamlining the user journey and modernizing the aesthetic.",
        image: "/lumina-after.jpg",
        link: "https://lumina-law-website-rebuilt.vercel.app/",
        tags: ["UI Redesign", "Next.js", "Trust Signals"]
    },
    {
        id: "anchor",
        title: "Anchor Capital",
        category: "Wealth Management",
        description: "A dark-mode, authority-first platform for a boutique wealth firm targeting post-exit tech founders. Built for absolute credibility.",
        image: "/anchor-preview.png",
        link: "https://financial-advisor-firm-anchor-case.vercel.app/",
        tags: ["Brand Identity", "Fintech Styles", "Founder UX"]
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
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground mb-4">
                        Selected Work
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl">
                        Digital experiences engineered for authority, performance, and conversion.
                    </p>
                </motion.div>

                {/* Case Study Grid */}
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
                            className="group block relative"
                        >
                            {/* Card Surface */}
                            <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] group-hover:-translate-y-1">

                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />

                                    {/* View Project Button (Floating) */}
                                    <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center shadow-lg text-white">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 pt-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-accent text-xs font-bold uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-foreground-muted text-sm leading-relaxed mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Minimal Tags */}
                                    <div className="flex flex-wrap gap-2">
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

                {/* Secondary Call to Action */}
                <div className="mt-20 text-center">
                    <Button variant="outline" className="group border-border hover:border-accent/50 text-foreground-muted hover:text-foreground">
                        <span className="flex items-center gap-2">
                            More projects coming soon
                        </span>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
