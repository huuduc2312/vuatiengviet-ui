"use client";

import { usePathname } from "next/navigation";
import Item from "./item";
import {
  MagnifyingGlassIcon,
  NewspaperIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

export default function MobileMenu() {
  const path = usePathname();
  const isTimTu = path.startsWith("/tim-van");
  const isBlogs = path.startsWith("/blogs");
  const isGraPT = path.startsWith("/grapt");

  return (
    <nav className="flex h-[5rem] w-full items-center justify-between gap-[1.5rem] px-4 md:hidden" style={{ backgroundColor: '#f6f9fe' }}>
      <Item
        icon={<MagnifyingGlassIcon className="h-6 w-6" />}
        active={isTimTu}
        url="/tim-van"
        label="Tìm Vần"
      />
      <Item
        icon={<NewspaperIcon className="h-6 w-6" />}
        active={isBlogs}
        url="/blogs"
        label="Blog"
      />
      <Item
        icon={<PencilSquareIcon className="h-6 w-6" />}
        active={isGraPT}
        url="/grapt"
        label="GraPT"
      />
    </nav>
  );
}
