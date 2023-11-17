import Search from "@/app/ui/terms/search";
import { SearchType } from "@/app/constants/search-type";
import TypeSelect from "@/app/ui/terms/type-select";
import Result from "./result";
import Placeholder from "./placeholder";

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; type?: SearchType; page?: string };
}) {
  const query = searchParams?.query;

  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-4">
      <div className="flex w-full flex-col gap-4">
        <TypeSelect searchParams={searchParams} />
        <Search placeholder={"Nhập bất kỳ câu từ nào..."} />
      </div>

      {query ? <Result searchParams={searchParams} /> : <Placeholder />}
    </div>
  );
}
