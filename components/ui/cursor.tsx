"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TrailPoint {
    x: number;
    y: number;
    id: number;
}

export function Cursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true);
    const [trail, setTrail] = useState<TrailPoint[]>([]);
    const trailIdRef = useRef(0);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Responsive spring - snappy, no lag
    const springConfig = { damping: 50, stiffness: 800, mass: 0.1 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        setIsTouchDevice(isTouch);
        if (isTouch) return;

        document.body.style.cursor = "none";
        document.documentElement.style.cursor = "none";

        let lastX = 0;
        let lastY = 0;
        let frameId: number;

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);

            // Calculate movement distance for trail intensity
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Only add trail points when moving fast enough
            if (distance > 8) {
                trailIdRef.current++;
                setTrail(prev => [
                    ...prev.slice(-6), // Keep last 6 points
                    { x: e.clientX, y: e.clientY, id: trailIdRef.current }
                ]);
            }

            lastX = e.clientX;
            lastY = e.clientY;
        };

        // Clean up old trail points
        const cleanTrail = () => {
            setTrail(prev => prev.slice(-4));
            frameId = requestAnimationFrame(cleanTrail);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);
        frameId = requestAnimationFrame(cleanTrail);

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
            cancelAnimationFrame(frameId);
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
            {/* Smoky Jet Trail */}
            {trail.map((point, index) => (
                <motion.div
                    key={point.id}
                    className="absolute rounded-full"
                    initial={{
                        x: point.x,
                        y: point.y,
                        opacity: 0.4,
                        scale: 1
                    }}
                    animate={{
                        opacity: 0,
                        scale: 2.5,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    style={{
                        width: 8 - index * 0.5,
                        height: 8 - index * 0.5,
                        background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                        filter: "blur(3px)",
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                />
            ))}

            {/* The Triangle Cursor - Pointing Top-Left */}
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

                {/* Main Cursor - Classic Arrow Shape Pointing Top-Left */}
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
