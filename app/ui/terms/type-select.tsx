"use client";

import { SearchType } from "@/app/constants/search-type";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

export default function TypeSelect({
  searchParams,
}: {
  searchParams?: { type?: SearchType };
}) {
  const currentType = searchParams?.type || SearchType.VanXuoi;
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
    <div className="grid w-full grid-flow-col justify-stretch gap-2 rounded-lg border p-1 shadow">
      <button
        className={clsx("rounded-md p-1", {
          "bg-blue-strong text-white": currentType == SearchType.VanXuoi,
        })}
        onClick={handleChangeType(SearchType.VanXuoi)}>
        Vần Xuôi
      </button>
      <button
        className={clsx("rounded-md p-1", {
          "bg-blue-strong text-white": currentType == SearchType.VanDao,
        })}
        onClick={handleChangeType(SearchType.VanDao)}>
        Vần Đảo
      </button>
      <button
        className={clsx("rounded-md p-1", {
          "bg-blue-strong text-white": currentType == SearchType.NoiLai,
        })}
        onClick={handleChangeType(SearchType.NoiLai)}>
        Nói Lái
      </button>
    </div>
  );
}
