"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
    const [isTouchDevice] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia("(pointer: coarse)").matches;
        }
        return true;
    });

    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 35, stiffness: 1000, mass: 0.1 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        if (isTouch) return;

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
            {/* Main Cursor - Arrow */}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            >
                {/* Glow Layer */}
                <svg
                    width="20"
                    height="26"
                    viewBox="0 0 20 26"
                    fill="none"
                    style={{
                        filter: "blur(2px)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: 0.5,
                    }}
                >
                    <path
                        d="M1 1L1 22L6 17L10 25L13 24L9 16L18 16L1 1Z"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                </svg>

                {/* Main Cursor */}
                <motion.svg
                    width="20"
                    height="26"
                    viewBox="0 0 20 26"
                    fill="none"
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                    }}
                    style={{
                        filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.15))",
                    }}
                >
                    <path
                        d="M1 1L1 22L6 17L10 25L13 24L9 16L18 16L1 1Z"
                        fill="rgba(255, 255, 255, 0.9)"
                        stroke="rgba(255, 255, 255, 0.4)"
                        strokeWidth="0.5"
                    />
                </motion.svg>
            </motion.div>
        </motion.div>
    );
}
