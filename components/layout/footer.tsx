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
            className="border-t border-border bg-background-subtle py-12 md:py-16"
        >
            <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
                {/* Brand */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-xl font-heading font-semibold text-foreground">
                        Omeir Mustafa
                    </span>
                    <p className="text-sm text-foreground-muted">
                        Premium Web Design & Development
                    </p>
                </div>

                {/* Social Links */}
                <nav aria-label="Social media links">
                    <ul className="flex gap-6 text-sm text-foreground-muted">
                        {socialLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                    aria-label={link.ariaLabel}
                                    className="hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Copyright */}
                <p className="text-xs text-foreground-subtle">
                    © {currentYear} Omeir Mustafa. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}
