"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-background flex items-center justify-center pt-24 pb-24">
            <Container className="text-center">
                <div className="max-w-md mx-auto">
                    <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground block mb-4">
                        System Error
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        Something went wrong
                    </h1>
                    <p className="text-foreground-muted mb-8 leading-relaxed">
                        An unexpected error occurred. We have been notified and are looking into it.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Button variant="primary" onClick={() => reset()}>
                            Try again
                        </Button>
                        <Button variant="outline" onClick={() => window.location.href = "/"}>
                            Return Home
                        </Button>
                    </div>
                </div>
            </Container>
        </main>
    );
}
