"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useModal } from "@/components/providers/modal-provider";
import { useSearch } from "@/components/search/search-provider";
import { siteConfig } from "@/data/site-config";
const navLinks = siteConfig.navigation.filter(link => link.name !== "Home" && link.name !== "Contact" && link.name !== "Newsletter");

// Individual NavLink component with micro-animations
function NavLink({
    link,
    isActive,
}: {
    link: { name: string; href: string };
    isActive: boolean;
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={link.href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative px-4 py-1.5 text-sm font-medium rounded-full focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none transition-colors duration-300",
                isActive
                    ? "text-white font-semibold"
                    : "text-foreground-muted hover:text-white"
            )}
        >
            {/* Active Pill Background */}
            {isActive && (
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
                animate={{ opacity: isHovered && !isActive ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            />

            <span className="relative z-10">{link.name}</span>
        </Link>
    );
}

export function Navbar() {
    const { openModal } = useModal();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const { openSearch } = useSearch();

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 z-50 w-full flex justify-center pt-4 md:pt-6 px-4"
        >
            {/* Floating Island Container */}
            <nav
                aria-label="Main navigation"
                className={cn(
                    "relative flex items-center justify-between gap-4 md:gap-6 px-4 md:px-5 py-2.5 rounded-full border transition-all duration-500",
                    isScrolled
                        ? "bg-background/60 backdrop-blur-xl border-border shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
                        : "bg-transparent border-transparent"
                )}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-tight text-white hover:text-zinc-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none transition-colors duration-300 whitespace-nowrap px-2 rounded-lg"
                >
                    Omeir Mustafa <span className="text-muted-foreground font-normal ml-2">/ AI Creator</span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            link={link}
                            isActive={pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))}
                        />
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-2">
                    {/* Search Button */}
                    <button
                        onClick={openSearch}
                        className="flex items-center gap-2 h-8 px-3 rounded-full text-foreground-muted hover:text-white hover:bg-white/5 transition-all duration-300 text-xs"
                        aria-label="Search (⌘K)"
                    >
                        <Search size={14} />
                        <kbd className="hidden md:inline-flex items-center gap-0.5 text-[10px] font-mono text-zinc-600 bg-white/5 px-1.5 py-0.5 rounded border border-border-hover">
                            ⌘K
                        </kbd>
                    </button>

                    {/* CTA Button */}
                    <button
                        onClick={openModal}
                        className="inline-flex items-center justify-center h-8 px-4 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none transition-all duration-300 border border-border-hover"
                    >
                        Work With Me
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex lg:hidden items-center gap-2">
                    <button
                        onClick={openSearch}
                        className="text-foreground-muted hover:text-white p-2 transition-colors"
                        aria-label="Search"
                    >
                        <Search size={18} />
                    </button>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
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
                </div>
            </nav>

            {/* Mobile Menu - Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed inset-0 top-0 bg-background/95 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-center px-8"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-2 text-foreground-muted hover:text-white"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col gap-6 text-left">
                            <span className="text-xs uppercase tracking-widest text-zinc-600 font-mono">Navigation</span>
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-3xl font-medium tracking-tight block",
                                            pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                                                ? "text-white"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 pt-8 border-t border-border flex flex-col gap-3"
                            >
                                <Link
                                    href="/newsletter"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full h-12 rounded-full border border-border-hover text-white font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center"
                                >
                                    Subscribe to Newsletter
                                </Link>
                                <button
                                    onClick={() => { setIsOpen(false); openModal(); }}
                                    className="w-full h-12 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
                                >
                                    Work With Me
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
