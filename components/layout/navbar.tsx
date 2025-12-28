"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Case Study", href: "#case-study" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
];

interface NavbarProps {
    onContactClick: () => void;
}

// Animated nav link with underline effect
function NavLink({
    href,
    children,
    onClick
}: {
    href: string;
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
    return (
        <motion.a
            href={href}
            onClick={onClick}
            className="relative text-sm font-medium text-foreground-muted hover:text-foreground transition-colors duration-200 cursor-pointer py-1"
            whileHover="hover"
        >
            {children}
            <motion.span
                className="absolute bottom-0 left-0 h-px bg-accent"
                initial={{ width: 0 }}
                variants={{
                    hover: { width: "100%" },
                }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
        </motion.a>
    );
}

export function Navbar({ onContactClick }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
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
                                    className="text-lg font-medium text-foreground-muted hover:text-accent transition-colors cursor-pointer"
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
