"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <Section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
        
        <Container className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl font-heading font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Omeir Mustafa
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
              Business Development & CRM Systems Specialist
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" variant="primary">
              Get in Touch
            </Button>
            <Button size="lg" variant="outline">
              View Services
            </Button>
          </motion.div>
        </Container>
      </Section>
  );
}
