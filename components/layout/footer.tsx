import { Container } from "@/components/ui/container";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-12 md:py-16">
            <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-xl font-heading font-medium">Omeir Mustafa</span>
                    <p className="text-sm text-muted">Business Development & CRM Systems Specialist</p>
                </div>

                <div className="flex gap-6 text-sm text-muted">
                    <Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Email</Link>
                </div>

                <div className="text-xs text-muted">
                    © {new Date().getFullYear()} Omeir Mustafa. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
