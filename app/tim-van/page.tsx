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
