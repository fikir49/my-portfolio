import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fikir Wendimnew Kassa | Information Systems Student",
  description: "Portfolio of Fikir Wendimnew Kassa, Information Systems student at Bahir Dar University specializing in System Architecture, Data Integrity, and Decentralized Mobile Development.",
  keywords: ["Information Systems", "System Architecture", "Data Integrity", "Decentralized Mobile Development", "Bahir Dar University", "C#", ".NET", "Flutter"],
  openGraph: {
    title: "Fikir Wendimnew Kassa | Information Systems Student",
    description: "Showcasing projects in secure system design and mobile development.",
    type: "website",
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
