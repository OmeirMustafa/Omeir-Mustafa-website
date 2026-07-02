import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'difficulty' | 'pricing';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono font-medium select-none",
        size === 'sm' && "text-[10px] px-2.5 py-1 rounded-lg",
        size === 'md' && "text-xs px-3 py-1.5 rounded-xl",
        variant === 'default' && "bg-white/5 text-zinc-400 border border-white/5",
        variant === 'outline' && "bg-transparent text-zinc-400 border border-white/10",
        variant === 'difficulty' && "bg-white/5 text-zinc-300 border border-white/10",
        variant === 'pricing' && "bg-white/[0.08] text-white border border-white/10 font-semibold",
        className
      )}
    >
      {children}
    </span>
  );
}
