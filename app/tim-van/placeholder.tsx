import { LightBulbIcon } from "@heroicons/react/24/outline";
import { getRandomSentence } from "../lib/get-rhymes";

export default async function Placeholder() {
  const randomSentence = await getRandomSentence();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 italic">
      <LightBulbIcon className="h-10 w-10" />
      {randomSentence ? (
        <span>{`"${randomSentence}"`}</span>
      ) : (
        <>
          <span>{'"Làm thơ thì phải có vần'}</span>
          <span>{'Nếu mà không có thì thôi cũng được..."'}</span>
        </>
      )}
    </div>
  );
}
