import {
  searchTuLaiRhymes,
  searchVanDaoRhymes,
  searchVanXuoiRhymes,
} from "@/app/lib/data";
import { Card } from "../ui/terms/card";
import { SearchType } from "@/app/constants/search-type";
import { notFound } from "next/navigation";

export default async function List({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    type?: SearchType;
  };
}) {
  const termsInPageLimit = 20;
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  const type = searchParams?.type || SearchType.VanXuoi;

  let terms: string[] = [];

  if (query) {
    switch (type) {
      case SearchType.VanXuoi:
        terms = await searchVanXuoiRhymes(query, (page - 1) * termsInPageLimit);
        break;
      case SearchType.VanDao:
        terms = await searchVanDaoRhymes(query);
        break;
      case SearchType.NoiLai:
        terms = await searchTuLaiRhymes(query);
        break;
      default:
        return notFound();
    }
  }

  return terms ? (
    <div className="flex w-full flex-wrap justify-stretch gap-4">
      {terms.map((term, idx) => {
        return <Card key={idx} term={term} />;
      })}
    </div>
  ) : (
    <div>
      <span>{"Không có kết quả nào :("}</span>
    </div>
  );
}