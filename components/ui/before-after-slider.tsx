"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    className?: string;
}

export function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    className
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Mouse move
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    // Touch move (for mobile)
    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener("mouseup", handleGlobalMouseUp);
        return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden select-none cursor-ew-resize group",
                "ring-1 ring-border shadow-2xl",
                className
            )}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)} // Click to jump
        >
            {/* AFTER Image (Background - Full Width) */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={afterImage}
                    alt={afterLabel}
                    fill
                    className="object-cover object-top"
                    priority
                />
                <span className="absolute top-4 right-4 bg-background/80 backdrop-blur-md text-foreground px-3 py-1 rounded-full text-xs font-semibold tracking-wider border border-white/10 z-10">
                    {afterLabel}
                </span>
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <div className="absolute inset-0 w-full h-full"> {/* Inner wrapper to maintain aspect ratio relative to container */}
                    <Image
                        src={beforeImage}
                        alt={beforeLabel}
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>
                <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-foreground px-3 py-1 rounded-full text-xs font-semibold tracking-wider border border-white/10 z-10">
                    {beforeLabel}
                </span>
            </div>

            {/* Drag Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white/20 transition-transform group-hover:scale-110 active:scale-125">
                    <MoveHorizontal size={14} className="text-white" />
                </div>
            </div>

            {/* Hint overlay (fades out on interaction) */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isDragging ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            >
                Drag to compare
            </motion.div>
        </div>
    );
}
