import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | H-Project",
    default: `Hítalo Page`,
  },
  description: "Portfólio do Hítalo Rodrigues",
  keywords: ["Hítalo", "Page"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} inter.variable antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
