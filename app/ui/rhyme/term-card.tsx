export function Card({ term }: { term: string }) {
  return (
    <div className="flex items-center rounded-[2rem] bg-white px-4 py-2 shadow-[0_0_15px_0] shadow-blue-200 transition-all duration-300 hover:text-blue-500 md:px-4 md:px-[2rem] md:py-[0.625rem] lg:px-8 lg:text-xl">
      {term}
    </div>
  );
}
