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
    <main className="flex min-h-screen items-center justify-center">
      <div className="my-6 flex w-full flex-col items-center gap-6 p-6  lg:w-4/6 lg:p-10 ">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-center text-2xl font-extrabold md:text-3xl lg:text-5xl">
            Sáng Tạo Vô Tận: Tìm Câu Theo Vần Với Trí Tuệ Nhân Tạo
          </h1>
          <h2 className="text-center text-lg text-slate-600">
            Dễ dàng tìm kiếm và sáng tạo các câu thơ, lời bài hát và văn bản với
            sự trợ giúp của trí tuệ nhân tạo.
          </h2>
        </div>

        <div className="flex w-full flex-col gap-6 lg:p-6">
          <Search placeholder={"Nhập bất kỳ câu từ nào..."} />
          <Table query={query} />
        </div>
      </div>
    </main>
  );
}
