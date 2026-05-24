"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactModal } from "@/components/contact-modal";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CaseStudySection } from "@/components/sections/case-study-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { ContactCTASection } from "@/components/sections/contact-cta-section";

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

      <HeroSection onContactClick={scrollToContact} />

      <main id="main-content" role="main" className="bg-black">
        <AboutSection />
        <SkillsSection />
        <CaseStudySection />
        <CredentialsSection />
        <PrinciplesSection />
        <ContactCTASection onContactClick={openContactModal} />
      </main>

      <Footer />

      <ContactModal isOpen={isContactOpen} onClose={closeContactModal} />
    </>
  );
}
