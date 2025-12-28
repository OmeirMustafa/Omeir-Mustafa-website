"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { BarChart3, Database, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Marketing Operations",
        description: "Streamlining workflows and optimizing tech stacks for maximum efficiency and growth.",
        icon: BarChart3,
    },
    {
        title: "CRM Systems",
        description: "Expert implementation and management of Hubspot, Salesforce, and custom CRM solutions.",
        icon: Database,
    },
    {
        title: "Business Development",
        description: "Strategic planning and lead generation strategies that drive tangible revenue results.",
        icon: Users,
    },
];

export function ServicesSection() {
    return (
        <Section className="bg-background relative">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-20 text-center"
                >
                    <h2 className="text-3xl font-heading font-medium md:text-5xl">Expertise</h2>
                    <p className="mt-4 text-muted md:text-lg">Driving growth through precise operations and strategy.</p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full p-8">
                                <service.icon className="h-10 w-10 text-primary mb-6" />
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted leading-relaxed">
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
