import { cmsHost } from "./constants";

export async function getBlogs(): Promise<any[]> {
  try {
    const blogResp = await fetch(`${cmsHost}/api/blogs?populate=*`, {
      cache: "no-store",
    });
    const blogs = await blogResp.json();

    return (blogs.data as any[]) || [];
  } catch (e) {
    console.error("get blogs", e);
  }

  return [];
}

export async function getBlog(slug: string): Promise<any> {
  try {
    const blogResp = await fetch(
      `${cmsHost}/api/blogs?filters[slug][$eq]=${slug}&populate=image`,
    );
    const blogs = await blogResp.json();

    return blogs.data[0] ?? null;
  } catch (e) {
    console.error("get blog:", slug, "; message:", (e as Error).message);
  }

  return null;
}
