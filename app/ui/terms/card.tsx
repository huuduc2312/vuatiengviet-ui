export function Card({ term }: { term: string }) {
  return (
    <div className="rounded-xl border px-2 py-1 decoration-dotted shadow hover:underline lg:px-8 lg:text-xl">
      {term}
    </div>
  );
}
