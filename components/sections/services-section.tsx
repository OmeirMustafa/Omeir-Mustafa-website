"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Palette, Terminal, MonitorSmartphone, MousePointerClick } from "lucide-react";

const services = [
    {
        title: "Strategic Positioning",
        icon: Palette,
        description: "We clarify exactly what you sell and who it's for. Then we build a visual system that signals authority before you even speak.",
        tags: ["Brand Logic", "Messaging Strategy", "Visual Identity"]
    },
    {
        title: "High-Trust Interface Design",
        icon: MousePointerClick,
        description: "Reducing decision friction. We design 'calm' interfaces that guide high-value prospects to book a consultation without hesitation.",
        tags: ["UX Systems", "Conversion Design", "Accessibility"]
    },
    {
        title: "Conversion Infrastructure",
        icon: Terminal,
        description: "Zero-compromise engineering. Your site will load instantly, rank for key intent terms, and capture leads while you sleep.",
        tags: ["Next.js", "SEO Architecture", "Performance"]
    },
    {
        title: "Adaptive Growth Systems",
        icon: MonitorSmartphone,
        description: "Built to scale. Easily add case studies, articles, and new service lines without breaking the design or needing a developer.",
        tags: ["Scalable CMS", "Mobile First", "Fluid Layouts"]
    }
];

export function ServicesSection() {
    return (
        <Section id="services" className="bg-background relative overflow-hidden">
            {/* Seamless Section Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 md:mb-32 max-w-2xl"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground mb-6 tracking-tight">
                        Capabilities & <br />
                        <span className="text-foreground-muted">Technical Expertise</span>
                    </h2>
                    <p className="text-lg text-foreground-muted leading-relaxed">
                        I bridge the gap between &quot;good design&quot; and &quot;serious engineering.&quot; Every project is a bespoke build, optimized for commercial performance.
                    </p>
                </motion.div>

                {/* Holographic Bento Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-colors duration-500 overflow-hidden flex flex-col h-full"
                        >
                            {/* Hover Gradient Reveal */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300">
                                <service.icon size={24} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col flex-1">
                                <h3 className="text-2xl font-heading font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-foreground-muted leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                {/* Tags - Pushed to bottom */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-foreground-subtle border border-white/5 group-hover:border-accent/20 group-hover:text-foreground-muted transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
