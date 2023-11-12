"use client";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <div></div>
      )}

      <div className="flex aspect-square w-[2rem] flex-wrap items-center justify-center rounded-xl border text-center shadow">
        {currentPage}
      </div>

      <button
        className="flex aspect-square w-[2rem] items-center justify-center rounded-xl hover:border hover:shadow"
        onClick={() => redirectToPage(currentPage + 1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
