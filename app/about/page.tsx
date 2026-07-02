import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { ClientExperienceSection } from "@/components/sections/client-experience-section";
import { ContactCTASection } from "@/components/sections/contact-cta-section";

export const metadata: Metadata = {
    title: "About Omeir Mustafa | AI Architect & Educator",
    description: "I build production-grade AI systems and teach others how to leverage automation for the future of work.",
};

export default function AboutPage() {
    return (
        <main className="bg-black min-h-screen pt-24">
            <Section heading="About Me" headingMuted="The Architect" description="Building production-grade AI systems and teaching others how to leverage automation for the future of work.">
                <Container>
                    <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start mb-24">
                        <div className="md:col-span-7 space-y-6 text-lg text-zinc-400 leading-relaxed">
                            <p>
                                I am Omeir Mustafa, a product engineer and systems architect based in Dhaka. I operate at the intersection of complex backends and refined user experiences, building applications that validate high-trust demands, solve hard technical bottlenecks, and accelerate startup velocity.
                            </p>
                            <p>
                                My journey in tech hasn't just been about writing code—it's been about building systems that scale. As AI has rapidly evolved, my focus shifted to orchestrating LLMs, creating RAG pipelines, and developing agentic frameworks that deliver deterministic outcomes with sub-second latency.
                            </p>
                            <p>
                                Most developer portfolios focus on listings of technologies. I focus on execution. I collaborate with early-stage founders and high-performance teams to design and code production-grade applications that scale seamlessly and feel incredibly responsive.
                            </p>
                            <p>
                                Beyond building, I am deeply passionate about education. I actively share insights, workflows, and tutorials on AI automation to help developers and creators navigate the future of work. The systems we build today will define the next decade of human productivity.
                            </p>
                        </div>
                        
                        <div className="md:col-span-5">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5">
                                <Image
                                    src="/omeir-profile.jpg"
                                    alt="Omeir Mustafa"
                                    fill
                                    className="object-cover grayscale brightness-95"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 w-full p-8">
                                    <h2 className="text-xl font-bold text-white mb-1">Omeir Mustafa</h2>
                                    <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-4">Product Architect</p>
                                    <div className="flex gap-4">
                                        <a href="https://linkedin.com/in/omeirmustafa" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white uppercase tracking-wider hover:text-zinc-300 flex items-center gap-1">
                                            LinkedIn <ArrowUpRight size={12} />
                                        </a>
                                        <a href="https://x.com/omeirmustafa" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white uppercase tracking-wider hover:text-zinc-300 flex items-center gap-1">
                                            Twitter <ArrowUpRight size={12} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Reusing existing sections for the rest of the About page */}
            <ServicesSection />
            <SkillsSection />
            <PrinciplesSection />
            <CredentialsSection />
            <ClientExperienceSection />
            <ContactCTASection />
        </main>
    );
}
