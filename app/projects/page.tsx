import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllProjects } from "@/lib/content";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, LayoutGrid } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Projects | Omeir Mustafa",
    description: "Case studies and projects showcasing AI integrations, systems architecture, and modern web development.",
};

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <main className="bg-black min-h-screen pt-24">
            <Section heading="Selected Work" headingMuted="Case Studies" description="A showcase of AI integrations, systems architecture, and modern web applications built for production.">
                <Container>
                    <div className="space-y-12 md:space-y-24">
                        {projects.map((project, index) => (
                            <div 
                                key={project.slug} 
                                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
                            >
                                {/* Image / Visual Side */}
                                <div className="w-full md:w-1/2">
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-950 border border-white/5 group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none z-10" />
                                        
                                        {/* Abstract geometric fallback if no image */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
                                            <LayoutGrid size={64} className="text-white/5 group-hover:scale-110 transition-transform duration-700" />
                                        </div>

                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{project.category}</span>
                                        {project.featured && (
                                            <Badge variant="outline" className="border-white/20 text-white">Featured</Badge>
                                        )}
                                    </div>
                                    
                                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                        {project.name}
                                    </h2>
                                    
                                    <p className="text-lg text-zinc-400 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Stats / Context */}
                                    {(project.context || project.impact) && (
                                        <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                                            {project.context && (
                                                <div>
                                                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Context</span>
                                                    <span className="text-sm text-zinc-300 font-medium">{project.context}</span>
                                                </div>
                                            )}
                                            {project.impact && (
                                                <div>
                                                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Impact</span>
                                                    <span className="text-sm text-white font-semibold">{project.impact}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.technologies.map(tech => (
                                            <Badge key={tech} variant="default">{tech}</Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-6">
                                        {project.liveUrl && (
                                            <a 
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 h-10 px-5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                                            >
                                                View Live <ArrowUpRight size={16} />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a 
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 h-10 px-5 border border-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/5 transition-colors"
                                            >
                                                <Github size={16} /> Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
