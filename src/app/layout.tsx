import { Suspense } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Archivo, Geist_Mono } from "next/font/google";
import { laoMN, pingfang } from "@/fonts";
import "./globals.css";

import Loading from "./loading";
import Footer from "@/components/Footer";

const archivo = Archivo({
  variable: "--font-rchivo-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "After Hours @ The Studio",
  description: "JK Presents After Hours & The Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${geistMono.variable} ${laoMN.variable} ${pingfang.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
