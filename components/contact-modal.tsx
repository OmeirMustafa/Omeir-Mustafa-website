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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        key="modal-wrapper"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <motion.div
                            key="modal-card"
                            initial={{ opacity: 0, scale: 0.96, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 5 }}
                            transition={{
                                type: "spring",
                                damping: 28,
                                stiffness: 350,
                                mass: 0.8
                            }}
                            className={cn(
                                "relative w-full max-w-md pointer-events-auto",
                                "bg-zinc-950/90 backdrop-blur-2xl border border-white/5",
                                "rounded-3xl overflow-hidden shadow-2xl shadow-black/80"
                            )}
                        >
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-white/[0.015] blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 p-2 rounded-full text-zinc-500 hover:text-white hover:bg-white/5 transition-all duration-200 z-20"
                                aria-label="Close modal"
                            >
                                <X size={18} />
                            </button>

                            <div className="p-8 md:p-10 relative z-10">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className="w-12 h-12 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-4 border border-white/10 text-white">
                                        <Mail size={20} strokeWidth={1.5} />
                                    </div>
                                    <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">
                                        Initiate Alignment
                                    </h2>
                                    <p className="text-sm text-zinc-400">
                                        Let&apos;s build serious AI-powered experiences together.
                                    </p>
                                </div>

                                {/* Primary Action: Copy Email */}
                                <div className="mb-6">
                                    <button
                                        onClick={handleCopyEmail}
                                        className={cn(
                                            "relative w-full group overflow-hidden rounded-2xl border transition-all duration-300",
                                            "p-4.5 flex items-center justify-center gap-3",
                                            copied
                                                ? "bg-white text-black border-white"
                                                : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300",
                                            copied ? "bg-black/10 text-black" : "bg-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-white"
                                        )}>
                                            {copied ? <Check size={16} /> : <Copy size={16} />}
                                        </div>

                                        <span className={cn(
                                            "text-sm font-semibold transition-colors",
                                            copied ? "text-black" : "text-white"
                                        )}>
                                            {copied ? "Copied Address" : "Copy Email Address"}
                                        </span>

                                        {/* Success Splash */}
                                        {copied && (
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1.5, opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="absolute inset-0 bg-white/20 pointer-events-none"
                                            />
                                        )}
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="relative flex items-center gap-4 py-2 mb-6">
                                    <div className="h-px flex-1 bg-white/5" />
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">or launch application</span>
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
                                            className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/[0.015] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-colors group text-center"
                                        >
                                            <option.icon size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
                                            <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                                                {option.label}
                                            </span>
                                        </a>
                                    ))}
                                </div>

                                {/* Footer Note */}
                                <div className="mt-8 text-center">
                                    <p className="text-[9px] text-zinc-600 uppercase tracking-widest font-mono">
                                        Expected Response time: &lt; 24 Hours
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
