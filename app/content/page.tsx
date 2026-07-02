import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllContent } from "@/lib/content";
import { Metadata } from "next";
import { Play, Image as ImageIcon, Youtube, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Content Studio | Omeir Mustafa",
    description: "Latest insights, tutorials, and deep-dives on AI agents, automation, and software architecture.",
};

const platformIcons: Record<string, React.ElementType> = {
    reel: Play,
    carousel: ImageIcon,
    youtube: Youtube,
    blog: FileText,
};

const platformLabels: Record<string, string> = {
    reel: "Reel",
    carousel: "Carousel",
    youtube: "Video",
    blog: "Article",
};

export default function ContentPage() {
    const content = getAllContent();

    return (
        <main className="bg-black min-h-screen pt-24">
            <Section heading="AI Content Studio" headingMuted="Insights & Tutorials" description="The latest insights, tutorials, and deep-dives on AI agents, automation, and software architecture.">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.map((item) => {
                            const Icon = platformIcons[item.type] || FileText;

                            return (
                                <a
                                    key={item.slug}
                                    href={item.externalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block p-6 rounded-3xl bg-zinc-950/20 border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden h-full flex flex-col"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                                                {platformLabels[item.type]}
                                            </span>
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                                <Icon size={18} strokeWidth={1.5} />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-zinc-200 transition-colors leading-snug">
                                            {item.title}
                                        </h3>
                                        
                                        {item.description && (
                                            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                                {item.description}
                                            </p>
                                        )}

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/5 text-zinc-400 border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
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
