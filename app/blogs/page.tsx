import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const blogResp = await fetch(
    `https://cms.vuatiengviet.vn/api/blogs?populate=*`,
  );
  const blogs = await blogResp.json();

  return (
    <div className="h-full w-full">
      <div className="mx-auto mt-[10rem] flex max-w-screen-lg flex-col">
        <span className="mb-12 text-3xl font-bold">Bài Viết Mới</span>

        <div className="grid grid-cols-3">
          {blogs.data.map((blog: any, idx: number) => {
            return (
              <Link
                href={`/blogs/${blog.attributes.slug}`}
                key={idx}
                className="flex h-[24rem] flex-col items-stretch justify-stretch gap-5 rounded-2xl border bg-white p-6">
                <Image
                  src={`https://cms.vuatiengviet.vn${blog.attributes.image.data.attributes.formats.small.url}`}
                  height={
                    blog.attributes.image.data.attributes.formats.small.height
                  }
                  width={
                    blog.attributes.image.data.attributes.formats.small.width
                  }
                  sizes="100vw"
                  className="h-auto w-full rounded-lg"
                  alt={blog.attributes.image.data.alternativeText}
                />
                <span className="mb-3 text-lg font-semibold">
                  {blog.attributes.title}
                </span>
                <span className="text-sm font-light">
                  {new Date(blog.attributes.publishedAt).toLocaleDateString(
                    "vi-VN",
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Phong ba bão táp không bằng ngữ pháp Việt Nam| Vựa Tiếng Việt",
  description:
    "Tiếng Việt là một ngôn ngữ thú vị và có nhiều vẻ đẹp mà chúng ta vẫn chưa hiểu hết, Hãy cùng khám phá tiếng việt qua những góc nhìn thú vị và những câu punchlines đi vào lòng người nhé!",
};
