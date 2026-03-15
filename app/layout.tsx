import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adeniyi Divine — Software Engineer",
  description:
    "Portfolio of Adeniyi Divine, a Software Engineer building high-scale web applications with React, Next.js, and TypeScript.",
  keywords: ["Software Engineer", "Next.js", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "Adeniyi Divine" }],
  openGraph: {
    title: "Adeniyi Divine — Software Engineer",
    description: "Building high-scale web applications with React, Next.js, and TypeScript.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dex_divine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-neutral-950 text-neutral-100`}>
        {children}
      </body>
    </html>
  );
}
