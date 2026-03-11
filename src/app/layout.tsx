import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.author.name} | ${siteConfig.author.role}`,
    template: `%s | ${siteConfig.title}`,
  },
  description:
    "Senior Software Architect with 20+ years of experience. Specializing in React, TypeScript, Node.js. Based in Vienna, Austria.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
  alternates: {
    languages: {
      de: `${siteConfig.url}/de/`,
      en: `${siteConfig.url}/en/`,
    },
  },
  openGraph: {
    title: `${siteConfig.author.name} | ${siteConfig.author.role}`,
    description:
      "Senior Software Architect with 20+ years of experience building mission-critical systems.",
    url: siteConfig.url,
    siteName: siteConfig.title,
    type: "website",
    images: [
      {
        url: "/opengraph-image/",
        width: 1200,
        height: 630,
        alt: `${siteConfig.author.name} — ${siteConfig.author.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.author.name} | ${siteConfig.author.role}`,
    description:
      "Senior Software Architect with 20+ years of experience building mission-critical systems.",
    images: ["/opengraph-image/"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Preconnect to Cloudflare Analytics to reduce DNS latency */}
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        {siteConfig.analytics.cfToken && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({
              token: siteConfig.analytics.cfToken,
            })}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
