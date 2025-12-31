"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    // Mouse position values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Ultra-responsive spring for the blade
    // Stiff and heavily dampened for a "sharp" feel, no wobble
    const springConfig = { damping: 20, stiffness: 500, mass: 0.2 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
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

        window.addEventListener("mousemove", moveCursor);

        const addHoverListeners = () => {
            const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .clickable');
            clickables.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        };

        addHoverListeners();

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

    if (isTouchDevice) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* The Blade: A sharp, rotating diamond */}
            <motion.div
                className="absolute bg-white"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    rotate: 45, // Constant 45deg rotation for diamond shape
                }}
                animate={{
                    width: isHovered ? 20 : 12,
                    height: isHovered ? 20 : 12,
                    borderRadius: 0, // Perfectly sharp corners
                    scale: isHovered ? 1.2 : 1,
                    rotate: isHovered ? 135 : 45, // satisfying 90deg rotation on hover
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.5
                }}
            />

            {/* Center Cutout/Detail (Optional - adds richness) */}
            <motion.div
                className="absolute bg-black"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    rotate: 45,
                }}
                animate={{
                    width: isHovered ? 0 : 0,
                    height: isHovered ? 0 : 0,
                    opacity: 0,
                }}
            />
        </motion.div>
    );
}
