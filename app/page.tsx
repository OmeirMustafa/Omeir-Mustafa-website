import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactCTASection } from "@/components/sections/contact-cta-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { FeaturedContentSection } from "@/components/sections/featured-content";
import { ToolsPreviewSection } from "@/components/sections/tools-preview";
import { WorkflowsPreviewSection } from "@/components/sections/workflows-preview";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <main id="main-content" role="main" className="bg-black">
        <TrustBar />
        <FeaturedContentSection />
        <ToolsPreviewSection />
        <WorkflowsPreviewSection />
        <NewsletterSection />
        <AboutSection />
        <ContactCTASection />
      </main>

      <Footer />
    </>
  );
}
