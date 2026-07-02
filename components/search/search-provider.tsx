"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { SearchDialog } from "@/components/ui/search-dialog";

interface SearchContextType {
    isOpen: boolean;
    openSearch: () => void;
    closeSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openSearch = () => setIsOpen(true);
    const closeSearch = () => setIsOpen(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <SearchContext.Provider value={{ isOpen, openSearch, closeSearch }}>
            {children}
            <SearchDialog isOpen={isOpen} onClose={closeSearch} />
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
}
