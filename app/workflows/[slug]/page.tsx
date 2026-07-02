import { getWorkflowBySlug, getAllWorkflows, getRelatedTools } from "@/lib/content";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Clock, Gauge, Zap, CheckCircle2, ArrowUpRight, Play, Download } from "lucide-react";
import Link from "next/link";
import { Embed } from "@/components/ui/embed";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const workflows = getAllWorkflows();
    return workflows.map((workflow) => ({
        slug: workflow.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const workflow = getWorkflowBySlug(slug);

    if (!workflow) {
        return {
            title: "Workflow Not Found",
        };
    }

    return {
        title: `${workflow.name} | AI Workflow by Omeir Mustafa`,
        description: workflow.description,
    };
}

const difficultyColors: Record<string, string> = {
    beginner: "text-emerald-400",
    intermediate: "text-amber-400",
    advanced: "text-rose-400",
};

export default async function WorkflowPage({ params }: Props) {
    const slug = (await params).slug;
    const workflow = getWorkflowBySlug(slug);

    if (!workflow) {
        notFound();
    }

    const toolsUsed = getRelatedTools(workflow.tools);

    return (
        <main className="bg-black min-h-screen pt-32 pb-24">
            <Container size="md">
                <Breadcrumbs 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Workflows", href: "/workflows" },
                        { label: workflow.name }
                    ]} 
                />

                {/* Header */}
                <div className="mb-16">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <Badge variant="difficulty">
                            <Gauge size={12} className={`mr-1.5 ${difficultyColors[workflow.difficulty]}`} />
                            {workflow.difficulty}
                        </Badge>
                        <Badge variant="default">
                            <Clock size={12} className="mr-1.5 text-zinc-400" />
                            {workflow.estimatedTime} setup
                        </Badge>
                        <Badge variant="pricing" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                            <Zap size={12} className="mr-1.5" />
                            Saves {workflow.timeSaved}
                        </Badge>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                        {workflow.name}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mb-10">
                        {workflow.description}
                    </p>

                    {/* Tools Stack */}
                    <div className="flex flex-wrap items-center gap-4 py-6 border-y border-white/5">
                        <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest mr-2">Tech Stack</span>
                        {toolsUsed.map(tool => (
                            <Link 
                                key={tool.slug} 
                                href={`/tools/${tool.slug}`}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors"
                            >
                                <span className="text-sm font-medium text-white">{tool.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-16">
                    {/* Video Tutorial (if exists) */}
                    {workflow.videoUrl && (
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6">Video Walkthrough</h2>
                            <Embed src={workflow.videoUrl} title={`Walkthrough: ${workflow.name}`} />
                        </section>
                    )}

                    {/* Step by Step Guide */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8">Implementation Steps</h2>
                        <div className="space-y-8">
                            {workflow.steps.map((step, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono font-bold">
                                        {idx + 1}
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Code/Prompt Template */}
                    {workflow.prompt && (
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6">Core Prompt / Code</h2>
                            <div className="p-6 md:p-8 rounded-3xl bg-zinc-950 border border-white/10">
                                <pre className="font-mono text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed">
                                    {workflow.prompt}
                                </pre>
                            </div>
                        </section>
                    )}

                    {/* Call to Action */}
                    {workflow.downloadUrl && (
                        <section className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to implement?</h2>
                            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                                Download the complete blueprint, templates, and exact configuration files to set this up in minutes.
                            </p>
                            <a 
                                href={workflow.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 h-14 px-8 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors"
                            >
                                <Download size={18} /> Download Blueprint
                            </a>
                        </section>
                    )}
                </div>
            </Container>
        </main>
    );
}
