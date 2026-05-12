import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joan Brunel TAKAMTE KAMGA — Ingénieur Logiciel",
  description:
    "Portfolio de Joan Brunel Takamte Kamga, ingénieur logiciel spécialisé en systèmes embarqués, IoT et développement web full-stack. Basé à Douala, Cameroun.",
  keywords: [
    "ingénieur logiciel",
    "développeur full-stack",
    "Douala",
    "Cameroun",
    "IoT",
    "systèmes embarqués",
    "Next.js",
    "Java Spring Boot",
    "Django",
  ],
  openGraph: {
    title: "Joan Brunel TAKAMTE KAMGA — Ingénieur Logiciel",
    description: "Portfolio d'ingénieur logiciel — Systèmes embarqués, IoT & Web",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="noise bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}