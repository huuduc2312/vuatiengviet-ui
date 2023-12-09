import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const blogResp = await fetch(
    `https://cms.vuatiengviet.vn/api/blogs?filter[slug][$eq]=${params.slug}&populate=image`,
  );
  const blogs = await blogResp.json();

  if (!blogs) return notFound();

  const blog = blogs.data[0];

  return (
    <div className="mx-[8rem] w-full bg-white px-[12rem]">
      <div className="mx-auto mt-[12rem] max-w-[48rem] text-start text-lg">
        <h1 className="mx-auto mb-2 max-w-[70rem] text-6xl font-extrabold">
          {blog.attributes.title}
        </h1>
        <span className="mb-[2rem] block">
          {new Date(blog.attributes.publishedAt).toLocaleDateString("vi-VN")}
        </span>
        <Image
          src={`https://cms.vuatiengviet.vn${blog.attributes.image.data.attributes.formats.large.url}`}
          height={blog.attributes.image.data.attributes.formats.large.height}
          width={blog.attributes.image.data.attributes.formats.large.width}
          sizes="100vw"
          className="h-auto w-full rounded-lg"
          alt={blog.attributes.image.data.attributes.alternativeText}
        />
        <div
          className="mt-8 leading-9 [&>p]:my-8"
          dangerouslySetInnerHTML={{ __html: blog.attributes.content }}
        />
      </div>
    </div>
  );
}

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
