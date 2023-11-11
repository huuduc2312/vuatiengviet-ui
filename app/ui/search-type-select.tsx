"use client";

import clsx from "clsx";
import { useState } from "react";

export enum SearchType {
  VanXuoi = "van-xuoi",
  VanDao = "van-dao",
  NoiLai = "noi-lai",
}

export default function SearchTypeSelect() {
  const [searchType, setSearchType] = useState<SearchType>(SearchType.VanXuoi);

  return (
    <div className="flex w-full flex-col gap-4">
      <button
        onClick={() => {
          setSearchType(SearchType.VanXuoi);
        }}
        className={clsx(
          "w-full rounded-xl border border-slate-100 p-4 font-semibold shadow focus:outline-none",
          { ring: searchType === SearchType.VanXuoi },
        )}>
        Vần Xuôi
      </button>
      <button
        onClick={() => {
          setSearchType(SearchType.VanDao);
        }}
        className={clsx(
          "w-full rounded-xl border border-slate-100 p-4 font-semibold shadow focus:outline-none",
          { ring: searchType === SearchType.VanDao },
        )}>
        Vần Đảo
      </button>
      <button
        onClick={() => {
          setSearchType(SearchType.NoiLai);
        }}
        className={clsx(
          "w-full rounded-xl border border-slate-100 p-4 font-semibold shadow focus:outline-none",
          { ring: searchType === SearchType.NoiLai },
        )}>
        Nói lái
      </button>
    </div>
  );
}
