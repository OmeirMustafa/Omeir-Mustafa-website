import { getToolBySlug, getAllTools } from "@/lib/content";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { Bot, Code, Workflow, Sparkles, Zap, BrainCircuit, Palette, Search, ArrowUpRight, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const tools = getAllTools();
    return tools.map((tool) => ({
        slug: tool.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const tool = getToolBySlug(slug);

    if (!tool) {
        return {
            title: "Tool Not Found",
        };
    }

    return {
        title: `${tool.name} Review & Use Cases | Omeir Mustafa`,
        description: tool.description,
    };
}

const categoryIcons: Record<string, React.ElementType> = {
    "ai-assistant": Bot,
    "coding": Code,
    "automation": Workflow,
    "design": Palette,
    "productivity": Sparkles,
    "llm": BrainCircuit,
    "agent-framework": Zap,
};

export default async function ToolPage({ params }: Props) {
    const slug = (await params).slug;
    const tool = getToolBySlug(slug);

    if (!tool) {
        notFound();
    }

    const Icon = categoryIcons[tool.category] || Search;

    return (
        <main className="bg-background min-h-screen pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
                                    { "@type": "ListItem", "position": 2, "name": "Tools", "item": `${siteConfig.url}tools` },
                                    { "@type": "ListItem", "position": 3, "name": tool.name }
                                ]
                            },
                            {
                                "@type": "SoftwareApplication",
                                "name": tool.name,
                                "applicationCategory": tool.category,
                                "operatingSystem": "Web",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "USD"
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": tool.rating.toString(),
                                    "bestRating": "10",
                                    "worstRating": "1",
                                    "ratingCount": "1"
                                }
                            }
                        ]
                    })
                }}
            />
            <Container size="md">
                <Breadcrumbs 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Tools", href: "/tools" },
                        { label: tool.name }
                    ]} 
                />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-8 mb-16">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-border-hover flex items-center justify-center text-white flex-shrink-0">
                        <Icon size={40} strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Badge variant="pricing">{tool.pricing}</Badge>
                            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                                {tool.category.replace('-', ' ')}
                            </span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                            {tool.name}
                        </h1>
                        
                        <p className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-6">
                            {tool.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 border-y border-border py-4">
                            <div>
                                <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest block mb-1">My Rating</span>
                                <Rating value={tool.rating} size={16} />
                            </div>
                            <div className="w-px h-8 bg-white/5" />
                            <div>
                                <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest block mb-1">Pricing</span>
                                <span className="text-sm font-semibold text-white">{tool.pricingDetails || "Varies"}</span>
                            </div>
                            <div className="w-px h-8 bg-white/5" />
                            <a 
                                href={tool.affiliateUrl || tool.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 h-10 px-5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                            >
                                Try {tool.name} <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column: Best For & Use Cases */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-white/5 border border-border-hover flex items-center justify-center">
                                    <Sparkles size={16} className="text-foreground-muted" />
                                </span>
                                Core Use Cases
                            </h2>
                            <ul className="space-y-4">
                                {tool.useCases.map((useCase, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-zinc-300">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                                        <span className="leading-relaxed">{useCase}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        
                        {tool.tags.length > 0 && (
                            <section>
                                <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tool.tags.map(tag => (
                                        <Badge key={tag} variant="outline">{tag}</Badge>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column: Pros & Cons */}
                    <div className="space-y-8">
                        <div className="p-6 md:p-8 rounded-3xl bg-muted/40 border border-border">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <CheckCircle2 size={18} className="text-emerald-500" />
                                What I Love
                            </h3>
                            <ul className="space-y-4">
                                {tool.pros.map((pro, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 flex-shrink-0" />
                                        <span className="leading-relaxed">{pro}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 md:p-8 rounded-3xl bg-muted/40 border border-border">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <XCircle size={18} className="text-rose-500" />
                                Limitations
                            </h3>
                            <ul className="space-y-4">
                                {tool.cons.map((con, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500/50 flex-shrink-0" />
                                        <span className="leading-relaxed">{con}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
