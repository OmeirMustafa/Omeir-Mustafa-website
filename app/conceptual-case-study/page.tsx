"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar"; // Reuse navbar
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, TrendingUp, Users, Shield, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

// Panel Component for consistent layout
function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <section className={`min-h-screen flex items-center justify-center relative overflow-hidden py-20 ${className}`}>
            {children}
        </section>
    );
}

export default function ConceptualCaseStudyPage() {
    const { scrollYProgress } = useScroll();

    // Background parallax - subtle stars/particles effect
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <main className="bg-background text-foreground relative selection:bg-accent selection:text-background">
            {/* Navbar Injection - ensuring visual consistency */}
            <div className="fixed top-0 w-full z-50">
                <Navbar onContactClick={() => window.location.href = "/#contact-cta"} />
            </div>

            {/* Global Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Deep background gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),rgba(9,9,11,1))]" />

                {/* Moving Particles/Stars */}
                <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-20">
                    <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full blur-[1px]" />
                    <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 bg-accent rounded-full blur-[2px]" />
                    <div className="absolute top-[60%] left-[10%] w-1 h-1 bg-white/50 rounded-full" />
                    <div className="absolute top-[80%] right-[30%] w-1 h-1 bg-accent/50 rounded-full blur-[1px]" />
                    <div className="absolute top-[15%] right-[10%] w-2 h-2 bg-white/10 rounded-full blur-[4px]" />
                </motion.div>
            </div>

            {/* PANEL 1: HERO / INTRO */}
            <Panel className="z-10">
                <Container className="text-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <span className="text-sm font-medium tracking-widest uppercase text-accent">Conceptual Case Study</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                    >
                        Anchor Financial
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        Redefining trust for the modern wealth management era. A complete digital transformation focused on authority and retention.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center"
                    >
                        <div className="w-[1px] h-24 bg-gradient-to-b from-accent to-transparent" />
                    </motion.div>
                </Container>
            </Panel>

            {/* PANEL 2: PROBLEM */}
            <Panel className="z-10 bg-background-subtle/30 border-y border-white/5 backdrop-blur-sm">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-heading font-semibold mb-6">The Challenge: <br /><span className="text-foreground-muted">Invisible Authority</span></h2>
                            <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                                Anchor Financial managed over $500M in assets but their digital presence looked like a generic template. High-net-worth individuals couldn't distinguish them from entry-level advisors.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-foreground-subtle">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" /> Low conversion on cold traffic
                                </li>
                                <li className="flex items-center gap-3 text-foreground-subtle">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" /> Outdated mobile experience
                                </li>
                                <li className="flex items-center gap-3 text-foreground-subtle">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" /> Lack of trust signals
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-video rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 flex items-center justify-center"
                        >
                            {/* Conceptual UI Mockup - abstract */}
                            <div className="text-center">
                                <Shield size={64} className="text-white/20 mx-auto mb-4" />
                                <p className="text-sm font-mono text-white/30 uppercase tracking-widest">Legacy Infrastructure</p>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Panel>

            {/* PANEL 3: SOLUTION */}
            <Panel className="z-10">
                <Container>
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-heading font-semibold mb-4"
                        >
                            The Approach: Digital Architecture
                        </motion.h2>
                        <p className="text-foreground-muted">Structuring information to build trust instantly.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Glass Interface", desc: "Transparency and clarity in design to reflect financial honesty.", icon: Target },
                            { title: "Value-First UX", desc: "Immediate access to insights and calculators without gated walls.", icon: TrendingUp },
                            { title: "Premium Motion", desc: "Subtle, fluid interactions that signal high-end service.", icon: Users },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                            >
                                <item.icon className="w-10 h-10 text-accent mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                                <p className="text-foreground-muted text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Panel>

            {/* PANEL 4: RESULTS */}
            <Panel className="z-10 bg-accent/[0.02] border-y border-accent/5 backdrop-blur-sm">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-2 md:order-1 relative aspect-square md:aspect-video rounded-2xl border border-accent/20 bg-accent/5 overflow-hidden flex items-center justify-center"
                        >
                            {/* Abstract Graph */}
                            <svg className="w-full h-full p-12 text-accent" viewBox="0 0 100 50" preserveAspectRatio="none">
                                <motion.path
                                    d="M0 50 Q 25 40, 50 20 T 100 5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                                <defs>
                                    <linearGradient id="grid-grad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                                <motion.path
                                    d="M0 50 Q 25 40, 50 20 T 100 5 V 50 H 0 Z"
                                    fill="url(#grid-grad)"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                />
                            </svg>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-4xl font-heading font-semibold mb-8">The Outcomes</h2>
                            <div className="space-y-8">
                                <div>
                                    <p className="text-5xl font-bold text-accent mb-2">+42%</p>
                                    <p className="text-foreground-muted">Increase in qualified HNW leads</p>
                                </div>
                                <div>
                                    <p className="text-5xl font-bold text-white mb-2">3.5x</p>
                                    <p className="text-foreground-muted">Time spent on site (Engagement)</p>
                                </div>
                                <div className="pt-8 border-t border-white/10">
                                    <p className="italic text-foreground-subtle">
                                        &quot;Omeir transformed our digital face. Clients now trust us before they even enter the room.&quot;
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Panel>

            {/* PANEL 5: CONCLUSION / CTA */}
            <Panel className="z-10">
                <Container className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8">
                            Ready transparency?
                        </h2>
                        <p className="text-xl text-foreground-muted mb-12">
                            This case study represents the standard of quality I bring to every project. Let's build your authority.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/#contact-cta">
                                <Button size="lg" className="h-14 px-8 text-lg">
                                    Start a Project
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg group">
                                    Back to Home <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </Container>
            </Panel>
        </main>
    );
}
