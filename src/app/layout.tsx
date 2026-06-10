import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.joinstoragehunters.com"),
  title: "Storage Hunters | Self-Storage Acquisition Strategy",
  description:
    "Storage Hunters helps investors identify self-storage opportunities, evaluate markets, underwrite deals, and build smarter acquisition strategies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.joinstoragehunters.com",
    siteName: "Storage Hunters",
    title: "Storage Hunters | Self-Storage Acquisition Strategy",
    description:
      "Helping investors identify opportunities, evaluate markets, underwrite deals, and build smarter self-storage acquisition strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storage Hunters | Self-Storage Acquisition Strategy",
    description:
      "Helping investors identify opportunities, evaluate markets, underwrite deals, and build smarter self-storage acquisition strategies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
