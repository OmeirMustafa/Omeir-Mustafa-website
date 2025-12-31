"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Responsive spring - no trailing, just smooth response
    const springConfig = { damping: 50, stiffness: 800, mass: 0.1 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        setIsTouchDevice(isTouch);
        if (isTouch) return;

        // Hide the default cursor on the entire page
        document.body.style.cursor = "none";
        document.documentElement.style.cursor = "none";

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);

        const addHoverListeners = () => {
            const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .clickable');
            clickables.forEach((el) => {
                (el as HTMLElement).style.cursor = "none";
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        };

        addHoverListeners();

        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.body.style.cursor = "";
            document.documentElement.style.cursor = "";
            window.removeEventListener("mousemove", moveCursor);
            observer.disconnect();
            const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .clickable');
            clickables.forEach((el) => {
                (el as HTMLElement).style.cursor = "";
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [mouseX, mouseY, isVisible]);

    if (isTouchDevice) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* The Triangle Cursor */}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-20%",
                    translateY: "-10%",
                }}
            >
                {/* Glow Layer - Soft, Smoky Blur */}
                <svg
                    width="28"
                    height="36"
                    viewBox="0 0 28 36"
                    fill="none"
                    style={{
                        filter: "blur(3px)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: 0.6,
                    }}
                >
                    <path
                        d="M2 2L26 18L2 34L8 18L2 2Z"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                </svg>

                {/* Main Cursor - Sharp Triangle */}
                <motion.svg
                    width="28"
                    height="36"
                    viewBox="0 0 28 36"
                    fill="none"
                    animate={{
                        scale: isHovered ? 1.15 : 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                    }}
                    style={{
                        filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))",
                    }}
                >
                    {/* The Triangle Path: Point at top-left, extends down-right */}
                    <path
                        d="M2 2L26 18L2 34L8 18L2 2Z"
                        fill="rgba(255, 255, 255, 0.85)"
                        stroke="rgba(255, 255, 255, 0.3)"
                        strokeWidth="1"
                    />
                </motion.svg>
            </motion.div>
        </motion.div>
    );
}
