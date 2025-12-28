
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24 lg:py-32", className)} {...props}>
      {children}
    </section>
  );
}
