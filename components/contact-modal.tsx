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
            label: "Open Gmail",
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
                    {/* Backdrop - deeper blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl"
                    />

                    {/* Modal - slower, heavier */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className={cn(
                            "fixed left-1/2 top-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2",
                            "bg-card/90 backdrop-blur-2xl border border-border rounded-2xl p-10"
                        )}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 p-2 text-foreground-subtle hover:text-foreground transition-colors duration-300"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        {/* Header - minimal */}
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-heading font-semibold text-foreground">
                                Let&apos;s work
                            </h2>
                        </div>

                        {/* Email - prominent */}
                        <div className="text-center mb-10">
                            <p className="text-lg text-foreground-muted">
                                {EMAIL}
                            </p>
                        </div>

                        {/* Options - simple */}
                        <div className="space-y-3">
                            {contactOptions.map((option) => (
                                <a
                                    key={option.label}
                                    href={option.href}
                                    target={option.external ? "_blank" : undefined}
                                    rel={option.external ? "noopener noreferrer" : undefined}
                                    className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-foreground-subtle hover:bg-muted/50 transition-all duration-300"
                                >
                                    <span className="text-foreground">{option.label}</span>
                                    <option.icon size={18} className="text-foreground-muted" />
                                </a>
                            ))}

                            {/* Copy button */}
                            <button
                                onClick={handleCopyEmail}
                                className={cn(
                                    "flex items-center justify-between p-4 w-full border rounded-xl transition-all duration-300",
                                    copied
                                        ? "border-accent bg-accent/5"
                                        : "border-border hover:border-foreground-subtle hover:bg-muted/50"
                                )}
                            >
                                <span className={copied ? "text-accent" : "text-foreground"}>
                                    {copied ? "Copied" : "Copy Email"}
                                </span>
                                {copied ? (
                                    <Check size={18} className="text-accent" />
                                ) : (
                                    <Copy size={18} className="text-foreground-muted" />
                                )}
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
