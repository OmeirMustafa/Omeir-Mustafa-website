"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useModal } from "@/components/providers/modal-provider";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#skills" },
    { name: "Selected Work", href: "#work" },
    { name: "Principles", href: "#principles" },
];

// Individual NavLink component with micro-animations
function NavLink({
    link,
    activeSection,
    onClick
}: {
    link: { name: string; href: string };
    activeSection: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={link.href}
            onClick={(e) => onClick(e, link.href)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative px-4 py-1.5 text-sm font-medium rounded-full focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none transition-colors duration-300",
                activeSection === link.href
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-white"
            )}
        >
            {/* Active Pill Background */}
            {activeSection === link.href && (
                <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-white/[0.08] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}

            {/* Hover Pill Background */}
            <motion.span
                className="absolute inset-0 bg-white/[0.03] rounded-full -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered && activeSection !== link.href ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            />

            <span className="relative z-10">{link.name}</span>
        </a>
    );
}

export function Navbar() {
    const { openModal } = useModal();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);

            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 180;

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
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 z-50 w-full flex justify-center pt-4 md:pt-6 px-4"
        >
            {/* Floating Island Container */}
            <nav
                className={cn(
                    "relative flex items-center justify-between gap-4 md:gap-8 px-4 md:px-5 py-2.5 rounded-full border transition-all duration-500",
                    isScrolled
                        ? "bg-black/60 backdrop-blur-xl border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
                        : "bg-transparent border-transparent"
                )}
            >
                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setActiveSection("");
                    }}
                    className="text-sm font-semibold tracking-tight text-white hover:text-zinc-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none transition-colors duration-300 whitespace-nowrap px-2 rounded-lg"
                >
                    Omeir Mustafa <span className="text-zinc-500 font-normal ml-2">/ AI Architect</span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            link={link}
                            activeSection={activeSection}
                            onClick={handleNavClick}
                        />
                    ))}
                </div>

                {/* Contact Button */}
                <button
                    onClick={openModal}
                    className="hidden md:inline-flex items-center justify-center h-8 px-4 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none transition-all duration-300 border border-white/10"
                >
                    Contact
                </button>

                {/* Mobile Toggle */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                                <X size={18} />
                            </motion.div>
                        ) : (
                            <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                                <Menu size={18} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </nav>

            {/* Mobile Menu - Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed inset-0 top-0 bg-black/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-center px-8"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col gap-6 text-left">
                            <span className="text-xs uppercase tracking-widest text-zinc-600 font-mono">Navigation</span>
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={cn(
                                        "text-3xl font-medium tracking-tight",
                                        activeSection === link.href ? "text-white" : "text-zinc-500"
                                    )}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 pt-8 border-t border-white/5"
                            >
                                <button
                                    onClick={() => { setIsOpen(false); openModal(); }}
                                    className="w-full h-12 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
                                >
                                    Contact
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
