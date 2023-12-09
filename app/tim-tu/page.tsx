import Search from "@/app/ui/rhyme/search";
import { SearchType } from "@/app/constants/search-type";
import Result from "./result";
import Placeholder from "./placeholder";
import { Metadata, ResolvingMetadata } from "next";

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; type?: SearchType; page?: string };
}) {
  const query = searchParams?.query;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-[54rem] flex-col rounded-[1.5rem] border bg-white/70 backdrop-blur-sm">
        <Search placeholder={"Nhập bất kỳ câu từ nào..."} />
        <div className="h-[32.6875rem]">
          {query ? <Result searchParams={searchParams} /> : <Placeholder />}
        </div>
      </div>
    </div>
  );
}

type Props = {
  params: { id: string };
  searchParams: { type?: SearchType };
};

const metadataMap: { [key in SearchType]: Metadata } = {
  "van-xuoi": {
    title: "Tìm vần đôi, vần ba, vần má | Vựa Tiếng Việt",
    description:
      "Tìm vần đôi, tìm vần ba, tìm vần online. Nâng cao nghệ thuật chơi chữ, viết rap, nhạc cùng công cụ làm thơ AI. Khám phá Vựa Tiếng Việt để tìm vần online dễ dàng hơn!",
  },
  "van-dao": {
    title: "Tìm vần đảo, tìm vần đảo online, vần đảo siêu đỉnh| Vựa Tiếng Việt",
    description:
      "Tìm vần đảo, tìm vần đảo online. Nâng cao nghệ thuật chơi chữ, viết rap, nhạc cùng công cụ làm thơ AI. Khám phá Vựa Tiếng Việt để tìm vần đảo online dễ dàng hơn!",
  },
  "noi-lai": {
    title: "Tìm từ nói lái, nói lái là gì? | Vựa Tiếng Việt",
    description:
      "Tìm từ nói lái, nói lái chuẩn và nói lái tự do, nói lái là gì. Nâng cao nghệ thuật chơi chữ, viết rap, nhạc cùng công cụ làm thơ AI. Khám phá Vựa Tiếng Việt để tìm hiểu về thú chơi chữ độc nhất vô nhị của người Việt - nói lái",
  },
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const type: SearchType = searchParams.type || SearchType.VanXuoi;

  return {
    ...metadataMap[type],
  };
}
