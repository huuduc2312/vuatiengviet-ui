import Search from "@/app/ui/terms/search";
import { SearchType } from "@/app/constants/search-type";
import TypeSelect from "@/app/ui/terms/type-select";
import Pagination from "@/app/ui/terms/pagination";
import Result from "./result";
import { LightBulbIcon } from "@heroicons/react/24/outline";

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

      {query ? (
        <>
          <Result searchParams={searchParams} />
          <Pagination searchParams={searchParams} />
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 italic">
          <LightBulbIcon className="h-10 w-10" />
          <span>{'"Làm thơ thì phải có vần'}</span>
          <span>{'Nếu mà không có thì thôi cũng được..."'}</span>
        </div>
      )}
    </div>
  );
}
