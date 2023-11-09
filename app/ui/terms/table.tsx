import { searchRhymes } from "@/app/lib/data";
import { useSearchParams } from "next/navigation";
import { Card } from "./card";
import clsx from "clsx";

export default async function Table({ query }: { query: string }) {
  const terms = await searchRhymes(query);
  const noResult = query && terms.length === 0;

  return !noResult ? (
    <div className="grid w-full grid-cols-3 gap-1 lg:grid-cols-4 lg:gap-6">
      {terms &&
        terms.map((term: string, idx: number) => (
          <Card term={term} key={idx} />
        ))}
    </div>
  ) : (
    <span>{"Không có kết quả nào :("}</span>
  );
}
