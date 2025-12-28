"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
    children: React.ReactNode;
    hoverable?: boolean;
    glow?: boolean;
}

export function Card({
    className,
    children,
    hoverable = true,
    glow = false,
    ...props
}: CardProps) {
    return (
        <motion.div
            whileHover={hoverable ? { y: -4 } : undefined}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
                // Base glassmorphism
                "glass rounded-2xl p-6",
                // Subtle hover state
                hoverable && "glass-hover cursor-pointer",
                // Optional glow on hover
                glow && "glow-on-hover",
                // Transition
                "transition-all duration-200 ease-out",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
