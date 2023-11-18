import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/ui/sidebar/sidebar";
import Hero from "./ui/hero";
import Image from "next/image";
import Script from "next/script";

const font = Raleway({
  weight: [],
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "Tìm vần rap, tìm vần, viết nhạc bằng AI | Vựa Tiếng Việt",
  description:
    "Tìm vần rap, đảo online; nâng nghệ thuật nói lái, viết rap, nhạc cùng công cụ làm thơ AI. Khám phá Vựa Tiếng Việt để tìm vần online dễ dàng hơn!",
  keywords: [
    "tìm vần rap",
    "tìm vần đảo",
    "tìm vần",
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
        <div className="flex min-h-screen justify-center p-4">
          <div className="flex flex-col items-center justify-start md:w-4/5 lg:w-3/5">
            <Image
              src="/logo-transparent.png"
              alt="Vựa Tiếng Việt"
              width={100}
              height={100}
            />
            <Hero />
            <div className="mt-[3rem] flex h-full w-full gap-4 rounded-lg border p-4 shadow">
              <Sidebar />
              <main className="w-full">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
