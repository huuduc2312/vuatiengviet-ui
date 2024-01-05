import Search from "@/app/ui/rhyme/search";
import { SearchType } from "@/app/constants/search-type";
import Result from "./tim-tu/result";
import Placeholder from "./tim-tu/placeholder";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { type?: SearchType };
};

const metadataMap: { [key in SearchType]: Metadata } = {
  "van-xuoi": {
    title: "Vựa Tiếng Việt | Tìm vần | vần đôi, vần ba, vần đảo, vần rap",
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

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; type?: SearchType; page?: string };
}) {
  const query = searchParams?.query;

  return (
    <>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="https://vuatiengviet.vn/favicon_144.ico"/>
        <link rel="canonical" href="https://vuatiengviet.vn" key="canonical"/>
      </head>
      <div className="flex h-full px-[1rem] py-[3rem] md:items-center md:justify-center">
        <div className="flex h-full w-full flex-col rounded-[1.5rem] border bg-white/70 backdrop-blur-sm md:w-[54rem]">
          <Search
            placeholder={{
              desktop: "Nhập bất kỳ câu từ nào...",
              mobile: "Tìm câu từ",
            }}
          />
          {query ? <Result searchParams={searchParams} /> : <Placeholder />}
        </div>
      </div>
    </>
  );
}
