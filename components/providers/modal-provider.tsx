"use client";

import React, { createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";

const ContactModal = dynamic(
    () => import("../contact-modal").then((mod) => mod.ContactModal),
    { ssr: false }
);

interface ModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            <ContactModal isOpen={isOpen} onClose={closeModal} />
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}
