"use client";

import {
  MagnifyingGlassIcon,
  NewspaperIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import Item from "./item";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="flex h-full w-[12rem] flex-col gap-3 rounded-lg border px-3 pt-6 shadow">
        <Item
          name="Tìm Từ"
          pathname="/tim-tu"
          icon={<MagnifyingGlassIcon className="h-6 w-6" />}
        />
        <Item
          name="Blog"
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
