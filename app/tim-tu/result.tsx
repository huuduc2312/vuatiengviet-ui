import { searchVanDaoRhymes, searchVanXuoiRhymes } from "@/app/lib/data";
import { Card } from "../ui/rhyme/term-card";
import { SearchType } from "@/app/constants/search-type";
import Pagination from "../ui/rhyme/pagination";
import TulaiResult from "./noilai-result";
import NoResult from "./no-result";

const termsInPageLimit = 20;

export default async function Result({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    type?: SearchType;
  };
}) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  const type = searchParams?.type || SearchType.VanXuoi;
  const receivedCount = (page - 1) * termsInPageLimit;

  if (!query) return;

  if (type == SearchType.NoiLai) {
    return <TulaiResult query={query} receivedCount={receivedCount} />;
  }

  let terms: string[] = [];

  if (type === SearchType.VanXuoi) {
    terms = await searchVanXuoiRhymes(query, receivedCount);
  } else if (type === SearchType.VanDao) {
    terms = await searchVanDaoRhymes(query, receivedCount);
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      {terms.length ? (
        <div className="flex h-[29rem] px-[3.375rem] py-[2.25rem]">
          <div className="flex flex-1 flex-wrap content-between items-start gap-x-[20px] self-stretch">
            {terms.map((term, idx) => {
              return <Card key={idx} term={term} />;
            })}
          </div>
        </div>
      ) : (
        <NoResult />
      )}
      <Pagination
        searchParams={searchParams}
        stop={terms.length < termsInPageLimit}
      />
    </div>
  );
}
