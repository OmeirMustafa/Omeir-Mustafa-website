"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        number: "01",
        title: "Systems Architecture",
        outcome: "Unified operations that scale",
        description: "Design and implement the infrastructure that connects your sales, marketing, and customer success teams into one cohesive system.",
    },
    {
        number: "02",
        title: "Process Automation",
        outcome: "Hours back in your week",
        description: "Eliminate manual busywork. Build intelligent workflows that handle repetitive tasks while you focus on growth.",
    },
    {
        number: "03",
        title: "Revenue Operations",
        outcome: "Data-driven decisions",
        description: "Create visibility across your entire pipeline. Know exactly what's working and where to invest next.",
    },
];

export function ServicesSection() {
    return (
        <Section id="services">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20"
                >
                    <p className="text-sm font-medium text-accent mb-4 tracking-[0.2em] uppercase">
                        Services
                    </p>
                    <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground max-w-2xl">
                        What I Do
                    </h2>
                </motion.div>

                {/* Service Cards */}
                <div className="space-y-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="group relative glass rounded-2xl p-8 md:p-10 transition-all duration-300 hover:bg-card-hover cursor-pointer">
                                {/* Grid layout */}
                                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                                    {/* Number */}
                                    <div className="md:col-span-1">
                                        <span className="text-sm font-medium text-foreground-subtle">
                                            {service.number}
                                        </span>
                                    </div>

                                    {/* Title + Outcome */}
                                    <div className="md:col-span-4">
                                        <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-accent">
                                            {service.outcome}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div className="md:col-span-6">
                                        <p className="text-foreground-muted leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Arrow indicator */}
                                    <div className="md:col-span-1 flex justify-end">
                                        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                                            <ArrowUpRight
                                                size={18}
                                                className="text-foreground-muted group-hover:text-accent transition-colors duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
