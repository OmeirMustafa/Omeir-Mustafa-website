import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
}

export function Card({ as: Component = "div", className, children, ...props }: CardProps) {
    return (
        <Component
            className={cn(
                "rounded-xl border border-white/5 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:bg-card/80 hover:border-white/10",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
