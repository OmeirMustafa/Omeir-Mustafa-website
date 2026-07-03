import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Sparkles } from "lucide-react";
import { NewsletterForm } from "@/components/ui/newsletter-form";

export function NewsletterSection() {
    return (
        <Section className="bg-background">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.01] blur-[120px] rounded-full pointer-events-none" />

            <Container size="md">
                <div
                    className="relative text-center"
                >
                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto mb-8 rounded-2xl bg-white/5 border border-border-hover flex items-center justify-center text-white">
                        <Sparkles size={24} strokeWidth={1.5} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        Stay Ahead of AI
                    </h2>
                    <p className="text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl mx-auto mb-10">
                        Weekly insights on AI tools, automation workflows, and the strategies shaping the future of work. No spam, just signal.
                    </p>

                    {/* Form */}
                    <div className="max-w-md mx-auto mb-6">
                        <NewsletterForm 
                            variant="inline" 
                            placeholder="Enter your email" 
                            buttonText="Subscribe" 
                        />
                    </div>

                    {/* Privacy Notice */}
                    <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
                        No spam. Unsubscribe anytime. Your privacy is respected.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
