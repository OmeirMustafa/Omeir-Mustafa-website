
import { ServicesSection } from "@/components/home/services-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-20">
            <Section className="pb-0">
                <Container className="text-center">
                    <h1 className="text-4xl font-heading font-medium mb-6">Services</h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Comprehensive solutions tailored for high-growth businesses.
                    </p>
                </Container>
            </Section>
            <ServicesSection />
        </main>
    );
}
