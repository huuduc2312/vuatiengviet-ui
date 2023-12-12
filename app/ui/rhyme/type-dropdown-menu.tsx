"use client";

import { SearchType } from "@/app/constants/search-type";
import { Listbox, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import { Fragment } from "react";

const typeLabel: { [key in SearchType]: string } = {
  [SearchType.VanXuoi]: "Vần Xuôi",
  [SearchType.VanDao]: "Vần Đảo",
  [SearchType.NoiLai]: "Nói Lái",
};

export default function TypeDropdownMenu({
  searchParams,
}: {
  searchParams?: ReadonlyURLSearchParams;
}) {
  const currentType: SearchType =
    (searchParams?.get("type") as SearchType) || SearchType.VanXuoi;
  const { replace } = useRouter();
  const pathname = usePathname();

  function handleChangeType(type: SearchType) {
    if (type == currentType) return;

    const params = new URLSearchParams(searchParams);
    params.delete("page");
    params.set("type", type);

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Listbox value={currentType} onChange={handleChangeType}>
      <div className="relative w-[7.5rem] text-left md:w-0">
        <Listbox.Button className="flex w-full justify-between whitespace-nowrap rounded-lg bg-blue-100 px-[0.75rem] py-[0.5rem] font-semibold text-blue-500 md:hidden">
          {typeLabel[currentType]}
          <ChevronUpDownIcon
            className="h-5 w-5 text-blue-500"
            aria-hidden="true"
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-1 grid w-full overflow-auto rounded-lg border bg-white text-gray-600">
            {currentType != SearchType.VanXuoi && (
              <Listbox.Option
                key={SearchType.VanXuoi}
                value={SearchType.VanXuoi}
                className="px-[0.75rem] py-[0.5rem]">
                {typeLabel[SearchType.VanXuoi]}
              </Listbox.Option>
            )}

            {currentType != SearchType.VanDao && (
              <Listbox.Option
                key={SearchType.VanDao}
                value={SearchType.VanDao}
                className="px-[0.75rem] py-[0.5rem]">
                {typeLabel[SearchType.VanDao]}
              </Listbox.Option>
            )}

            {currentType != SearchType.NoiLai && (
              <Listbox.Option
                key={SearchType.NoiLai}
                value={SearchType.NoiLai}
                className="px-[0.75rem] py-[0.5rem]">
                {typeLabel[SearchType.NoiLai]}
              </Listbox.Option>
            )}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
