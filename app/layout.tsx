import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-serif" });
  
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portifolio Flávio Gimenes",
  description: "Portifólio pessoal de Flávio Gimenes. Explore meus projetos, habilidades e experiências profissionais.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${fraunces.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}
