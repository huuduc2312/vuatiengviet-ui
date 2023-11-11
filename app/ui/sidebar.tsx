"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Sidebar() {
  const searchParams = useSearchParams();
  const searchType = useSearchParams().get("type") || "";
  const pathname = usePathname();
  const router = useRouter();

  function redirectWithSearchType(type: string) {
    const params = new URLSearchParams(searchParams);
    params.set("type", type);

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <aside className="flex h-screen flex-col border bg-white p-8">
      <div className="mb-6 p-6"></div>
      <div className="flex flex-col gap-4">
        <button
          className={clsx(
            "ring-accent flex w-[12rem] items-center justify-items-start gap-2 rounded-md px-4 py-2 font-medium",
            {
              "hover:ring": searchType != "van-xuoi",
              "bg-accent text-white":
                searchType === "van-xuoi" || searchType === "",
            },
          )}
          onClick={() => {
            redirectWithSearchType("van-xuoi");
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6">
            <path
              fillRule="evenodd"
              d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <div className="p-1 font-bold">Vần xuôi</div>
        </button>
        <button
          className={clsx(
            "ring-accent flex w-[12rem] items-center justify-items-start gap-2 rounded-md px-4 py-2 font-medium",
            {
              "hover:ring": searchType != "/van-dao",
              "bg-accent text-white": searchType === "van-dao",
            },
          )}
          onClick={() => {
            redirectWithSearchType("van-dao");
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6">
            <path
              fillRule="evenodd"
              d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z"
              clipRule="evenodd"
            />
          </svg>
          <div className="p-1 font-bold">Vần đảo</div>
        </button>
        <button
          className={clsx(
            "ring-accent flex w-[12rem] items-center justify-items-start gap-2 rounded-md px-4 py-2 font-medium",
            {
              "hover:ring": searchType != "noi-lai",
              "bg-accent text-white": searchType === "noi-lai",
            },
          )}
          onClick={() => {
            redirectWithSearchType("noi-lai");
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6">
            <path
              fillRule="evenodd"
              d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
          <div className="p-1 font-bold">Nói lái</div>
        </button>
      </div>
    </aside>
  );
}
