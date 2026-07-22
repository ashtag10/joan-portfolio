import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  title: 'Joan Brunel TAKAMTE KAMGA (JoanHack) | Software Engineer & Consultant',
  description: 'Portfolio de Joan Brunel TAKAMTE KAMGA (JoanHack), Ingénieur Logiciel spécialisé en Fullstack (Next.js, Spring Boot), IoT et Systèmes Intelligents.',
  keywords: ['Joan Brunel TAKAMTE KAMGA', 'JoanHack', 'Développeur Fullstack', 'Ingénieur Logiciel Douala', 'Next.js', 'Spring Boot'],
  authors: [{ name: 'Joan Brunel TAKAMTE KAMGA', url: 'https://joanhack.dev' }],
  openGraph: {
    title: 'Joan Brunel TAKAMTE KAMGA (JoanHack) | Software Engineer',
    description: 'Portfolio professionnel - Systèmes embarqués, IoT & Web Full-Stack, Marketing et consulting.',
    url: 'https://joanhack.dev',
    siteName: 'JoanHack',
    type: 'website',
  },
};
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Joan Brunel TAKAMTE KAMGA',
    alternateName: 'JoanHack',
    url: 'https://joanhack.dev',
    jobTitle: 'Software Engineer',
    sameAs: [
      'https://www.linkedin.com/in/joan-takamte',
      'https://github.com/ashtag10',
      'https://linktr.ee/joanhack',
    ],
  };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Injection du script JSON-LD pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text antialiased">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}