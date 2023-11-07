import Image from "next/image";
import Link from "next/link";
import SearchBox from "./ui/search";
import Table from "./ui/terms/table";
import Search from "./ui/search";
import { useSearchParams } from "next/navigation";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-6 lg:p-10 my-6 flex flex-col gap-6 items-center w-full lg:w-4/6 ">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="text-center font-extrabold text-2xl md:text-3xl lg:text-5xl">
            Sáng Tạo Vô Tận: Tìm Câu Theo Vần Với Trí Tuệ Nhân Tạo
          </h1>
          <h2 className="text-slate-600 text-lg text-center">
            Dễ dàng tìm kiếm và sáng tạo các câu thơ, lời bài hát và văn bản với
            sự trợ giúp của trí tuệ nhân tạo.
          </h2>
        </div>

        <div className="flex flex-col gap-6 lg:p-6 w-full">
          <Search placeholder={"Nhập bất kỳ câu từ nào..."} />
          <Table query={query} />
        </div>
      </div>
    </main>
  );
}
