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
}

export function Section({ id, children, className, as: Component = "section", label, heading, headingMuted, description, ...props }: SectionProps) {
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
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-6">/ {label}</span>
          )}
          {heading && (
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              {heading}
              {headingMuted && (<><br /><span className="text-zinc-500">{headingMuted}</span></>)}
            </h2>
          )}
          {description && (
            <p className="text-base text-zinc-400 leading-relaxed max-w-2xl">{description}</p>
          )}
        </motion.div>
      )}
      {children}
    </Component>
  );
}
