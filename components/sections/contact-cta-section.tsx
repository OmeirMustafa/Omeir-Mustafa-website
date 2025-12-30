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
        <Section id="contact-cta" className="bg-background relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-foreground mb-6 tracking-tight leading-[1.1]">
                        Let's Build Something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent">Exceptional</span>
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-4">
                        Have a project in mind or want to discuss an idea?
                    </p>
                    <p className="text-foreground-muted mb-12">
                        Let's talk and see how we can create a premium digital experience.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Button size="lg" onClick={onContactClick} className="shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                            Start a Project
                        </Button>
                    </motion.div>

                    {/* Trust Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-10 text-xs text-foreground-subtle max-w-md mx-auto opacity-60"
                    >
                        After reaching out, you'll receive a response outlining next steps, timelines, and whether the project is a good mutual fit — even if the answer is no.
                    </motion.p>
                </motion.div>
            </Container>
        </Section>
    );
}
