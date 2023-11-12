export function Card({ term }: { term: string }) {
  return (
    <div className="rounded-xl border px-8 py-1 text-xl decoration-dotted shadow hover:underline">
      {term}
    </div>
  );
}
