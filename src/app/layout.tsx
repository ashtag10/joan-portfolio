import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  title: "Joan Brunel TAKAMTE KAMGA — Ingénieur Logiciel",
  description: "Portfolio de Joan Brunel Takamte Kamga, ingénieur logiciel spécialisé en systèmes embarqués, IoT et développement web full-stack. Basé à Douala, Cameroun.",
  openGraph: {
    title: "Joan Brunel TAKAMTE KAMGA — Ingénieur Logiciel",
    description: "Portfolio — Systèmes embarqués, IoT & Web Full-Stack",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-background text-text antialiased">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}