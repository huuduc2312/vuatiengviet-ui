export function Card({ term }: { term: string }) {
  return (
    <div className="rounded-xl border px-8 py-1 decoration-dotted shadow hover:underline lg:text-xl">
      {term}
    </div>
  );
}
