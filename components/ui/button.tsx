import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg" | "icon";

export const buttonStyles = ({
    variant = "primary",
    size = "default",
    className
}: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
} = {}) => {
    const base = "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none";
    
    const variants: Record<ButtonVariant, string> = {
        primary: "bg-white text-black hover:bg-zinc-200 border border-border-hover",
        secondary: "bg-transparent text-white border border-border-hover hover:bg-white/5",
        outline: "border border-border text-foreground-muted hover:text-white hover:border-border-hover bg-transparent",
        ghost: "hover:bg-white/5 text-foreground-muted hover:text-white bg-transparent",
    };

    const sizes: Record<ButtonSize, string> = {
        default: "h-12 px-8",
        sm: "h-9 px-4",
        lg: "h-14 px-10 text-base",
        icon: "h-12 w-12",
    };

    return cn(base, variants[variant], sizes[size], className);
};

export function Button({ 
    className, 
    variant, 
    size, 
    ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
    variant?: ButtonVariant; 
    size?: ButtonSize 
}) {
    return (
        <button className={buttonStyles({ variant, size, className })} {...props} />
    );
}
