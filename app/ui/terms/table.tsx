import { searchRhymes } from "@/app/lib/data";
import { Card } from "./card";

export default async function Table({ query }: { query: string }) {
  const terms = await searchRhymes(query);

  return terms ? (
    <div className="h-full overflow-auto rounded-xl bg-white p-4">
      <div className="grid h-full grid-cols-2">
        {terms.map((term, idx) => {
          return <Card key={idx} term={term} />;
        })}
      </div>
    </div>
  ) : (
    <div>
      <span>{"Không có kết quả nào :("}</span>
    </div>
  );
}
