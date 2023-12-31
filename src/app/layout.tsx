import React from "react";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Merriweather } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "../context/ThemeContext";
const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  metadataBase: new URL("https://learnpara.vercel.app/"),
  title: "Learn Para",
  description:
    "Discover Learn Para, the AI-powered platform for seamless learning. Generate personalized courses, explore tree structure formats, and access pre-made learning notes for quick mastery. Join us and unlock efficient, enjoyable learning. Let's learn together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="Rf1xiYHF5FQMhnksp5qPo-lnwlNnOk80lfAj0-U2GrY" />

      </head>
      <body className={inter.className}>

        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
