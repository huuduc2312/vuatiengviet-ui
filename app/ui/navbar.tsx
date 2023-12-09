import clsx from "clsx";
import { Baloo_2 } from "next/font/google";
import Link from "next/link";

const font = Baloo_2({ subsets: ["vietnamese"] });

export default function Navbar() {
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
            "flex w-[6.25rem] items-center justify-center self-stretch text-center font-semibold",
            { "border-b-4 border-blue-500 text-blue-500": true },
          )}>
          Tìm Từ
        </Link>
        <Link
          href={"/blogs"}
          className="flex w-[6.25rem] items-center justify-center self-stretch font-semibold text-gray-400 transition-all duration-300 hover:text-gray-700">
          Blog
        </Link>
        <Link
          href={"/grapt"}
          className="flex w-[6.25rem] items-center justify-center self-stretch font-semibold text-gray-400 transition-all duration-300 hover:text-gray-700">
          GraPT
        </Link>
      </div>
    </nav>
  );
}
