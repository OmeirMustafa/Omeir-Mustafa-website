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
            desc: "Best for desktop"
        },
        {
            label: "Open Mail App",
            icon: ExternalLink,
            href: `mailto:${EMAIL}`,
            external: false,
            desc: "System default"
        },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop - Deep, Heavy Blur */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-3xl"
                    />

                    {/* Modal Container */}
                    <motion.div
                        key="modal-wrapper"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <motion.div
                            key="modal-card"
                            initial={{ opacity: 0, scale: 0.9, y: 20, rotateX: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                                mass: 0.8
                            }}
                            className={cn(
                                "relative w-full max-w-md pointer-events-auto",
                                "bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10",
                                "rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
                            )}
                        >
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 p-2 rounded-full text-foreground-muted hover:text-foreground hover:bg-white/5 transition-all duration-200 z-20"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-10 relative z-10">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className="w-12 h-12 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-4 border border-accent/20 text-accent shadow-lg shadow-accent/10">
                                        <Mail size={24} />
                                    </div>
                                    <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
                                        Let&apos;s Start a Conversation
                                    </h2>
                                    <p className="text-sm text-foreground-muted">
                                        Choose how you&apos;d like to connect.
                                    </p>
                                </div>

                                {/* Primary Action: Copy Email */}
                                <div className="mb-6">
                                    <button
                                        onClick={handleCopyEmail}
                                        className={cn(
                                            "relative w-full group overflow-hidden rounded-2xl border transition-all duration-300",
                                            "p-4 flex items-center justify-between",
                                            copied
                                                ? "bg-emerald-500/10 border-emerald-500/50"
                                                : "bg-white/5 border-white/10 hover:border-accent/50 hover:bg-white/[0.07]"
                                        )}
                                    >
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="text-xs font-medium text-foreground-muted uppercase tracking-wider">
                                                Copy Email Address
                                            </span>
                                            <span className={cn(
                                                "text-lg font-medium transition-colors font-mono",
                                                copied ? "text-emerald-400" : "text-foreground"
                                            )}>
                                                {EMAIL}
                                            </span>
                                        </div>

                                        <div className={cn(
                                            "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                                            copied ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-foreground-muted group-hover:bg-accent/20 group-hover:text-accent"
                                        )}>
                                            {copied ? <Check size={20} /> : <Copy size={20} />}
                                        </div>

                                        {/* Success Splash */}
                                        {copied && (
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1.5, opacity: 0 }}
                                                transition={{ duration: 0.6 }}
                                                className="absolute inset-0 bg-emerald-500/20 pointer-events-none"
                                            />
                                        )}
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="relative flex items-center gap-4 py-2 mb-6">
                                    <div className="h-px flex-1 bg-white/5" />
                                    <span className="text-xs text-foreground-subtle uppercase tracking-widest">or open directly</span>
                                    <div className="h-px flex-1 bg-white/5" />
                                </div>

                                {/* Secondary Options */}
                                <div className="grid grid-cols-2 gap-3">
                                    {contactOptions.map((option) => (
                                        <a
                                            key={option.label}
                                            href={option.href}
                                            target={option.external ? "_blank" : undefined}
                                            rel={option.external ? "noopener noreferrer" : undefined}
                                            className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-colors group text-center"
                                        >
                                            <option.icon size={20} className="text-foreground-muted group-hover:text-foreground transition-colors" />
                                            <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground transition-colors">
                                                {option.label}
                                            </span>
                                        </a>
                                    ))}
                                </div>

                                {/* Footer Note */}
                                <div className="mt-8 text-center">
                                    <p className="text-[10px] text-foreground-subtle uppercase tracking-widest opacity-50">
                                        Response time: &lt; 24 Hours
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
