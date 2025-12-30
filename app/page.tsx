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
import { ClientExperienceSection } from "@/components/sections/client-experience-section";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Handler for Nav and Hero: Scrolls to the bottom Contact Section
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact-cta");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handler for Contact CTA Section: Opens the Smart Modal
  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  return (
    <>
      <Navbar onContactClick={scrollToContact} />

      {/* Semantic Structure: Header (Hero) -> Main (Content) */}
      <HeroSection onContactClick={scrollToContact} />

      {/* Trust Strip - Above Fold */}
      <div className="border-b border-border bg-background-subtle/50 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-foreground-muted font-medium tracking-wide">
            Designed for service businesses where trust determines conversion — legal, financial, healthcare, and professional services.
          </p>
        </div>
      </div>

      <main id="main-content" role="main" className="bg-background">
        <AboutSection />
        <ServicesSection />
        <CaseStudySection />
        <ClientExperienceSection />
        <ProcessSection />
        <ContactCTASection onContactClick={openContactModal} />
      </main>

      <Footer />

      <ContactModal isOpen={isContactOpen} onClose={closeContactModal} />
    </>
  );
}
