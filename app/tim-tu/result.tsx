import { searchVanDaoRhymes, searchVanXuoiRhymes } from "@/app/lib/get-rhymes";
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
    <div className="flex h-full w-full flex-col justify-between overflow-y-auto">
      {terms.length ? (
        <div className="flex h-fit max-h-full flex-wrap items-start gap-4 gap-y-6 overflow-y-auto p-4 md:px-[3.375rem] md:py-[2.25rem]">
          {terms.map((term, idx) => {
            return <Card key={idx} term={term} />;
          })}
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
