"use client";

import { SearchType } from "@/app/constants/search-type";
import clsx from "clsx";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";

export default function TypeSelect({
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
    <div className="flex w-[23rem] justify-between">
      <button
        className={clsx(
          "flex rounded-lg px-[1.25rem] py-[0.75rem] font-semibold text-gray-400 transition-all duration-300",
          {
            "bg-blue-100 text-blue-500": currentType == SearchType.VanXuoi,
            "hover:text-gray-800": currentType != SearchType.VanXuoi,
          },
        )}
        onClick={handleChangeType(SearchType.VanXuoi)}>
        Vần Xuôi
      </button>
      <button
        className={clsx(
          "flex rounded-lg px-[1.25rem] py-[0.75rem] font-semibold text-gray-400 transition-all duration-300",
          {
            "bg-blue-100 text-blue-500": currentType == SearchType.VanDao,
            "hover:text-gray-800": currentType != SearchType.VanDao,
          },
        )}
        onClick={handleChangeType(SearchType.VanDao)}>
        Vần Đảo
      </button>
      <button
        className={clsx(
          "flex rounded-lg px-[1.25rem] py-[0.75rem] font-semibold text-gray-400 transition-all duration-300",
          {
            "bg-blue-100 text-blue-500": currentType == SearchType.NoiLai,
            "hover:text-gray-800": currentType != SearchType.NoiLai,
          },
        )}
        onClick={handleChangeType(SearchType.NoiLai)}>
        Nói Lái
      </button>
    </div>
  );
}
