"use client";

import Table from "./ui/terms/table";
import Search from "./ui/search";
import { redirect, usePathname } from "next/navigation";
import { SearchType } from "./ui/search-type-select";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string; type?: string };
}) {
  const pathname = usePathname();
  const query = searchParams?.query;

  if (!searchParams?.type) {
    const params = new URLSearchParams(searchParams);
    params.set("type", SearchType.VanXuoi.toString());

    redirect(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="h-screen w-full p-12">
      <div className="grid h-full grid-rows-6 gap-6">
        {!query && (
          <div className="row-span-5 flex h-full w-full flex-col items-center justify-center p-6">
            <div className="flex w-full flex-col justify-start">
              <h1 className="py-4 text-3xl font-extrabold lg:text-6xl">
                Vựa Tiếng Việt
              </h1>
              <h2 className="text-lg">
                Công cụ{" "}
                <span className="text-accent font-bold">Trí Tuệ Nhân Tạo</span>{" "}
                tìm kiếm câu từ theo vần
              </h2>
            </div>
          </div>
        )}

        {query && (
          <>
            <div className="bg-accent row-span-2 flex flex-col items-start justify-center gap-6 rounded-3xl p-4 px-6 shadow-lg">
              <span className="block text-6xl font-bold normal-case text-white underline decoration-dotted">
                {query}
              </span>
              <span className="font-bold text-white">
                Chúng tôi tìm được{" "}
                <span className="text-xl underline decoration-dotted">200</span>{" "}
                kết quả cho bạn!
              </span>
            </div>
            <div className="row-span-3 w-full shadow-xl">
              <Table query={query} />
            </div>
          </>
        )}

        <div className="flex w-full flex-col">
          <Search placeholder={"Nhập bất kỳ câu từ nào..."} />
        </div>
      </div>
    </div>
  );
}
