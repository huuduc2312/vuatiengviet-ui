import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NoResult() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex gap-2">
        <span>Không có kết quả nào</span>
        <FaceFrownIcon className="h-6 w-6" />
      </div>
    </div>
  );
}
