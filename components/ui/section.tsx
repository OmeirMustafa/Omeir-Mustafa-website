"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType; // Allow custom tag
}

export function Section({ id, children, className, as: Component = "section", ...props }: SectionProps) {
  return (
    <Component
      id={id}
      className={cn("py-20 md:py-32 relative overflow-hidden", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
