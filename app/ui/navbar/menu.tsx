"use client";

import { usePathname } from "next/navigation";
import Item from "./item";

export default function Menu() {
  const path = usePathname();
  const isTimTu = path.startsWith("/tim-tu");
  const isBlogs = path.startsWith("/blogs");
  const isGraPT = path.startsWith("/grapt");

  return (
    <div className="hidden items-center justify-stretch gap-[1.5rem] self-stretch md:flex">
      <Item active={isTimTu} url="/tim-tu" label="Tìm Từ" />
      <Item active={isBlogs} url="/blogs" label="Blog" />
      <Item active={isGraPT} url="/grapt" label="GraPT" />
    </div>
  );
}
