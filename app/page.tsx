import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CaseStudySection } from "@/components/sections/case-study-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { ClientExperienceSection } from "@/components/sections/client-experience-section";
import { ContactCTASection } from "@/components/sections/contact-cta-section";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <main id="main-content" role="main" className="bg-black">
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <CaseStudySection />
        <ProcessSection />
        <CredentialsSection />
        <PrinciplesSection />
        <ClientExperienceSection />
        <ContactCTASection />
      </main>

      <Footer />
    </>
  );
}
