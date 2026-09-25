import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.scss";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jérémie Garod — Développeur web",
  description:
    "Développeur web indépendant. Sites, interfaces et expériences numériques sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}