"use client";

import { usePathname } from "next/navigation";
import Item from "./item";

export default function Menu() {
  const path = usePathname();
  const isHomepage = path == "/";
  const isTimTu = path.startsWith("/tim-van");
  const isBlogs = path.startsWith("/blogs");
  const isGraPT = path.startsWith("/grapt");

  return (
    <div className="hidden items-center justify-stretch gap-[1.5rem] self-stretch md:flex">
      <Item active={isHomepage || isTimTu} url="/tim-van" label="Tìm Vần" />
      <Item active={isBlogs} url="/blogs" label="Blog" />
      <Item active={isGraPT} url="/grapt" label="GraPT" />
    </div>
  );
}
