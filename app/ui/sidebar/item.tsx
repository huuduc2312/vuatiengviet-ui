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
      className={clsx("flex gap-3 rounded-lg border p-2 shadow", {
        "bg-blue-strong text-white": currentPathname == pathname,
      })}
      onClick={() => {
        replace(pathname);
      }}>
      {icon}
      {name}
    </button>
  );
}
