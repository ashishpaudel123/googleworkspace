import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNow = localFont({
  src: [
    {
      path: "../public/assets/fonts/helvetica-now-font-family/helveticanowtext-bold-demo.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/helvetica-now-font-family/helveticanowtext-bolditalic-demo.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/helvetica-now-font-family/helveticanowtext-black-demo.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/helvetica-now-font-family/helveticanowtext-blackitalic-demo.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-helvetica-now",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Google Workspace Clone",
  description: "Developed by Ashish Paudel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNow.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
