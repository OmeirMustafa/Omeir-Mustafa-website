"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const services = [
    {
        title: "Website Design & Development",
        description: "Premium, fast, and conversion-focused websites built from scratch.",
    },
    {
        title: "Motion & Interaction Design",
        description: "Subtle animations and micro-interactions that elevate experience.",
    },
    {
        title: "Performance & SEO",
        description: "Clean builds that load fast and rank properly.",
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
                    <p className="text-sm text-foreground-subtle mb-6 tracking-[0.15em] uppercase">
                        Services
                    </p>
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground">
                        What I do
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
            </Container>
        </Section>
    );
}
