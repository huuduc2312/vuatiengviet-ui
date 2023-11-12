import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/ui/sidebar/sidebar";

const font = Inter({
  weight: ["400", "700", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Tìm vần như ý | Vua Tiếng Việt",
  description: "Công cụ tìm vần dựa trên Trí tuệ nhân tạo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${font.className} antialiased`}>
        <div className="flex">
          <Sidebar />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
