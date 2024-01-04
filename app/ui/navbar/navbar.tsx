"use client";

import { Baloo_2 } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import SocialMediaButtons from "./footer/SocialMediaButtons";

const font = Baloo_2({ subsets: ["vietnamese"] });

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-start gap-[4rem] border-b bg-white px-[1.5rem] py-2 md:px-[3.125rem] md:py-0">
      <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={39} height={26} />
        <Link
          href={"/"}
          className={`${font.className} text-2xl font-extrabold -tracking-wider`}>
          Vựa Tiếng Việt
        </Link>
      </div>
      <Menu />
      <SocialMediaButtons />
    </nav>
  );
}
