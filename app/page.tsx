"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactModal } from "@/components/contact-modal";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { CaseStudySection } from "@/components/sections/case-study-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ContactCTASection } from "@/components/sections/contact-cta-section";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <Navbar onContactClick={openContact} />

      <main id="main-content" role="main" className="min-h-screen bg-background">
        <HeroSection onContactClick={openContact} />
        <AboutSection />
        <ServicesSection />
        <CaseStudySection />
        <ProcessSection />
        <ContactCTASection onContactClick={openContact} />
      </main>

      <Footer />

      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </>
  );
}
