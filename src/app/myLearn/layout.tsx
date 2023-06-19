import React from "react";

import { Inter, Merriweather } from "next/font/google";
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
    <div> 
      <div className="bg-yellow-400 w-full flex justify-center">Dev by Vartik Anand</div>
      {children}</div>
  );
}
