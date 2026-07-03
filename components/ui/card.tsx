import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div 
            className={cn(
                "group relative rounded-3xl bg-white/[0.02] border border-border hover:border-border-hover transition-all duration-500 hover:bg-white/[0.04]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
