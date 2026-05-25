import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import { ConditionalFooter } from "@/components/ConditionalFooter";
import { LoadingScreen } from "@/components/LoadingScreen";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata: Metadata = {
  title: "iCreate",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable}`}>
      <body className="antialiased font-sans">
        <LoadingScreen />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}
