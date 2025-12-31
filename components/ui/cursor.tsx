"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true); // Default to true for SSR

    // Mouse position values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Silky smooth spring physics for the trailing ring
    const springConfig = { damping: 30, stiffness: 400, mass: 0.3 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Check for touch device
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        setIsTouchDevice(isTouch);
        if (isTouch) return;

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        // Track mouse movement
        window.addEventListener("mousemove", moveCursor);

        // Add hover detection for clickable elements
        const addHoverListeners = () => {
            const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .clickable');
            clickables.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        };

        addHoverListeners();

        // Re-run listener attachment on DOM changes
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            observer.disconnect();
            const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .clickable');
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [mouseX, mouseY, isVisible]);

    // Don't render on touch devices
    if (isTouchDevice) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* Primary Dot - Crisp, Instant */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                    backgroundColor: "rgba(37, 99, 235, 1)", // accent color
                    boxShadow: "0 0 6px rgba(37, 99, 235, 0.6), 0 0 2px rgba(255,255,255,0.8)",
                }}
                animate={{
                    width: isHovered ? 6 : 6,
                    height: isHovered ? 6 : 6,
                }}
                transition={{ duration: 0 }}
            />

            {/* Trailing Ring - Elegant, Fluid */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    border: "1.5px solid rgba(37, 99, 235, 0.6)",
                    backgroundColor: "transparent",
                }}
                animate={{
                    width: isHovered ? 48 : 32,
                    height: isHovered ? 48 : 32,
                    opacity: isHovered ? 0.9 : 0.5,
                    borderColor: isHovered ? "rgba(37, 99, 235, 0.8)" : "rgba(255, 255, 255, 0.3)",
                }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                    mass: 0.4
                }}
            />
        </motion.div>
    );
}
