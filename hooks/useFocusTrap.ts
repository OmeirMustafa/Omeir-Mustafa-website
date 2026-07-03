"use client";

import { useEffect, useRef } from "react";

export function useFocusTrap<T extends HTMLElement>(active: boolean) {
    const ref = useRef<T>(null);

    useEffect(() => {
        if (!active || !ref.current) return;

        const element = ref.current;
        const focusableElements = element.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        };

        element.addEventListener('keydown', handleKeyDown);
        
        // Initial focus inside the trap if nothing inside is already focused
        if (!element.contains(document.activeElement)) {
            firstElement.focus();
        }

        return () => {
            element.removeEventListener('keydown', handleKeyDown);
        };
    }, [active]);

    return ref;
}
