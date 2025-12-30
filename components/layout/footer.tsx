import { Container } from "@/components/ui/container";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/omeirmustafa",
        ariaLabel: "Visit Omeir Mustafa on LinkedIn",
    },
    {
        name: "GitHub",
        href: "https://github.com/omeirmustafa",
        ariaLabel: "Visit Omeir Mustafa on GitHub",
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            role="contentinfo"
            aria-label="Site footer"
            className="border-t border-white/10 bg-background-subtle py-12 md:py-16 relative overflow-hidden"
        >
            {/* Subtle top glow for border emphasis */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <Container>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <span className="text-2xl font-heading font-bold text-foreground tracking-tight">
                            Omeir Mustafa
                        </span>
                        <p className="text-sm text-foreground-muted font-medium tracking-wide border-l-2 border-accent/50 pl-3">
                            Premium Web Design & Development
                        </p>
                    </div>

                    {/* Social Links */}
                    <nav aria-label="Social media links">
                        <ul className="flex items-center gap-8">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                        aria-label={link.ariaLabel}
                                        className="text-sm font-medium text-foreground-muted hover:text-accent transition-all duration-300 hover:tracking-wider uppercase"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Copyright + Tech Stack */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
                    <p className="text-xs text-foreground-subtle/70">
                        © {currentYear} Omeir Mustafa. All rights reserved.
                    </p>
                    {/* Quiet Tech Disclosure */}
                    <p className="text-[10px] text-foreground-subtle/40 uppercase tracking-[0.2em] font-medium">
                        Crafted with Next.js • Tailwind • Vercel
                    </p>
                </div>
            </Container>
        </footer>
    );
}
