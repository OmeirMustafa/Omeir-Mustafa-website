"use client";

import * as React from "react";
import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: [
        "bg-accent text-background font-medium",
        "hover:bg-accent-muted",
        "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ].join(" "),
    secondary: [
        "bg-muted text-foreground",
        "hover:bg-card-hover",
        "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ].join(" "),
    outline: [
        "bg-transparent border border-border text-foreground",
        "hover:border-accent hover:text-accent",
        "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ].join(" "),
    ghost: [
        "bg-transparent text-foreground-muted",
        "hover:bg-muted hover:text-foreground",
        "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-sm rounded-lg",
    md: "h-11 px-6 text-sm rounded-lg",
    lg: "h-14 px-8 text-base rounded-xl",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const prefersReducedMotion = useReducedMotion();

        // Simplified animation for reduced motion preference
        const hoverAnimation = prefersReducedMotion
            ? {}
            : {
                scale: 1.02,
                y: -2,
                boxShadow: variant === "primary" || variant === "outline"
                    ? "0 8px 20px rgba(6, 182, 212, 0.15)"
                    : undefined,
            };

        const tapAnimation = prefersReducedMotion
            ? {}
            : { scale: 0.98, y: 0 };

        return (
            <motion.button
                ref={ref}
                whileHover={hoverAnimation}
                whileTap={tapAnimation}
                transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap font-medium",
                    "transition-colors duration-200",
                    "disabled:pointer-events-none disabled:opacity-50",
                    "outline-none cursor-pointer",
                    variantStyles[variant],
                    sizeStyles[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
