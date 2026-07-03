"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Bot, Workflow, FileText, LayoutTemplate, Play, ArrowUpRight } from "lucide-react";
import { searchAll } from "@/lib/content";
import type { SearchResult } from "@/types";
import { useRouter } from "next/navigation";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { cn } from "@/lib/utils";

interface SearchDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const typeIcons: Record<string, React.ElementType> = {
    tool: Bot,
    workflow: Workflow,
    resource: LayoutTemplate,
    content: Play,
    page: FileText,
};

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useClickOutside(dialogRef, onClose);
    useScrollLock(isOpen);
    useFocusTrap<HTMLDivElement>(isOpen);

    useEffect(() => {
        if (isOpen) {
            setQuery("");
            setResults([]);
            setSelectedIndex(-1);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
            }
            if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
            }
            if (e.key === "Enter" && selectedIndex >= 0 && selectedIndex < results.length) {
                e.preventDefault();
                handleNavigate(results[selectedIndex].url);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose, results, selectedIndex]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (query.trim().length > 1) {
                setResults(searchAll(query));
            } else {
                setResults([]);
            }
        }, 300); // debounce

        return () => clearTimeout(timeout);
    }, [query]);

    const handleNavigate = (url: string) => {
        router.push(url);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-background/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Dialog Content */}
                    <motion.div
                        ref={dialogRef}
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="search-dialog-title"
                        className="relative w-full max-w-2xl bg-muted/80 backdrop-blur-xl border border-border-hover rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
                    >
                        <h2 id="search-dialog-title" className="sr-only">Search content</h2>
                        {/* Search Input Header */}
                        <div className="flex items-center px-4 border-b border-border-hover h-16 relative">
                            <Search size={20} className="text-muted-foreground mr-3 flex-shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setSelectedIndex(-1);
                                }}
                                placeholder="Search tools, workflows, content..."
                                className="flex-1 bg-transparent border-none text-white placeholder:text-muted-foreground focus:outline-none focus:ring-0 text-lg"
                                autoComplete="off"
                                aria-expanded={results.length > 0}
                                aria-controls="search-results-list"
                                aria-activedescendant={selectedIndex >= 0 ? `search-result-${selectedIndex}` : undefined}
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery("")}
                                    className="p-2 text-muted-foreground hover:text-white transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        {/* Search Results */}
                        <div className="overflow-y-auto p-2 flex-1">
                            {query.trim().length > 1 ? (
                                results.length > 0 ? (
                                    <div id="search-results-list" role="listbox" className="space-y-1">
                                        {results.map((result, idx) => {
                                            const Icon = typeIcons[result.type] || FileText;
                                            const isSelected = selectedIndex === idx;
                                            return (
                                                <button
                                                    key={`${result.url}-${idx}`}
                                                    id={`search-result-${idx}`}
                                                    role="option"
                                                    aria-selected={isSelected}
                                                    onClick={() => handleNavigate(result.url)}
                                                    onMouseMove={() => setSelectedIndex(idx)}
                                                    className={cn(
                                                        "w-full flex items-center gap-4 p-3 rounded-xl transition-colors text-left group outline-none",
                                                        isSelected ? "bg-white/10" : "hover:bg-white/5"
                                                    )}
                                                >
                                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-foreground-muted group-hover:text-white group-hover:bg-white/10 transition-colors flex-shrink-0">
                                                        <Icon size={18} />
                                                    </div>
                                                    <div className="flex-1 overflow-hidden">
                                                        <h4 className="text-sm font-semibold text-white mb-0.5 truncate">
                                                            {result.title}
                                                        </h4>
                                                        <p className="text-xs text-foreground-muted truncate">
                                                            {result.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-2 py-1 bg-white/5 rounded">
                                                            {result.type}
                                                        </span>
                                                        <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="py-14 text-center">
                                        <Search size={32} className="mx-auto text-zinc-700 mb-4" />
                                        <p className="text-sm text-foreground-muted">No results found for "{query}"</p>
                                    </div>
                                )
                            ) : (
                                <div className="py-10 text-center">
                                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                                        <span>Start typing to search</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Footer */}
                        <div className="h-10 border-t border-border flex items-center justify-between px-4 bg-muted">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5 rounded border border-border-hover bg-white/5">ESC</span>
                                <span className="text-xs text-zinc-600 font-mono">to close</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5 rounded border border-border-hover bg-white/5">⏎</span>
                                <span className="text-xs text-zinc-600 font-mono">to select</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
