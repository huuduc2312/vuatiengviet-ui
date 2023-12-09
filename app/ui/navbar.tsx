"use client";

import clsx from "clsx";
import { Baloo_2 } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const font = Baloo_2({ subsets: ["vietnamese"] });

export default function Navbar() {
  const path = usePathname();
  const isTimTu = path.startsWith("/tim-tu");
  const isBlogs = path.startsWith("/blogs");
  const isGraPT = path.startsWith("/grapt");

  return (
    <nav className="fixed top-0 flex h-16 w-full items-center gap-[4rem] border-b bg-white px-[3.125rem]">
      <Link
        href={"/tim-tu"}
        className={`${font.className} text-2xl font-extrabold -tracking-wider`}>
        Vựa Tiếng Việt
      </Link>
      <div className="flex items-center justify-stretch gap-[1.5rem] self-stretch">
        <Link
          href={"/tim-tu"}
          className={clsx(
            "flex w-[6.25rem] items-center justify-center self-stretch text-center font-semibold transition-all duration-300",
            {
              "border-b-4 border-blue-500 text-blue-500": isTimTu,
              "text-gray-400": !isTimTu,
            },
          )}>
          Tìm Từ
        </Link>
        <Link
          href={"/blogs"}
          className={clsx(
            "flex w-[6.25rem] items-center justify-center self-stretch text-center font-semibold transition-all duration-300",
            {
              "border-b-4 border-blue-500 text-blue-500": isBlogs,
              "text-gray-400": !isBlogs,
            },
          )}>
          {" "}
          Blog
        </Link>
        <Link
          href={"/grapt"}
          className={clsx(
            "flex w-[6.25rem] items-center justify-center self-stretch text-center font-semibold transition-all duration-300",
            {
              "border-b-4 border-blue-500 text-blue-500": isGraPT,
              "text-gray-400": !isGraPT,
            },
          )}>
          {" "}
          GraPT
        </Link>
      </div>
    </nav>
  );
}
