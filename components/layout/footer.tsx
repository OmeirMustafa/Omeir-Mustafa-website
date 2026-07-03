"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { NewsletterForm } from "@/components/ui/newsletter-form";

import { siteConfig } from "@/data/site-config";

const platformLinks = siteConfig.navigation.filter(item => ['AI Tools', 'Workflows', 'Resources', 'Newsletter'].includes(item.name));
const contentLinks = siteConfig.navigation.filter(item => ['Content', 'Projects', 'About', 'Contact'].includes(item.name));
const socialLinks = siteConfig.socials;

export function Footer() {
    const currentYear = new Date().getFullYear();
    const footerRef = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHoveringFooter, setIsHoveringFooter] = useState(false);

    useEffect(() => {
        const footer = footerRef.current;
        if (!footer) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = footer.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        };

        const handleMouseEnter = () => setIsHoveringFooter(true);
        const handleMouseLeave = () => setIsHoveringFooter(false);

        footer.addEventListener("mousemove", handleMouseMove);
        footer.addEventListener("mouseenter", handleMouseEnter);
        footer.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            footer.removeEventListener("mousemove", handleMouseMove);
            footer.removeEventListener("mouseenter", handleMouseEnter);
            footer.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [mouseX, mouseY]);

    const maskImage = useMotionTemplate`radial-gradient(circle 250px at ${mouseX}px ${mouseY}px, black 0%, transparent 80%)`;
    const opacity = isHoveringFooter ? 0.8 : 0;

    return (
        <footer
            ref={footerRef}
            role="contentinfo"
            aria-label="Site footer"
            className="border-t border-border bg-background relative overflow-hidden py-20 md:py-28"
        >
            {/* Signature Watermark - Minimal and faint, fully monochrome */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none"
                style={{
                    maskImage: isHoveringFooter ? maskImage : "none",
                    WebkitMaskImage: isHoveringFooter ? maskImage : "none",
                }}
                animate={{ opacity }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <span className="text-[14vw] font-bold text-white/[0.015] leading-none tracking-tighter whitespace-nowrap blur-[1px] font-sans">
                    OMEIR MUSTAFA
                </span>
            </motion.div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Block + Newsletter */}
                    <div className="lg:col-span-5">
                        <span className="text-xl font-bold text-white tracking-tight block mb-4">
                            Omeir Mustafa
                        </span>
                        <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                            Building AI systems, teaching the future of work. Sharing insights on AI automation, agents, workflows, and the tools shaping our industry.
                        </p>
                        <div className="mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-3">Join the Newsletter</span>
                            <NewsletterForm variant="inline" placeholder="Your email" buttonText="Join" />
                        </div>
                        <div className="h-px w-12 bg-white/10" />
                    </div>

                    {/* Platform Links */}
                    <nav aria-label="Platform links" className="lg:col-span-2 lg:col-start-7">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-4">Platform</span>
                        <ul className="space-y-2.5">
                            {platformLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-foreground-muted hover:text-white transition-colors flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Content Links */}
                    <nav aria-label="Content links" className="lg:col-span-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-4">Explore</span>
                        <ul className="space-y-2.5">
                            {contentLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-foreground-muted hover:text-white transition-colors flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social Links */}
                    <nav aria-label="Social media links" className="lg:col-span-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-4">Connect</span>
                        <ul className="space-y-2.5">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.ariaLabel}
                                        className="text-sm text-foreground-muted hover:text-white transition-colors flex items-center gap-1 group"
                                    >
                                        {link.name}
                                        <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
                    <p className="text-xs text-zinc-600">
                        © {currentYear} Omeir Mustafa. Built with precision.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-[9px] uppercase tracking-widest text-zinc-600">
                            Dhaka, Bangladesh
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
