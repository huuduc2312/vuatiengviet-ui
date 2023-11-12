import clsx from "clsx";

export default function Intro({ hidden }: { hidden: boolean }) {
  return (
    <div
      className={clsx(
        "row-span-5 flex h-full w-full flex-col items-center justify-start p-6",
        { hidden: hidden },
      )}>
      <div className="flex w-full flex-col justify-start">
        <h1 className="py-4 text-3xl font-extrabold tracking-tight lg:text-5xl">
          Tìm từ theo vần dễ dàng với Trí Tuệ Nhân Tạo
        </h1>
        <p className="mx-auto text-lg">
          Vựa Tiếng Việt giúp bạn <strong>tìm từ theo vần</strong> dễ dàng nhờ
          Trí Tuệ Nhân Tạo. Khám phá ngôn ngữ qua những âm vần, đơn giản và thú
          vị hơn bao giờ hết.
        </p>
      </div>
    </div>
  );
}
