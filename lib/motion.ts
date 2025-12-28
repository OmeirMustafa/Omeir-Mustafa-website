// Centralized motion configuration for consistent animations
// Use these throughout the site for unified timing

import { Easing } from "framer-motion";

// Easing curves
export const ease = {
    // Premium smooth easing - use for most animations
    smooth: [0.16, 1, 0.3, 1] as Easing,
    // Snappy for micro-interactions
    snappy: [0.34, 1.56, 0.64, 1] as Easing,
    // Natural ease-out
    out: [0, 0, 0.2, 1] as Easing,
    // Spring-like bounce
    bounce: [0.68, -0.55, 0.27, 1.55] as Easing,
};

// Durations
export const duration = {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
};

// Standard transitions
export const transition = {
    // Micro-interactions (buttons, hovers)
    micro: {
        duration: duration.fast,
        ease: ease.out,
    },
    // Standard element transitions
    standard: {
        duration: duration.normal,
        ease: ease.smooth,
    },
    // Section entrances
    entrance: {
        duration: duration.slow,
        ease: ease.smooth,
    },
    // Spring for playful interactions
    spring: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
    },
    // Stagger children
    stagger: {
        staggerChildren: 0.1,
    },
};

// Viewport settings for scroll animations
export const viewport = {
    once: true,
    margin: "-100px",
};

// Common animation variants
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: transition.standard,
    },
};

export const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: transition.entrance,
    },
};

export const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: transition.entrance,
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Hover effects
export const hoverScale = {
    scale: 1.02,
    transition: transition.micro,
};

export const hoverLift = {
    y: -4,
    transition: transition.micro,
};

export const tapScale = {
    scale: 0.98,
};
