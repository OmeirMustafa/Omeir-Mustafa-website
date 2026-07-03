"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FilterBarProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  className?: string;
}

export function FilterBar({ filters, activeFilter, onFilterChange, className }: FilterBarProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            "relative px-4 py-2 text-xs font-medium rounded-full transition-colors duration-300 min-h-[36px]",
            activeFilter === filter
              ? "text-white"
              : "text-foreground-muted hover:text-white bg-transparent border border-border hover:border-border-hover"
          )}
        >
          {activeFilter === filter && (
            <motion.span
              layoutId="activeFilter"
              className="absolute inset-0 bg-white/[0.08] border border-border-hover rounded-full"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{filter}</span>
        </button>
      ))}
    </div>
  );
}
