"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Omeir transformed our digital presence. The attention to detail and performance optimization is unmatched. A true partner in growth.",
        author: "Sarah Jenkins",
        role: "CEO, Lumina Law",
    },
    {
        quote: "Finally, a developer who understands both design and business goals. The site is fast, beautiful, and converts like crazy.",
        author: "David Chen",
        role: "Founder, TechFlow",
    },
];

export function TestimonialsSection() {
    return (
        <Section id="testimonials" className="bg-background-subtle/50">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
                        Trusted by Leaders
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="relative p-8 md:p-10 rounded-2xl glass border border-border/50"
                        >
                            <Quote className="text-accent mb-6 w-8 h-8 opacity-50" />
                            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-medium">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div>
                                <cite className="not-italic text-base font-semibold text-foreground block">
                                    {testimonial.author}
                                </cite>
                                <span className="text-sm text-foreground-muted">
                                    {testimonial.role}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
