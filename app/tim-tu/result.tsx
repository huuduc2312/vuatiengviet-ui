import { searchVanDaoRhymes, searchVanXuoiRhymes } from "@/app/lib/data";
import { Card } from "../ui/terms/card";
import { SearchType } from "@/app/constants/search-type";
import Pagination from "../ui/terms/pagination";
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

  return terms.length ? (
    <div className="flex h-full w-full flex-col items-center justify-between gap-4 rounded-lg border p-3 shadow">
      <div className="flex w-full flex-wrap justify-stretch gap-4">
        {terms.map((term, idx) => {
          return <Card key={idx} term={term} />;
        })}
      </div>
      <Pagination
        searchParams={searchParams}
        stop={terms.length < termsInPageLimit}
      />
    </div>
  ) : (
    <NoResult />
  );
}
