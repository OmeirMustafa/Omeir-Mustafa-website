"use client";

import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/omeirmustafa",
        ariaLabel: "Visit Omeir Mustafa on LinkedIn",
    },
    {
        name: "GitHub",
        href: "https://github.com/omeirmustafa",
        ariaLabel: "Visit Omeir Mustafa on GitHub",
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();
    const footerRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHoveringFooter, setIsHoveringFooter] = useState(false);

    useEffect(() => {
        const footer = footerRef.current;
        if (!footer) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = footer.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
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
    }, []);

    const name = "Omeir Mustafa";

    return (
        <footer
            ref={footerRef}
            role="contentinfo"
            aria-label="Site footer"
            className="border-t border-white/5 bg-background relative overflow-hidden py-24 md:py-32"
        >
            {/* Signature Watermark - Massive Depth Layer with Fog Reveal */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none"
                style={{
                    maskImage: isHoveringFooter
                        ? `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 80%)`
                        : "none",
                    WebkitMaskImage: isHoveringFooter
                        ? `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 80%)`
                        : "none",
                    opacity: isHoveringFooter ? 1 : 0, // Hide by default, reveal with cursor
                    transition: "opacity 0.5s ease-out"
                }}
            >
                <span className="text-[15vw] md:text-[20vw] font-heading font-bold text-foreground/[0.08] leading-none tracking-tighter whitespace-nowrap blur-[2px]">
                    OMEIR
                </span>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
                    {/* Brand Block */}
                    <div className="max-w-md">
                        <span className="text-3xl font-heading font-bold text-foreground tracking-tight block mb-6">
                            {name.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ color: "var(--foreground)" }}
                                    animate={{ color: ["#e0f2fe", "#2563eb", "#e0f2fe"] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                        repeatDelay: 5
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                        <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                            Building high-trust digital assets for service businesses that refuse to compete on commodities.
                        </p>
                        <div className="flex gap-4">
                            <div className="h-1 w-16 rounded-full mb-4 bg-gradient-to-r from-transparent via-accent to-transparent" />
                        </div>
                    </div>

                    {/* Navigation Block */}
                    <nav aria-label="Social media links" className="flex flex-col gap-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-foreground-subtle mb-2">Connect</span>
                        <ul className="space-y-3">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                        aria-label={link.ariaLabel}
                                        className="text-lg text-foreground-muted hover:text-accent transition-colors flex items-center gap-2 group"
                                    >
                                        {link.name}
                                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                    <p className="text-sm text-foreground-subtle">
                        © {currentYear} Omeir Mustafa. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] uppercase tracking-widest text-foreground-subtle/50">
                            Dhaka, Bangladesh
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-foreground-subtle/50">
                            Local Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Dhaka' })}
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
