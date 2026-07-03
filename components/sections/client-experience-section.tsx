
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BadgeCheck } from "lucide-react";

const values = [
    "Clear thinking before design decisions are made",
    "Calm, structured communication throughout the project",
    "Respect for industry constraints, risk, and compliance",
    "Websites that support business goals, not personal design preferences"
];

export function ClientExperienceSection() {
    return (
        <Section id="client-experience" className="bg-background relative py-20 md:py-24">
            {/* Seamless Section Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <Container className="max-w-4xl mx-auto">
                <div
                    className="bg-muted/20 border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-transparent pointer-events-none" />

                    <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-8 text-center tracking-tight">
                        Client Operations Values
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3"
                            >
                                <div className="mt-1 text-white flex-shrink-0 opacity-40">
                                    <BadgeCheck size={18} />
                                </div>
                                <p className="text-foreground-muted text-sm leading-relaxed">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
