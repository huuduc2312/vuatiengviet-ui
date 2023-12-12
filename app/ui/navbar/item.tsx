"use client";

import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

export default function Item({
  icon,
  active,
  url,
  label,
}: {
  icon?: ReactNode;
  active: boolean;
  url: string;
  label: string;
}) {
  return (
    <Link
      href={url}
      className={clsx(
        "flex w-[6.25rem] flex-col items-center justify-center self-stretch py-4 text-center font-semibold transition-all duration-300",
        {
          "border-t-4 border-blue-500 text-blue-500 md:border-b-4 md:border-t-0":
            active,
          "text-gray-400 hover:text-gray-700": !active,
        },
      )}>
      {icon}
      {label}
    </Link>
  );
}