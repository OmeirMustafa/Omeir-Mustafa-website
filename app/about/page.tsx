"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const experience = [
    {
        role: "Senior Marketing Operations Manager",
        company: "Tech Corp",
        year: "2022 - Present",
        description: "Leading the automation strategies and CRM architecture for a global sales team."
    },
    {
        role: "Business Development Specialist",
        company: "Growth Inc",
        year: "2019 - 2022",
        description: "Generated $2M+ in pipeline revenue through targeted outbound campaigns."
    },
    {
        role: "CRM Administrator",
        company: "StartUp Ltd",
        year: "2017 - 2019",
        description: "Implemented and managed Salesforce instances for 50+ users."
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            <Section>
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-4xl font-heading font-medium mb-6 md:text-5xl">
                                Bridging the gap between strategy and execution.
                            </h1>
                            <p className="text-muted text-lg mb-6 leading-relaxed">
                                I am a Business Development & CRM Specialist with a passion for building scalable systems.
                                My work focuses on optimizing the revenue engine—ensuring that marketing inputs lead to sales outputs with minimal friction.
                            </p>
                            <p className="text-muted text-lg leading-relaxed">
                                With a deep technical understanding of modern CRM platforms (Hubspot, Salesforce) and a strategic mindset for growth, I help businesses unlock their true potential.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="text-muted">Profile Image Placeholder</span>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-white/5">
                <Container>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-heading font-medium mb-12"
                    >
                        Experience
                    </motion.h2>

                    <div className="space-y-6">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8">
                                    <div>
                                        <h3 className="text-xl font-bold">{job.role}</h3>
                                        <p className="text-primary font-medium">{job.company}</p>
                                    </div>
                                    <div className="md:text-right">
                                        <span className="text-sm text-muted block mb-2">{job.year}</span>
                                        <p className="text-muted md:max-w-md">{job.description}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
