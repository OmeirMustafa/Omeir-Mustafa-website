import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    // Base styles
                    "flex h-11 w-full rounded-lg px-4 py-2 text-sm",
                    // Background & border
                    "bg-muted border border-border",
                    // Text
                    "text-foreground placeholder:text-foreground-subtle",
                    // Focus state with neon glow
                    "outline-none transition-all duration-200",
                    "focus:border-accent focus:ring-2 focus:ring-accent/20",
                    "glow-on-focus",
                    // Disabled
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
