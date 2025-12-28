"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ContactCTASectionProps {
    onContactClick: () => void;
}

export function ContactCTASection({ onContactClick }: ContactCTASectionProps) {
    return (
        <Section id="contact-cta" className="relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground mb-6">
                        Ready to Transform Your Operations?
                    </h2>
                    <p className="text-lg text-foreground-muted mb-10">
                        Let&apos;s discuss how I can help you build systems that scale.
                    </p>
                    <Button size="lg" onClick={onContactClick}>
                        Start a Conversation
                    </Button>
                </motion.div>
            </Container>
        </Section>
    );
}
