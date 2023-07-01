"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Show Case",
  description: "Show  Car Case Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
