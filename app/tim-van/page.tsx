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
    title: "Tìm Vần & Vần Đảo | Vần Ba, Đôi, Đơn | Vựa Tiếng Việt - Công Cụ Sáng Tạo Vần",
    description:
      "Khám phá công cụ Tìm Vần & Vần Đảo trực tuyến tại Vựa Tiếng Việt! Tìm Vần với vần đôi, vần ba, vần đơn một cách dễ dàng. Tối ưu hóa sáng tạo trong viết rap, làm thơ, và nhạc với AI. Hỗ trợ tìm vần online, nâng cao nghệ thuật chơi chữ và biến ngôn từ thành nghệ thuật.",
  },
  "van-dao": {
    title: "Tìm Vần & Vần Đảo | Chinh Phục Nghệ Thuật Ngôn Từ Với Vựa Tiếng Việt",
    description:
      "Công cụ Tìm Vần & Vần Đảo đột phá - lựa chọn hàng đầu cho người yêu thơ, rap và nhạc. Tại Vựa Tiếng Việt, bạn có thể tìm kiếm vần ba, vần đôi, vần đơn một cách nhanh chóng. Tận hưởng trải nghiệm tìm vần online, phát huy tối đa khả năng sáng tạo với AI.",
  },
  "noi-lai": {
    title: "Công Cụ Tìm Vần & Vần Đảo | Nâng Tầm Văn Chương Với Vựa Tiếng Việt",
    description:
      "Phát huy vẻ đẹp của từ ngữ với Công Cụ Tìm Vần & Vần Đảo tại Vựa Tiếng Việt. Tìm Vần có vần đôi, vần ba, vần đơn một cách chính xác và sáng tạo. Làm thơ, viết rap, sáng tác nhạc cùng AI. Tìm vần online trở nên thuận tiện và nghệ thuật hơn bao giờ hết.",
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
      <div className="flex flex-col h-full px-[1rem] py-[1rem] md:items-center md:justify-center">
        {/* Title at the top, minimize its space by making it non-flexible */}
        <div className="mb-2 text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none" style={{ opacity: 0.001 }}>Tìm Vần: Từ Điển Vần Rap Mọi Lúc</h1>
        </div>
        {/* Search component, allowed to grow and take the remaining space */}
        <div className="flex-grow w-full rounded-[1.5rem] border bg-white/60 backdrop-blur-sm md:w-[54rem] mb-2">
          <Search
            placeholder={{
              desktop: "Nhập bất kỳ câu từ nào...",
              mobile: "Tìm câu từ",
            }}
          />
          {query ? <Result searchParams={searchParams} /> : <Placeholder />}
        </div>
        {/* Footer text, make sure it does not grow and takes minimal space */}
        <div className="text-center">
          <h2 className="text-base md:text-lg lg:text-xl font-light italic leading-none" style={{ opacity: 0.001 }}>
            Gợi ý: tìm vần, vần đảo, cậu vàng ơi...
          </h2>
        </div>
      </div>
    </>
  );
}