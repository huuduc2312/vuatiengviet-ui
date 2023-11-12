"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function Item({
  name,
  pathname,
  icon,
}: {
  name: string;
  pathname: string;
  icon: ReactNode;
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
      {icon}
      <div className="p-1 font-semibold">{name}</div>
    </button>
  );
}
