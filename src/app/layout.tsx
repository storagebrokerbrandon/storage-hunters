import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
