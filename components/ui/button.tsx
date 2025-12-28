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
        "bg-foreground text-background font-medium",
        "hover:bg-foreground/90",
        "focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ].join(" "),
    secondary: [
        "bg-muted text-foreground",
        "hover:bg-muted/80",
        "focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ].join(" "),
    outline: [
        "bg-transparent border border-border text-foreground",
        "hover:border-foreground-muted",
        "focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ].join(" "),
    ghost: [
        "bg-transparent text-foreground-muted",
        "hover:text-foreground",
        "focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-10 px-5 text-sm rounded-lg",
    md: "h-12 px-7 text-sm rounded-lg",
    lg: "h-14 px-10 text-base rounded-lg tracking-wide",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const prefersReducedMotion = useReducedMotion();

        const hoverAnimation = prefersReducedMotion
            ? {}
            : {
                y: -2,
                boxShadow: variant === "primary"
                    ? "0 0 20px rgba(6, 182, 212, 0.15)"
                    : undefined,
            };

        const tapAnimation = prefersReducedMotion ? {} : { scale: 0.98 };

        return (
            <motion.button
                ref={ref}
                whileHover={hoverAnimation}
                whileTap={tapAnimation}
                transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap font-medium",
                    "transition-all duration-300",
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
