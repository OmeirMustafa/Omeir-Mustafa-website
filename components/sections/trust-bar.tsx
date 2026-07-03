import { Container } from "@/components/ui/container";
import { tools } from "@/data/tools";
import { workflows } from "@/data/workflows";
import { contentItems } from "@/data/content";

export function TrustBar() {
    const stats = [
        { label: "AI Tools Reviewed", value: tools.length, suffix: "" },
        { label: "Workflows Built", value: workflows.length, suffix: "" },
        { label: "Resources Created", value: contentItems.length, suffix: "" },
    ];

    return (
        <section
            className="relative py-16 md:py-20 border-t border-b border-border"
            aria-label="Social proof metrics"
        >
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center"
                        >
                            <span className="text-3xl md:text-4xl font-bold text-white tracking-tight font-sans tabular-nums">
                                {stat.value}{stat.suffix}
                            </span>
                            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
