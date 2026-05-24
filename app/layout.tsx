import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/ui/cursor";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Site configuration - ELITE POSITIONING
const siteConfig = {
  name: "Omeir Mustafa",
  title: "Omeir Mustafa | Senior AI Engineer & Product Architect",
  description: "I design and engineer production-grade AI applications and high-performance scalable systems. Focused on autonomous agents, deep systems architecture, and luxury web experiences.",
  url: "https://omeir-mustafa.vercel.app/",
  email: "omeirmustafa.work@gmail.com",
  keywords: [
    "AI Engineer",
    "Product Architect",
    "Full-Stack Engineer",
    "Autonomous Agents developer",
    "Systems Architect",
    "Next.js Developer",
    "SaaS Engineer",
  ],
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
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
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@omeirmustafa",
  },
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Omeir Mustafa",
    "url": "https://omeir-mustafa.vercel.app/",
    "email": "omeirmustafa.work@gmail.com",
    "jobTitle": "Senior AI Engineer & Product Architect",
    "knowsAbout": [
      "Artificial Intelligence",
      "Software Architecture",
      "Full-Stack Web Development",
      "Systems Engineering",
      "Intelligent Agents"
    ],
    "sameAs": [
      "https://github.com/OmeirMustafa",
      "https://linkedin.com/in/omeirmustafa"
    ]
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
