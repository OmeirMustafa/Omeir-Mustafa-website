"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProcessSection } from "@/components/sections/process-section";
import { ContactCTASection } from "@/components/sections/contact-cta-section";
import { Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen pt-24">
            <Section h1 heading="Contact & Inquiries" headingMuted="Start a Conversation" description="Whether you need a high-performance AI system built, or you're looking for consulting on your automation strategy, let's talk.">
                <Container size="md">
                    <div className="grid md:grid-cols-2 gap-12 mt-12 mb-24">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="p-8 rounded-3xl bg-muted border border-border"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-border-hover flex items-center justify-center text-white mb-6">
                                <Mail size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Direct Email</h3>
                            <p className="text-foreground-muted mb-6 text-sm">For project inquiries, speaking engagements, or consulting.</p>
                            <a href="mailto:omeirmustafa.work@gmail.com" className="text-white font-semibold hover:text-zinc-300 transition-colors flex items-center gap-2">
                                omeirmustafa.work@gmail.com <ArrowUpRight size={16} />
                            </a>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-8 rounded-3xl bg-muted border border-border"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-border-hover flex items-center justify-center text-white mb-6">
                                <Clock size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
                            <p className="text-foreground-muted mb-6 text-sm">I typically respond to all inquiries within 24-48 hours during business days.</p>
                            <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-widest">
                                <MapPin size={12} />
                                Dhaka, BD (GMT+6)
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            <ProcessSection />
            <ContactCTASection />
        </main>
    );
}
