"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const services = [
    {
        title: "Custom Website Design",
        description: "High-end UI/UX design focused on clarity, hierarchy, and conversion. Every pixel has a purpose.",
    },
    {
        title: "Web Development",
        description: "Clean, scalable development using modern technologies with a focus on performance and maintainability.",
    },
    {
        title: "Animations & Interactions",
        description: "Smooth, meaningful motion design that enhances usability and elevates perceived quality.",
    },
    {
        title: "SEO & Optimization",
        description: "Technical SEO, semantic structure, and performance optimization built directly into the site.",
    },
];

export function ServicesSection() {
    return (
        <Section id="services">
            <Container>
                {/* Header - minimal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground">
                        What I Do
                    </h2>
                </motion.div>

                {/* Service list - simple, no decorations */}
                <div className="space-y-0 border-t border-border">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="border-b border-border py-10 md:py-14"
                        >
                            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-baseline">
                                <h3 className="text-xl md:text-2xl font-heading font-medium text-foreground">
                                    {service.title}
                                </h3>
                                <p className="text-foreground-muted leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary CTA - Low Friction */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a href="mailto:omeirmustafa.work@gmail.com" className="inline-flex items-center text-foreground-muted hover:text-accent transition-colors font-medium border-b border-transparent hover:border-accent pb-0.5">
                        Not ready to commit? Discuss a project
                    </a>
                </motion.div>
            </Container>
        </Section>
    );
}
