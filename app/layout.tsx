import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import favicon from "@/assets/images/favicon-32x32.png";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact form",
  description: "Frontend Mentor exercise",
  icons: favicon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-screen h-screen grid items-center justify-items-center ${karla.variable} antialiased bg-green-200`}
      >
        {children}
      </body>
    </html>
  );
}
