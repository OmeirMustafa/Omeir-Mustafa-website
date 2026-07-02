import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { Metadata } from "next";
import { Sparkles, CheckCircle2, TrendingUp, Cpu, Workflow } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Newsletter | Omeir Mustafa",
    description: "Weekly insights on AI tools, automation workflows, and the strategies shaping the future of work.",
};

const benefits = [
    {
        title: "AI Tool Breakdowns",
        description: "In-depth reviews of the latest AI tools and whether they are actually worth your time.",
        icon: Cpu,
    },
    {
        title: "Automation Workflows",
        description: "Step-by-step guides to building systems that save you 10+ hours a week.",
        icon: Workflow,
    },
    {
        title: "Industry Insights",
        description: "Signal through the noise. What's actually changing in the world of AI and software.",
        icon: TrendingUp,
    },
];

export default function NewsletterPage() {
    return (
        <main className="bg-black min-h-screen pt-32 pb-24">
            <Container size="md">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Form & Copy */}
                    <div>
                        <div className="w-14 h-14 mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                            <Sparkles size={24} strokeWidth={1.5} />
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                            Stay Ahead <br />
                            <span className="text-zinc-500">of the Curve</span>
                        </h1>
                        
                        <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-md">
                            Join thousands of founders, engineers, and creators getting weekly insights on building with AI. No fluff, just practical systems.
                        </p>
                        
                        <div className="bg-zinc-950/50 p-6 md:p-8 rounded-3xl border border-white/10 mb-8">
                            <h3 className="text-sm font-semibold text-white mb-4">Join the community</h3>
                            <NewsletterForm variant="stacked" />
                            <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mt-4">
                                One email per week. Unsubscribe anytime.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800" />
                                ))}
                            </div>
                            <div className="text-xs font-mono text-zinc-500">
                                Join <span className="text-white font-semibold">10,000+</span> subscribers
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Benefits */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white mb-8">What you'll get every week:</h2>
                        
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                                    <benefit.icon size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                        
                        <div className="pt-8 mt-8 border-t border-white/5">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 size={24} className="text-emerald-500 flex-shrink-0" />
                                <p className="text-sm text-zinc-400 italic">
                                    "The only AI newsletter I actually read every week. Omeir cuts through the hype and shows exactly how to implement these tools."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
