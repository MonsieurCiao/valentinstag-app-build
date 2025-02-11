import type { Metadata } from "next";
import { Inter, Love_Light, Allura } from "next/font/google";
import "./globals.css";

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
const allura = Allura({
  weight: "400",
  variable: "--allura",
  subsets: [],
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
      <body
        className={`${allura.className} ${loveLight.className} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
