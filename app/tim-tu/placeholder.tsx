import { LightBulbIcon } from "@heroicons/react/24/outline";

export default function Placeholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 italic">
      <LightBulbIcon className="h-10 w-10" />
      <span>{'"Làm thơ thì phải có vần'}</span>
      <span>{'Nếu mà không có thì thôi cũng được..."'}</span>
    </div>
  );
}
