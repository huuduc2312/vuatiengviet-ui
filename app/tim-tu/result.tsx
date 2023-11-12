import { SearchType } from "@/app/constants/search-type";
import List from "@/app/tim-tu/list";
import Pagination from "@/app/ui/terms/pagination";

export default function Result({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    type?: SearchType;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <div className="relative row-span-5 flex flex-col items-center justify-between gap-6">
      <div className="flex w-full flex-col items-start justify-center gap-6 rounded-xl border p-4 px-6 shadow">
        <span className="block text-6xl font-bold normal-case underline decoration-dotted">
          {query}
        </span>
        <span>
          Chúng tôi tìm được{" "}
          <span className="text-xl font-bold decoration-from-font">200</span>{" "}
          kết quả cho bạn!
        </span>
      </div>

      <div className="w-full grow rounded-xl border p-4 shadow">
        <List searchParams={searchParams} />
      </div>

      <div className="absolute bottom-0 mb-4 w-[8rem]">
        <Pagination searchParams={searchParams} />
      </div>
    </div>
  );
}
