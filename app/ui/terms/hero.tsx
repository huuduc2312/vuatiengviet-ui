import clsx from "clsx";

export default function HeroSection({ hidden }: { hidden: boolean }) {
  return (
    <div
      className={clsx(
        "row-span-5 flex h-full w-full flex-col items-center justify-center p-6",
        { hidden: hidden },
      )}>
      <div className="flex w-full flex-col justify-start">
        <h1 className="py-4 text-3xl font-extrabold lg:text-6xl">
          Vựa Tiếng Việt
        </h1>
        <h2 className="text-lg">
          Công cụ tìm kiếm vần thông minh sử dụng{" "}
          <strong className="text-xl">Trí Tuệ Nhân Tạo</strong>
        </h2>
      </div>
    </div>
  );
}
