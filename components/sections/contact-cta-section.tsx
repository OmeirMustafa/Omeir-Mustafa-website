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
        <Section id="contact-cta">
            <Container className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground mb-10">
                        Let&apos;s work
                    </h2>
                    <Button size="lg" onClick={onContactClick}>
                        Contact
                    </Button>
                </motion.div>
            </Container>
        </Section>
    );
}
