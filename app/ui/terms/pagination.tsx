"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter } from "next/navigation";

export default function Pagination({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const pathname = usePathname();
  const { replace } = useRouter();

  function redirectToPage(newPage: number) {
    if (newPage < 1) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="grid grid-cols-3 items-center justify-stretch gap-2">
      {currentPage > 1 ? (
        <button
          className="flex aspect-square w-[2rem] items-center justify-center rounded-xl hover:border hover:shadow"
          onClick={() => {
            redirectToPage(currentPage - 1);
          }}>
          <ChevronLeftIcon />
        </button>
      ) : (
        <div></div>
      )}

      <div className="flex aspect-square w-[2rem] items-center justify-center rounded-xl border shadow">
        {currentPage}
      </div>

      <button
        className="flex aspect-square w-[2rem] items-center justify-center rounded-xl hover:border hover:shadow"
        onClick={() => redirectToPage(currentPage + 1)}>
        <ChevronRightIcon />
      </button>
    </div>
  );
}
