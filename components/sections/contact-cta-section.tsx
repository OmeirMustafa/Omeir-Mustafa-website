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
        <Section id="contact-cta" className="bg-background-subtle">
            <Container className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-foreground mb-6">
                        Let&apos;s Build Something Exceptional
                    </h2>
                    <p className="text-xl text-foreground-muted mb-10 leading-relaxed">
                        Have a project in mind or want to discuss an idea?
                        <br className="hidden md:block" />
                        Let&apos;s talk and see how we can create a premium digital experience.
                    </p>
                    <Button size="lg" onClick={onContactClick}>
                        Start a Project
                    </Button>

                    <p className="mt-6 text-xs text-foreground-subtle max-w-md mx-auto opacity-70">
                        After reaching out, you’ll receive a response outlining next steps, timelines, and whether the project is a good mutual fit — even if the answer is no.
                    </p>



                </motion.div>
            </Container>
        </Section>
    );
}
