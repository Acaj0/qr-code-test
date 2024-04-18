import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR-CODE GENERATOR",
  description: "Easy and fast QRcode generator developed by: Acaj ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <head>
        <link rel="icon" href="/qrcode-solid.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

