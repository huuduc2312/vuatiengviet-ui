"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter } from "next/navigation";

export default function Pagination({
  searchParams,
  stop,
}: {
  searchParams?: { page?: string };
  stop: boolean;
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
    <div className="flex w-full items-center justify-center border-t py-4">
      <div className="grid grid-cols-3 items-center justify-stretch gap-2">
        {currentPage > 1 ? (
          <button
            className="flex h-[2rem] w-[3rem] items-center justify-center rounded-xl border shadow bg-blue-500/10"
            onClick={() => {
              redirectToPage(currentPage - 1);
            }}>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        ) : (
          <div />
        )}

        <div className="flex h-[2rem] w-[3rem] items-center justify-center rounded-xl border shadow bg-blue-500/10">
          {currentPage}
        </div>

        {!stop && (
          <button
            className="flex h-[2rem] w-[3rem] items-center justify-center rounded-xl border shadow bg-blue-500/10"
            onClick={() => redirectToPage(currentPage + 1)}>
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}
