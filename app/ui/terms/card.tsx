export function Card({ term }: { term: string }) {
  return (
    <div className="items-center">
      <span className="flex justify-center rounded-xl border-[2px] py-2">
        {term}
      </span>
    </div>
  );
}
