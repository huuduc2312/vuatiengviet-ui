"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import TypeTabMenu from "./type-tab-menu";
import { useRef } from "react";
import TypeDropdownMenu from "./type-dropdown-menu";

export default function Search({
  placeholder,
}: {
  placeholder: { desktop: string; mobile: string };
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const query = searchParams.get("query")?.toString();

  const inputRef = useRef<any>(null);

  if (!query && inputRef.current) {
    inputRef.current.value = "";
  }

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    // reset pagination
    params.delete("page");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex rounded-t-[1.5rem] border-b-2 border-gray-100 bg-white px-[1.3125rem] py-[0.5rem] md:gap-5 md:px-[3.3125rem] md:py-2">
      <div className="flex items-center gap-5 self-stretch overflow-hidden md:w-[23.0625rem]">
        <MagnifyingGlassIcon className="h-6 w-6 fill-gray-400" />
        <input
          className="hidden w-full grow bg-transparent placeholder:italic focus:outline-none md:block"
          placeholder={placeholder.desktop}
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={query}
          ref={inputRef}
        />

        <input
          className="block w-full grow bg-transparent placeholder:italic focus:outline-none md:hidden"
          placeholder={placeholder.mobile}
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={query}
          ref={inputRef}
        />
      </div>
      <TypeTabMenu searchParams={searchParams} />
      <TypeDropdownMenu searchParams={searchParams} />
    </div>
  );
}
