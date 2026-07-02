import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllWorkflows } from "@/lib/content";
import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock, Gauge, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Workflows | Omeir Mustafa",
    description: "Production-ready automation workflows and AI agent pipelines to scale your business.",
};

const difficultyColors: Record<string, string> = {
    beginner: "text-emerald-400",
    intermediate: "text-amber-400",
    advanced: "text-rose-400",
};

export default function WorkflowsPage() {
    const workflows = getAllWorkflows();

    return (
        <main className="bg-black min-h-screen pt-24">
            <Section heading="Workflow Library" headingMuted="Automate Everything" description="Production-ready automation workflows and AI agent pipelines designed to save you hours every week.">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workflows.map((workflow) => (
                            <Link
                                key={workflow.slug}
                                href={`/workflows/${workflow.slug}`}
                                className="group block p-6 md:p-8 rounded-3xl bg-zinc-950/20 border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden h-full flex flex-col"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Badge variant="difficulty">
                                            <Gauge size={10} className={`mr-1 ${difficultyColors[workflow.difficulty]}`} />
                                            {workflow.difficulty}
                                        </Badge>
                                        <Badge variant="default">
                                            <Clock size={10} className="mr-1" />
                                            {workflow.estimatedTime}
                                        </Badge>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-zinc-200 transition-colors leading-snug">
                                        {workflow.name}
                                    </h3>
                                    
                                    <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                                        {workflow.shortDescription}
                                    </p>

                                    <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Zap size={14} className="text-zinc-500" />
                                            <span className="text-xs font-mono text-zinc-400">
                                                Saves <span className="text-white font-semibold">{workflow.timeSaved}</span>
                                            </span>
                                        </div>
                                        <span className="text-xs font-semibold text-white group-hover:translate-x-1 transition-transform">
                                            View →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
