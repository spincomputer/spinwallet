import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DynamicProvider } from '@/components/DynamicProvider';
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
  title: "SPIN Wallet",
  description: "A starter template for building a Dynamic wallet app for SPIN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DynamicProvider>
          {children}
        </DynamicProvider>
      </body>
    </html>
  );
}
