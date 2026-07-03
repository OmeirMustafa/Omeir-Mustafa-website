"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  label?: string;
  heading?: string;
  headingMuted?: string;
  description?: string;
  h1?: boolean;
}

export function Section({ id, children, className, as: Component = "section", label, heading, headingMuted, description, h1, ...props }: SectionProps) {
  return (
    <Component
      id={id}
      className={cn("py-20 md:py-32 relative overflow-hidden", className)}
      {...props}
    >
      {(label || heading) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          {label && (
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-6">/ {label}</span>
          )}
          {heading && h1 && (
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              {heading}
              {headingMuted && (<><br /><span className="text-muted-foreground">{headingMuted}</span></>)}
            </h1>
          )}
          {heading && !h1 && (
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              {heading}
              {headingMuted && (<><br /><span className="text-muted-foreground">{headingMuted}</span></>)}
            </h2>
          )}
          {description && (
            <p className="text-base text-foreground-muted leading-relaxed max-w-2xl">{description}</p>
          )}
        </motion.div>
      )}
      {children}
    </Component>
  );
}
