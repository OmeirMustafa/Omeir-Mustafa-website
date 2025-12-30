import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Site configuration - GOD-TIER POSITIONING
const siteConfig = {
  name: "Omeir Mustafa",
  title: "Omeir Mustafa — Strategic Web Design for High-Trust Businesses", // Updated Title
  description: "Custom websites designed to build trust, clarify value, and convert serious clients. Strategic UX and modern engineering for service-based businesses.", // Updated Description
  url: "https://omeir-mustafa.vercel.app/",
  email: "omeirmustafa.work@gmail.com",
  keywords: [
    "Web Designer",
    "Web Developer",
    "High-Trust Web Design",
    "Conversion Strategy",
    "Service Business Website",
  ],
};

export const metadata: Metadata = {
  // Basic
  title: siteConfig.title, // Direct title as requested
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,

  // Canonical
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    title: "Omeir Mustafa — Premium Web Design & Development",
    description: "Custom-built, high-performance websites designed for clarity, conversion, and scale.",
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },

  // Twitter (Kept for completeness, though explicitly requested OG/HTML mainly)
  twitter: {
    card: "summary_large_image",
    title: "Omeir Mustafa — Premium Web Design & Development",
    description: "Custom-built, high-performance websites designed for clarity, conversion, and scale.",
    images: ["/og-image.png"],
    creator: "@omeirmustafa",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Manifest
  manifest: "/site.webmanifest",
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: "#02040a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Omeir Mustafa",
    "url": "https://omeir-mustafa.vercel.app/",
    "email": "omeirmustafa.work@gmail.com",
    "jobTitle": "Web Designer & Developer",
    "sameAs": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-sans bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
