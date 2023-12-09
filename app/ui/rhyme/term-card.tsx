export function Card({ term }: { term: string }) {
  return (
    <div className="flex items-center rounded-[2rem] bg-white px-[2rem] py-[0.625rem] shadow-[0_0_15px_0] shadow-blue-200 transition-all duration-300 hover:text-blue-500 md:px-4 lg:px-8 lg:text-xl">
      {term}
    </div>
  );
}
