import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./ui/navbar/navbar";
import MobileMenu from "./ui/navbar/mobile-menu";
// import SocialMediaButtons from "./ui/navbar/footer/SocialMediaButtons";

const font = Nunito({
  weight: [],
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title:
    "Tìm Vần & Vần Đảo | Vần Ba, Đôi, Đơn | Vựa Tiếng Việt - Công Cụ Sáng Tạo Vần",
  description:
    "Khám phá công cụ Tìm Vần & Vần Đảo trực tuyến tại Vựa Tiếng Việt! Tìm Vần với vần đôi, vần ba, vần đơn một cách dễ dàng. Tối ưu hóa sáng tạo trong viết rap, làm thơ, và nhạc với AI. Hỗ trợ tìm vần online, nâng cao nghệ thuật chơi chữ và biến ngôn từ thành nghệ thuật.",
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body className={`${font.className} antialiased`}>
        <div className="flex h-[100dvh] flex-col overflow-y-auto">
          <Navbar />
          {/* <SocialMediaButtons /> */}
          <main className="h-full overflow-y-auto">{children}</main>
          <MobileMenu />
          {/* <footer>
            <SocialMediaButtons />
          </footer> */}
        </div>
      </body>
    </html>
  );
}
