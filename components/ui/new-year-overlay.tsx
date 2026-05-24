"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function NewYearOverlay() {
    const [isVisible, setIsVisible] = useState(false);
    const [particles, setParticles] = useState<Array<{
        id: number;
        x: number;
        y: number;
        color: string;
        duration: number;
        delay: number;
        width: number;
        height: number;
    }>>([]);

    useEffect(() => {
        // Check if already seen this session
        if (typeof window !== "undefined") {
            const hasSeen = sessionStorage.getItem("hasSeenNewYear2026");
            if (!hasSeen) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setIsVisible(true);
                sessionStorage.setItem("hasSeenNewYear2026", "true");

                // Generate particles for fireworks effect
                const newParticles = [];
                for (let i = 0; i < 50; i++) {
                    newParticles.push({
                        id: i,
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        color: ["#06b6d4", "#ffffff", "#a5f3fc", "#22d3ee"][Math.floor(Math.random() * 4)],
                        duration: 2 + Math.random() * 2,
                        delay: Math.random() * 1.5,
                        width: 4 + Math.random() * 4,
                        height: 4 + Math.random() * 4
                    });
                }
                setParticles(newParticles);

                // Auto-hide after 5 seconds
                const timer = setTimeout(() => {
                    setIsVisible(false);
                }, 5000);

                return () => clearTimeout(timer);
            }
        }
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
                    style={{
                        background: "radial-gradient(circle at center, #0a0a12 0%, #000000 100%)"
                    }}
                >
                    {/* Particles/Sparks */}
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute rounded-full"
                            initial={{
                                x: `${particle.x}vw`,
                                y: "100vh",
                                opacity: 0,
                                scale: 0
                            }}
                            animate={{
                                y: `${particle.y}vh`,
                                opacity: [0, 1, 1, 0],
                                scale: [0, 1.5, 1, 0]
                            }}
                            transition={{
                                duration: particle.duration,
                                delay: particle.delay,
                                ease: "easeOut"
                            }}
                            style={{
                                width: particle.width,
                                height: particle.height,
                                backgroundColor: particle.color,
                                boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}`,
                                filter: "blur(1px)"
                            }}
                        />
                    ))}

                    {/* Glowing Text */}
                    <div className="relative z-10 text-center px-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                            className="text-4xl sm:text-6xl md:text-8xl font-heading font-bold mb-6"
                            style={{
                                background: "linear-gradient(135deg, #fff 0%, #a5f3fc 50%, #06b6d4 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 0 40px rgba(6, 182, 212, 0.3)"
                            }}
                        >
                            Happy New Year 2026
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 1, ease: [0.2, 0.8, 0.2, 1] }}
                            className="text-lg sm:text-xl md:text-2xl text-slate-400 tracking-wide"
                        >
                            Wishing you growth, success, and brilliance.
                        </motion.p>
                    </div>

                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
