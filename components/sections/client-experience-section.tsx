"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const values = [
    "Clear thinking before design decisions are made",
    "Calm, structured communication throughout the project",
    "Respect for industry constraints, risk, and compliance",
    "Websites that support business goals, not personal design preferences"
];

export function ClientExperienceSection() {
    return (
        <Section id="client-experience" className="bg-background relative">
            {/* Seamless Section Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <Container className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-card/30 border border-border/50 rounded-2xl p-8 md:p-12"
                >
                    <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-8 text-center">
                        What Clients Typically Value
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex items-start gap-3"
                            >
                                <div className="mt-1 text-accent">
                                    <BadgeCheck size={20} />
                                </div>
                                <p className="text-foreground-muted leading-relaxed">
                                    {value}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
