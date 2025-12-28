"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ExternalLink, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EMAIL = "omeirmustafa.work@gmail.com";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [copied, setCopied] = React.useState(false);

    // Close on escape key
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Reset copied state when modal closes
    React.useEffect(() => {
        if (!isOpen) setCopied(false);
    }, [isOpen]);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const contactOptions = [
        {
            label: "Open in Gmail",
            icon: Mail,
            href: `https://mail.google.com/mail/?view=cm&to=${EMAIL}`,
            external: true,
        },
        {
            label: "Open Mail App",
            icon: ExternalLink,
            href: `mailto:${EMAIL}`,
            external: false,
        },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            duration: 0.4
                        }}
                        className={cn(
                            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 mx-4",
                            "glass rounded-3xl p-8 md:p-10"
                        )}
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-accent/10 blur-2xl rounded-3xl -z-10" />

                        {/* Close button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onClose}
                            className="absolute right-4 top-4 p-2 text-foreground-muted hover:text-foreground hover:bg-muted rounded-full transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </motion.button>

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-3">
                                Let&apos;s work
                            </h2>
                            <p className="text-foreground-muted">
                                Choose how you&apos;d like to connect
                            </p>
                        </motion.div>

                        {/* Email display */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-center mb-8"
                        >
                            <p className="text-sm text-foreground-subtle mb-2 uppercase tracking-wider">
                                Email
                            </p>
                            <p className="text-lg text-accent font-medium">
                                {EMAIL}
                            </p>
                        </motion.div>

                        {/* Contact options */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-3"
                        >
                            {contactOptions.map((option, index) => (
                                <motion.a
                                    key={option.label}
                                    href={option.href}
                                    target={option.external ? "_blank" : undefined}
                                    rel={option.external ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.25 + index * 0.05 }}
                                    whileHover={{ scale: 1.02, x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-4 p-4 bg-muted rounded-xl border border-border hover:border-accent/50 hover:bg-card-hover transition-all duration-200 group glow-on-hover"
                                >
                                    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                                        <option.icon size={18} className="text-foreground-muted group-hover:text-accent transition-colors" />
                                    </div>
                                    <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                                        {option.label}
                                    </span>
                                </motion.a>
                            ))}

                            {/* Copy email button */}
                            <motion.button
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.35 }}
                                whileHover={{ scale: 1.02, x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleCopyEmail}
                                className={cn(
                                    "flex items-center gap-4 p-4 w-full bg-muted rounded-xl border transition-all duration-200 group",
                                    copied
                                        ? "border-accent bg-accent/10"
                                        : "border-border hover:border-accent/50 hover:bg-card-hover glow-on-hover"
                                )}
                            >
                                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        {copied ? (
                                            <motion.div
                                                key="check"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                transition={{ type: "spring", stiffness: 500 }}
                                            >
                                                <Check size={18} className="text-accent" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="copy"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                            >
                                                <Copy size={18} className="text-foreground-muted group-hover:text-accent transition-colors" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <span className={cn(
                                    "font-medium transition-colors",
                                    copied ? "text-accent" : "text-foreground group-hover:text-accent"
                                )}>
                                    {copied ? "Copied!" : "Copy Email"}
                                </span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
