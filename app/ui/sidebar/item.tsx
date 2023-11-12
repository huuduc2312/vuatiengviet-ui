"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

export default function Item({
  name,
  pathname,
}: {
  name: string;
  pathname: string;
}) {
  const currentPathname = usePathname();
  const { replace } = useRouter();

  return (
    <button
      className={clsx(
        "ring-accent flex w-[12rem] items-center justify-items-start gap-4 rounded-md px-4 py-2 font-medium",
        {
          "hover:ring-1": currentPathname != pathname,
          "bg-accent text-white": currentPathname == pathname,
        },
      )}
      onClick={() => {
        replace(pathname);
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
      <div className="p-1 font-semibold">{name}</div>
    </button>
  );
}
