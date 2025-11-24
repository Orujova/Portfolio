import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Narmin Orujova - Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, TypeScript, and AI solutions. Portfolio showcasing web development projects and experience.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "AI Developer", "Narmin Orujova"],
  authors: [{ name: "Narmin Orujova" }],
  openGraph: {
    title: "Narmin Orujova - Full Stack Developer",
    description: "Full Stack Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}