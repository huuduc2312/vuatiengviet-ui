import { cmsHost } from "@/app/lib/constants";
import { getBlog } from "@/app/lib/get-blogs";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogResp = await fetch(
    `https://cms.vuatiengviet.vn/api/blogs?filter[slug][$eq]=${params.slug}&populate=*`,
  );
  const blogs = await blogResp.json();

  if (!blogs) return notFound();

  const blog = blogs.data[0];

  return {
    title: blog.attributes.seo.metaTitle,
    description: blog.attributes.seo.metaDescription,
    keywords: blog.attributes.seo.keywords,
    robots: blog.attributes.seo.metaRobots,
    icons: `https://cms.vuatiengviet.vn${blog.attributes.image.data.attributes.formats.thumbnail.url}`,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);

  if (!blog) return notFound();

  const blogImg = blog.attributes.image.data;
  const imgFormat =
    blogImg.attributes.formats.large || blogImg.attributes.formats.medium;

  return (
    <div className="mx-auto w-fit overflow-y-auto bg-white md:px-[8rem]">
      <div className="mx-auto flex max-w-[48rem] flex-col gap-4 overflow-y-auto p-4 text-start text-lg md:mt-[4rem]">
        <h1 className="mx-auto max-w-[70rem] py-2 text-3xl font-extrabold md:text-6xl">
          {blog.attributes.title}
        </h1>
        <span className="block text-base font-light">
          {new Date(blog.attributes.publishedAt).toLocaleDateString("vi-VN")}
        </span>
        <Image
          src={`${cmsHost}${imgFormat.url}`}
          height={imgFormat.height}
          width={imgFormat.width}
          sizes="100vw"
          className="h-auto w-full rounded-lg"
          alt={blog.attributes.image.data.attributes.alternativeText}
        />
        <div
          className="leading-8 md:leading-9 [&>p]:my-2 md:[&>p]:my-5"
          dangerouslySetInnerHTML={{ __html: blog.attributes.content }}
        />
      </div>
    </div>
  );
}
