"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#case-study" },
    { name: "Process", href: "#process" },
];

interface NavbarProps {
    onContactClick: () => void;
}

// Animated nav link with active state indicator
function NavLink({
    href,
    children,
    isActive,
    onClick
}: {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
    return (
        <motion.a
            href={href}
            onClick={onClick}
            className={cn(
                "relative text-sm font-medium transition-colors duration-200 cursor-pointer py-1",
                isActive ? "text-foreground" : "text-foreground-muted hover:text-foreground"
            )}
            whileHover="hover"
        >
            {children}
            {/* Active Indicator */}
            {isActive && (
                <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-px bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}

            {/* Hover Indicator (only if not active) */}
            {!isActive && (
                <motion.span
                    className="absolute bottom-0 left-0 h-px bg-accent"
                    initial={{ width: 0 }}
                    variants={{
                        hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
            )}
        </motion.a>
    );
}

export function Navbar({ onContactClick }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active section detection
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100; // Offset

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element &&
                    element.offsetTop <= scrollPosition &&
                    (element.offsetTop + element.offsetHeight) > scrollPosition
                ) {
                    setActiveSection("#" + section);
                    return; // Found the section
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 z-40 w-full transition-all duration-300",
                isScrolled
                    ? "glass border-b border-border"
                    : "bg-transparent"
            )}
        >
            <Container className="flex h-16 items-center justify-between">
                {/* Logo with subtle hover effect */}
                <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
                    <Link
                        href="/"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            setActiveSection("");
                        }}
                        className="text-xl font-heading font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
                    >
                        Omeir Mustafa
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            href={link.href}
                            isActive={activeSection === link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Button size="sm" onClick={onContactClick}>
                        Contact
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden glass border-b border-border overflow-hidden"
                    >
                        <Container className="flex flex-col gap-4 py-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    className={cn(
                                        "text-lg font-medium transition-colors cursor-pointer",
                                        activeSection === link.href ? "text-accent" : "text-foreground-muted hover:text-foreground"
                                    )}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                            >
                                <Button
                                    className="w-full"
                                    onClick={() => {
                                        setIsOpen(false);
                                        onContactClick();
                                    }}
                                >
                                    Contact
                                </Button>
                            </motion.div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
