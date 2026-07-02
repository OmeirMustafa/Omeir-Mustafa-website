"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
    return (
        <main className="bg-black min-h-screen flex items-center justify-center pt-24 pb-24">
            <Container size="sm" className="text-center">
                <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500">
                    <Search size={28} strokeWidth={1.5} />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6">
                    404
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-400 mb-10">
                    The requested page could not be found.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                        href="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        <Home size={16} />
                        Return Home
                    </Link>
                    <button 
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 bg-transparent text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 font-semibold rounded-full transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Go Back
                    </button>
                </div>
            </Container>
        </main>
    );
}
