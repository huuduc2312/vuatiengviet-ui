export function Card({ term }: { term: string }) {
  return (
    <div className="w-full items-center border-x">
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="text-xl decoration-dotted hover:underline">{term}</div>

        <div className="flex items-center gap-2">
          <div className="bg-accent rounded-md px-4 py-1 font-bold text-white shadow-xl">
            Động từ
          </div>

          <button className="ring-accent h-full rounded-md p-2 hover:ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="fill-accent h-4 w-4">
              <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
              <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
