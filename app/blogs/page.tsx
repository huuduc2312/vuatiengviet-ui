import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "../lib/get-blogs";
import { cmsHost } from "../lib/constants";

export const metadata: Metadata = {
  title: "Phong ba bão táp không bằng ngữ pháp Việt Nam| Vựa Tiếng Việt",
  description:
    "Tiếng Việt là một ngôn ngữ thú vị và có nhiều vẻ đẹp mà chúng ta vẫn chưa hiểu hết, Hãy cùng khám phá tiếng việt qua những góc nhìn thú vị và những câu punchlines đi vào lòng người nhé!",
};

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <div className="mx-auto flex h-full flex-col gap-4 px-6 pt-6 md:px-[12rem] md:pt-[7rem]">
      <span className="text-2xl font-bold md:text-3xl">Bài Viết Mới</span>
      <div className="grid grid-cols-1 gap-4 pb-6 md:grid-cols-3 md:py-[2rem] md:pb-[10rem]">
        {blogs.map((blog: any, idx: number) => {
          const blogImg = blog.attributes.image;

          return (
            <Link
              href={`/blogs/${blog.attributes.slug}`}
              key={idx}
              className="flex flex-col justify-between gap-5 rounded-2xl border bg-white p-6">
              <Image
                src={`${cmsHost}${blogImg.data.attributes.formats.small.url}`}
                height={blogImg.data.attributes.formats.small.height}
                width={blogImg.data.attributes.formats.small.width}
                sizes="100vw"
                className="h-auto w-full rounded-lg"
                alt={blogImg.data.alternativeText}
              />
              <div className="h-full">
                <span className="align-top text-lg font-semibold">
                  {blog.attributes.title}
                </span>
              </div>
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
  );
}
