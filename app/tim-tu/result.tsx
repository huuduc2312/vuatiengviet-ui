import {
  searchTuLaiRhymes,
  searchVanDaoRhymes,
  searchVanXuoiRhymes,
} from "@/app/lib/data";
import { Card } from "../ui/terms/card";
import { SearchType } from "@/app/constants/search-type";
import { notFound } from "next/navigation";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

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

  const termsReceived = (page - 1) * termsInPageLimit;

  if (!query) return;

  if (type == SearchType.NoiLai) {
    const [standards, freeStyles] = await searchTuLaiRhymes(
      query,
      termsReceived,
    );

    return standards.length + freeStyles.length > 0
      ? result(noiLaiResult(standards, freeStyles))
      : noResult;
  }

  let terms: string[] = [];

  switch (type) {
    case SearchType.VanXuoi:
      terms = await searchVanXuoiRhymes(query, termsReceived);
      break;
    case SearchType.VanDao:
      terms = await searchVanDaoRhymes(query, termsReceived);
      break;
    default:
      return notFound();
  }

  return terms ? result(defaultResult(terms)) : noResult;
}

function defaultResult(terms: string[]) {
  return (
    <div className="flex w-full flex-wrap justify-stretch gap-4">
      {terms.map((term, idx) => {
        return <Card key={idx} term={term} />;
      })}
    </div>
  );
}

function noiLaiResult(standards: string[], freeStyles: string[]) {
  return (
    <div className="flex flex-col gap-6">
      {standards && (
        <div className="flex flex-col gap-2">
          Tiêu chuẩn
          <div className="flex w-full flex-wrap justify-stretch gap-4">
            {standards.map((term, idx) => {
              return <Card key={idx} term={term} />;
            })}
          </div>
        </div>
      )}
      {freeStyles && (
        <div className="flex flex-col gap-2">
          Freestyle
          <div className="flex w-full flex-wrap justify-stretch gap-4">
            {freeStyles.map((term, idx) => {
              return <Card key={idx} term={term} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function result(resultComponent: ReactNode) {
  return (
    <div className="h-full w-full rounded-lg border p-3 shadow">
      {resultComponent}
    </div>
  );
}

const noResult = (
  <div className="flex gap-2">
    <span>Không có kết quả nào</span>
    <FaceFrownIcon className="h-6 w-6" />
  </div>
);
