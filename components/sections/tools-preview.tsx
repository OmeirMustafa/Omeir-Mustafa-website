import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowRight, Bot, Code, Workflow, Sparkles, Zap, BrainCircuit, Palette, Search } from "lucide-react";
import { getFeaturedTools } from "@/lib/content";
import { Rating } from "@/components/ui/rating";
import { Badge } from "@/components/ui/badge";

const categoryIcons: Record<string, React.ElementType> = {
    "ai-assistant": Bot,
    "coding": Code,
    "automation": Workflow,
    "design": Palette,
    "productivity": Sparkles,
    "llm": BrainCircuit,
    "agent-framework": Zap,
};

export function ToolsPreviewSection() {
    const tools = getFeaturedTools();

    return (
        <Section className="bg-background">
            {/* Seamless Section Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <Container>
                <div
                    className="flex items-end justify-between mb-16"
                >
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-6">/ AI Tool Library</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                            Tools I Use <br />
                            <span className="text-muted-foreground">& Recommend</span>
                        </h2>
                    </div>
                    <Link
                        href="/tools"
                        className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground-muted hover:text-white transition-colors group"
                    >
                        View All Tools
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.slice(0, 6).map((tool, index) => {
                        const Icon = categoryIcons[tool.category] || Search;
                        return (
                            <div
                                key={tool.slug}
                            >
                                <Link
                                    href={`/tools/${tool.slug}`}
                                    className="group block p-6 md:p-8 rounded-3xl bg-muted/20 border border-border hover:border-border-hover transition-all duration-500 relative overflow-hidden h-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-border-hover flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                                                <Icon size={22} strokeWidth={1.5} />
                                            </div>
                                            <Badge variant="pricing">{tool.pricing}</Badge>
                                        </div>

                                        <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">
                                            {tool.name}
                                        </h3>
                                        <p className="text-sm text-foreground-muted leading-relaxed mb-4 line-clamp-2">
                                            {tool.shortDescription}
                                        </p>

                                        <Rating value={tool.rating} size={12} />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <Link
                    href="/tools"
                    className="md:hidden mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground-muted hover:text-white transition-colors group"
                >
                    View All Tools
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </Container>
        </Section>
    );
}
