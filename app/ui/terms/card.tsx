export function Card({ term }: { term: string }) {
  return (
    <div className="items-center">
      <span className="flex justify-center border-[2px] py-2 rounded-xl">
        {term}
      </span>
    </div>
  );
}
