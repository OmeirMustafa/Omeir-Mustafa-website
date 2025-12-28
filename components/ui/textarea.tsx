import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    // Base styles
                    "flex min-h-[120px] w-full rounded-lg px-4 py-3 text-sm resize-none",
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
Textarea.displayName = "Textarea";

export { Textarea };
