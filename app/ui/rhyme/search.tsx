"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import TypeSelect from "./type-select";
import { useRef } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
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
    <div className="flex items-center gap-5 rounded-t-[1.5rem] border-b-2 border-gray-100 bg-white px-[3.3125rem] py-2">
      <div className="flex w-[23.0625rem] items-center gap-5 self-stretch">
        <MagnifyingGlassIcon className="h-6 w-6 fill-gray-400" />
        <input
          className="block w-full grow bg-transparent placeholder:italic focus:outline-none"
          placeholder={placeholder}
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={query}
          ref={inputRef}
        />
      </div>
      <TypeSelect searchParams={searchParams} />
    </div>
  );
}
