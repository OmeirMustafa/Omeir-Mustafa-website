"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#work" },
    { name: "How It Works", href: "#process" },
];

interface NavbarProps {
    onContactClick: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element &&
                    element.offsetTop <= scrollPosition &&
                    (element.offsetTop + element.offsetHeight) > scrollPosition
                ) {
                    setActiveSection("#" + section);
                    return;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
        setActiveSection(href);
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 z-50 w-full flex justify-center pt-4 md:pt-6 px-4"
        >
            {/* Floating Island Container */}
            <nav
                className={cn(
                    "relative flex items-center justify-between gap-4 md:gap-8 px-4 md:px-6 py-3 rounded-full transition-all duration-500",
                    isScrolled
                        ? "bg-background/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                        : "bg-transparent"
                )}
            >
                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setActiveSection("");
                    }}
                    className="text-lg font-heading font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-300 whitespace-nowrap"
                >
                    Omeir Mustafa
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e as any, link.href)}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                activeSection === link.href
                                    ? "text-foreground"
                                    : "text-foreground-muted hover:text-foreground"
                            )}
                        >
                            {/* Active Pill Background (Context) */}
                            {activeSection === link.href && (
                                <motion.span
                                    layoutId="activePill"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}

                            {/* Ghost-Neon Hover Underline (Interaction) */}
                            <motion.span
                                className="absolute bottom-1 left-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-accent/80 to-transparent blur-[0.5px] -translate-x-1/2"
                                initial={{ scaleX: 0, opacity: 0 }}
                                whileHover={{ scaleX: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />

                            <span className="relative z-10">{link.name}</span>
                        </motion.a>
                    ))}
                </div>

                {/* Contact Button */}
                <Button size="sm" onClick={onContactClick} className="hidden md:inline-flex">
                    Contact
                </Button>

                {/* Mobile Toggle */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden text-foreground p-2 -mr-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <X size={22} />
                            </motion.div>
                        ) : (
                            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <Menu size={22} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </nav>

            {/* Mobile Menu - Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-20 bg-background/95 backdrop-blur-xl z-40 md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "text-3xl font-heading font-medium",
                                        activeSection === link.href ? "text-accent" : "text-foreground-muted"
                                    )}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                <Button size="lg" onClick={() => { setIsOpen(false); onContactClick(); }}>
                                    Contact
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
