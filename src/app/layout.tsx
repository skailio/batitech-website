import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Batitech Construction | Maçonnerie Générale à Château-Thierry",
  description:
    "Batitech Construction — Entreprise de maçonnerie générale, neuf et rénovation à Brasles / Château-Thierry. Devis gratuit. Intervention dans un rayon de 90 km.",
  keywords: [
    "maçonnerie",
    "construction",
    "rénovation",
    "Château-Thierry",
    "Brasles",
    "maçon",
    "devis gratuit",
    "Batitech",
    "neuf",
    "rénovation maison",
  ],
  openGraph: {
    title: "Batitech Construction | Maçonnerie Générale à Château-Thierry",
    description:
      "Maçonnerie générale, neuf & rénovation à Brasles / Château-Thierry. Plus de 15 ans d'expérience. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
