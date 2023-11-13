import {
  searchTuLaiRhymes,
  searchVanDaoRhymes,
  searchVanXuoiRhymes,
} from "@/app/lib/data";
import { Card } from "../ui/terms/card";
import { SearchType } from "@/app/constants/search-type";
import { notFound } from "next/navigation";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default async function Result({
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
  const termsReceived = (page - 1) * termsInPageLimit;

  if (query) {
    switch (type) {
      case SearchType.VanXuoi:
        terms = await searchVanXuoiRhymes(query, termsReceived);
        break;
      case SearchType.VanDao:
        terms = await searchVanDaoRhymes(query, termsReceived);
        break;
      case SearchType.NoiLai:
        terms = await searchTuLaiRhymes(query, termsReceived);
        break;
      default:
        return notFound();
    }
  }

  return terms ? (
    <div className="h-full w-full rounded-lg border p-3 shadow">
      <div className="flex w-full flex-wrap justify-stretch gap-4">
        {terms.map((term, idx) => {
          return <Card key={idx} term={term} />;
        })}
      </div>
    </div>
  ) : (
    <div className="flex gap-2">
      <span>Không có kết quả nào</span>
      <FaceFrownIcon className="h-6 w-6" />
    </div>
  );
}
