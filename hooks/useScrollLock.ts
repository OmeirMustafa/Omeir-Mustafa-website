"use client";

import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useScrollLock(lock: boolean) {
    useIsomorphicLayoutEffect(() => {
        if (!lock) return;

        const originalStyle = window.getComputedStyle(document.body).overflow;
        const scrollbarWidth = window.innerWidth - document.body.offsetWidth;
        const originalPadding = window.getComputedStyle(document.body).paddingRight;

        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `calc(${originalPadding} + ${scrollbarWidth}px)`;
        }

        return () => {
            document.body.style.overflow = originalStyle;
            document.body.style.paddingRight = originalPadding;
        };
    }, [lock]);
}
