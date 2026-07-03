import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllTools } from "@/lib/content";
import { Metadata } from "next";
import Link from "next/link";
import { Rating } from "@/components/ui/rating";
import { Badge } from "@/components/ui/badge";
import { Bot, Code, Workflow, Sparkles, Zap, BrainCircuit, Palette, Search } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Tools Library | Omeir Mustafa",
    description: "A curated directory of production-ready AI tools for developers and creators.",
};

const categoryIcons: Record<string, React.ElementType> = {
    "ai-assistant": Bot,
    "coding": Code,
    "automation": Workflow,
    "design": Palette,
    "productivity": Sparkles,
    "llm": BrainCircuit,
    "agent-framework": Zap,
};

export default function ToolsPage() {
    const tools = getAllTools();

    return (
        <main className="bg-background min-h-screen pt-24">
            <Section h1 heading="AI Tools Library" headingMuted="Curated Stack" description="The exact AI tools, models, and frameworks I use to build systems and automate workflows.">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((tool) => {
                            const Icon = categoryIcons[tool.category] || Search;
                            
                            return (
                                <Link
                                    key={tool.slug}
                                    href={`/tools/${tool.slug}`}
                                    className="group block p-6 md:p-8 rounded-3xl bg-muted/20 border border-border hover:border-border-hover transition-all duration-500 relative overflow-hidden h-full flex flex-col"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-border-hover flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                                                <Icon size={22} strokeWidth={1.5} />
                                            </div>
                                            <Badge variant="pricing">{tool.pricing}</Badge>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">
                                            {tool.name}
                                        </h3>
                                        
                                        <p className="text-sm text-foreground-muted leading-relaxed mb-6 line-clamp-2">
                                            {tool.shortDescription}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                                            <Rating value={tool.rating} size={14} />
                                            <span className="text-xs font-mono font-medium px-2 py-1 rounded bg-white/5 text-foreground-muted">
                                                {tool.category.replace('-', ' ')}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
