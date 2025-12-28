import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
