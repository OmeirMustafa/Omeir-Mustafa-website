import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  max?: number;
  size?: number;
  className?: string;
  showValue?: boolean;
}

export function Rating({ value, max = 5, size = 14, className, showValue = true }: RatingProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            "transition-colors",
            i < Math.floor(value)
              ? "fill-white text-white"
              : i < value
              ? "fill-white/50 text-white/50"
              : "fill-zinc-800 text-zinc-800"
          )}
        />
      ))}
      {showValue && (
        <span className="ml-1.5 text-xs font-mono text-foreground-muted">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}
