"use client";

import { ReactNode } from "react";

export function AnalyticsProvider({ children }: { children: ReactNode }) {
    // Architecture-ready analytics wrapper.
    // Replace with GA4, Plausible, PostHog, or Clarity script integrations later.
    
    return <>{children}</>;
}

// Utility to track events manually if needed
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Implement tracking logic
    if (process.env.NODE_ENV !== "production") {
        console.log(`[Analytics Event]: ${eventName}`, properties);
    }
};
