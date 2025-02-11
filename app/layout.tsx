import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Love_Light } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["400", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const loveLight = Love_Light({
  weight: "400",
  variable: "--love-light",
  subsets: [],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valentinstag",
  description: "Valentinstag Zettelaktion Display",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${loveLight.className} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
