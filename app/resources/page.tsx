import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllResources } from "@/lib/content";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, LayoutTemplate, Bot, Workflow } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Resources | Omeir Mustafa",
    description: "Premium prompt packs, automation templates, and notion systems to build AI faster.",
};

const typeIcons: Record<string, React.ElementType> = {
    "prompt-pack": Bot,
    "template": LayoutTemplate,
    "guide": FileText,
    "automation": Workflow,
    "notion-system": LayoutTemplate,
};

export default function ResourcesPage() {
    const resources = getAllResources();

    return (
        <main className="bg-black min-h-screen pt-24">
            <Section heading="Resource Library" headingMuted="Assets & Templates" description="Premium prompt packs, automation templates, and systems to help you build and implement AI faster.">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((resource) => {
                            const Icon = typeIcons[resource.type] || FileText;
                            
                            return (
                                <a
                                    key={resource.slug}
                                    href={resource.downloadUrl || "#"}
                                    className="group block p-6 md:p-8 rounded-3xl bg-zinc-950/20 border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden h-full flex flex-col"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                                                <Icon size={22} strokeWidth={1.5} />
                                            </div>
                                            <Badge variant={resource.pricing === 'free' ? 'default' : 'pricing'}>
                                                {resource.pricing === 'free' ? 'Free' : resource.price}
                                            </Badge>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">
                                            {resource.name}
                                        </h3>
                                        
                                        <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                                            {resource.shortDescription}
                                        </p>

                                        <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-widest">
                                                {resource.type.replace('-', ' ')}
                                            </span>
                                            <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-zinc-300 transition-colors">
                                                <Download size={14} /> 
                                                <span>Get Access</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
