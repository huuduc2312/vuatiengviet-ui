import type { Metadata } from "next";
import {
  Raleway,
} from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/ui/sidebar/sidebar";
import Hero from "./ui/hero";
import Image from "next/image";

const font = Raleway({
  weight: [],
  subsets: ["vietnamese"],
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
        <div className="flex min-h-screen justify-center p-4">
          <div className="flex flex-col items-center justify-center lg:w-3/5">
            <Image
              src="/logo-transparent.png"
              alt="Vựa Tiếng Việt"
              width={100}
              height={100}
            />
            <Hero />
            <div className="mt-[3rem] flex w-full grow gap-4 rounded-lg border p-4 shadow">
              <Sidebar />
              <main className="w-full">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
