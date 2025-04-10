import type { Metadata } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import { laoMN, pingfang } from "@/fonts";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
