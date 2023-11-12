import Search from "@/app/ui/terms/search";
import HeroSection from "@/app/ui/terms/hero";
import Result from "./result";
import { SearchType } from "@/app/constants/search-type";

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; type?: SearchType; page?: string };
}) {
  const query = searchParams?.query;

  return (
    <div className="h-screen w-full p-12">
      <div className="grid h-full grid-rows-6 gap-6">
        <HeroSection hidden={!!query} />

        {query && <Result searchParams={searchParams} />}

        <div className="flex w-full flex-col">
          <Search placeholder={"Nhập bất kỳ câu từ nào..."} />
        </div>
      </div>
    </div>
  );
}
