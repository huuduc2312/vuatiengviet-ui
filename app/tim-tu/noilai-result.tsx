import { searchTuLaiRhymes } from "../lib/data";
import { Card } from "../ui/terms/card";
import NoResult from "./no-result";

export default async function TulaiResult({
  query,
  receivedCount,
}: {
  query: string;
  receivedCount: number;
}) {
  const [standards, freeStyles] = await searchTuLaiRhymes(query, receivedCount);

  return standards.length || freeStyles.length ? (
    <div className="flex h-full w-full flex-col gap-5 rounded-lg border p-3 shadow">
      {!!standards.length && (
        <div className="flex w-full flex-col gap-2">
          Tiêu chuẩn
          <div className="flex w-full flex-wrap justify-stretch gap-4">
            {standards.map((term, idx) => {
              return <Card key={idx} term={term} />;
            })}
          </div>
        </div>
      )}
      {!!freeStyles.length && (
        <div className="flex w-full flex-col gap-2">
          Freestyle
          <div className="flex w-full flex-wrap justify-stretch gap-4">
            {freeStyles.map((term, idx) => {
              return <Card key={idx} term={term} />;
            })}
          </div>
        </div>
      )}
    </div>
  ) : (
    <NoResult />
  );
}
