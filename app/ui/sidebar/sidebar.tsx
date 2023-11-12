"use client";

import {
  MagnifyingGlassIcon,
  NewspaperIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import Item from "./item";

export default function Sidebar() {
  return (
    <aside className="flex h-screen flex-col items-center border px-4">
      <div className="py-[5rem] font-bold">Vựa Tiếng Việt</div>
      <div className="flex flex-col gap-4">
        <Item
          name="Tìm Từ"
          pathname="/tim-tu"
          icon={<MagnifyingGlassIcon className="h-6 w-6" />}
        />
        <Item
          name="Blogs"
          pathname="/blogs"
          icon={<NewspaperIcon className="h-6 w-6" />}
        />
        <Item
          name="GraPT"
          pathname="/grapt"
          icon={<PencilIcon className="h-6 w-6" />}
        />
      </div>
    </aside>
  );
}
