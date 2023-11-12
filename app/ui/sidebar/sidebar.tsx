"use client";

import Item from "./item";

export default function Sidebar() {
  return (
    <aside className="flex h-screen flex-col items-center border px-4">
      <div className="py-[5rem] font-bold">Vựa Tiếng Việt</div>
      <div className="flex flex-col gap-4">
        <Item name="Tìm Từ" pathname="/tim-tu" />
        <Item name="Blogs" pathname="/blogs" />
        <Item name="GraPT" pathname="/grapt" />
      </div>
    </aside>
  );
}
