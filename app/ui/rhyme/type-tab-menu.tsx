"use client";

import { SearchType } from "@/app/constants/search-type";
import clsx from "clsx";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";

export default function TypeTabMenu({
  searchParams,
}: {
  searchParams?: ReadonlyURLSearchParams;
}) {
  const currentType = searchParams?.get("type") || SearchType.VanXuoi;
  const { replace } = useRouter();
  const pathname = usePathname();

  function handleChangeType(type: SearchType) {
    if (type == currentType) return;

    const params = new URLSearchParams(searchParams);
    params.delete("page");
    params.set("type", type);

    return () => replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="hidden w-[23rem] justify-between md:flex">
      <div className="con-tooltip">
        <button
          className={clsx(
            "flex rounded-lg px-[1.25rem] py-[0.75rem] font-semibold transition-all duration-300",
            {
              "bg-blue-100 text-blue-500": currentType == SearchType.VanXuoi,
              "text-gray-400 hover:text-gray-800":
                currentType != SearchType.VanXuoi,
            },
          )}
          onClick={handleChangeType(SearchType.VanXuoi)}
        >
          Vần Xuôi
        </button>
        <span className="tooltip">Tìm vần đôi, vần ba, tư... VD: báo đời 	&#8594; bao lời </span>
      </div>
      <div className="con-tooltip">
        <button
          className={clsx(
            "flex rounded-lg px-[1.25rem] py-[0.75rem] font-semibold transition-all duration-300",
            {
              "bg-blue-100 text-blue-500": currentType == SearchType.VanDao,
              "text-gray-400 hover:text-gray-800":
                currentType != SearchType.VanDao,
            },
          )}
          onClick={handleChangeType(SearchType.VanDao)}
        >
          Vần Đảo
        </button>
        <span className="tooltip">Tìm vần đảo đôi, ba, tư... VD: báo đời 	&#8594; trời cao </span>
      </div>
      <div className="con-tooltip">
        <button
          className={clsx(
            "flex rounded-lg px-[1.25rem] py-[0.75rem] font-semibold transition-all duration-300",
            {
              "bg-blue-100 text-blue-500": currentType == SearchType.NoiLai,
              "text-gray-400 hover:text-gray-800":
                currentType != SearchType.NoiLai,
            },
          )}
          onClick={handleChangeType(SearchType.NoiLai)}
        >
          Nói Lái
        </button>
        <span className="tooltip">Tìm cách nói lái cho từ. VD : hai em cún &#8594; hun em cái</span>
      </div>
    </div>
  );
}