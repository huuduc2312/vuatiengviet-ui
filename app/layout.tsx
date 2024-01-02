import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./ui/navbar/navbar";
import MobileMenu from "./ui/navbar/mobile-menu";

const font = Nunito({
  weight: [],
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "Tìm vần | vần ba, vần đôi, vần đơn | Vựa Tiếng Việt",
  description:
    "Tìm vần | tìm từ, tìm từ có vần, tìm vần đôi, tìm vần ba, tìm vần online. Nâng cao nghệ thuật chơi chữ, viết rap, nhạc cùng công cụ làm thơ AI. Khám phá Vựa Tiếng Việt để tìm vần online dễ dàng hơn!",
  keywords: [
    "tìm vần",
    "vần đôi",
    "vần ba",
    "vần đảo",
    "vần rap",
    "vần âm",
    "âm vần",
    "tìm vần rap",
    "tìm vần đảo",
    "tìm vần đôi",
    "tìm vần ba",
    "tìm vần rap online",
    "tìm vần đảo online",
    "tìm vần online",
    "nói lái",
    "nói lái online",
    "viết rap",
    "viết nhạc",
    "viết nhạc AI",
    "làm thơ AI",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4305181017232136"
          crossOrigin="anonymous"
          id="adsbygoogle-init"
          strategy="afterInteractive"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NK9CVND59D" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NK9CVND59D');
          `}
        </Script>
      </head>
      <body className={`${font.className} antialiased`}>
        <div className="flex h-[100dvh] flex-col overflow-y-auto">
          <Navbar />
          <main className="h-full overflow-y-auto">{children}</main>
          <MobileMenu />
        </div>
      </body>
    </html>
  );
}
