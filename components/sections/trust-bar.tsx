"use client";

import { Container } from "@/components/ui/container";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { label: "AI Tools Reviewed", value: 50, suffix: "+" },
    { label: "Workflows Built", value: 30, suffix: "+" },
    { label: "Community Members", value: 10, suffix: "K+" },
    { label: "Hours Automated", value: 500, suffix: "+" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const end = value;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * (end - start) + start);
            
            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [inView, value]);

    return (
        <span className="text-3xl md:text-4xl font-bold text-white tracking-tight font-sans tabular-nums">
            {count}{suffix}
        </span>
    );
}

export function TrustBar() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-16 md:py-20 border-t border-b border-white/5"
            aria-label="Social proof metrics"
        >
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-2">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
