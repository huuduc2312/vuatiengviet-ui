import Search from "@/app/ui/rhyme/search";
import { SearchType } from "@/app/constants/search-type";
import Result from "./result";
import Placeholder from "./placeholder";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { type?: SearchType };
};

const metadataMap: { [key in SearchType]: Metadata } = {
  "van-xuoi": {
    title: "Tìm Vần & Vần Đảo | Vần Ba, Vần Đôi, Vần Tư| Vựa Tiếng Việt",
    description:
      "Công cụ Tìm Vần & Vần Đảo. Tìm Vần viết rap, làm thơ, viết nhạc, sáng tác một cách dễ dàng. Hỗ trợ tìm vần online, dành cho rapper, nhạc sĩ, nhà thơ và người yêu chữ.",
  },
  "van-dao": {
    title: "Tìm Vần & Vần Đảo | Tìm Vần Đảo Như Rang Lạc | Vựa Tiếng Việt",
    description:
      "Công cụ Tìm Vần & Vần Đảo đột phá - lựa chọn hàng đầu cho người yêu thơ, rap và nhạc. Tại Vựa Tiếng Việt, bạn có thể tìm kiếm vần ba, vần đôi, vần đảo một cách nhanh chóng. Tận hưởng trải nghiệm tìm vần nhờ AI.",
  },
  "noi-lai": {
    title: "Công Cụ Tìm Vần & Nói Lái | Vựa Tiếng Việt",
    description:
      "Phát huy vẻ đẹp của từ ngữ với Công Cụ Tìm Vần & Vần Đảo tại Vựa Tiếng Việt. Tìm cách nói lái. Tìm Vần đôi, vần ba, vần đảo, nói lái, nói trại một cách chính xác và sáng tạo.",
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
        {/* <link rel="canonical" href="https://vuatiengviet.vn" key="canonical"/> */}
      </head>
      <div className="flex flex-col h-full px-[1rem] py-[1rem] md:items-center md:justify-center">
        {/* Title at the top, minimize its space by making it non-flexible */}
        <div className="mb-2 text-center">
          <h1 className="text-lg md:text-1xl lg:text-2xl font-bold leading-none" style={{ opacity: 0.001 }}>Tìm Vần: Từ Điển Vần Rap Mọi Lúc</h1>
          <h2 className="text-xs font-light italic leading-none" style={{ opacity: 0.001 }}>
            Gợi ý: tìm vần, web tìm vần, tìm vần online, vần đảo, cậu vàng ơi...
          </h2>
        </div>
        {/* Search component, allowed to grow and take the remaining space */}
        <div className="flex h-full w-full flex-col rounded-[1.5rem] border bg-white/60 backdrop-blur-sm md:w-[54rem]">
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