import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { siteConfig } from "../site.config";

export const GET: APIRoute = async (context) => {
  const blog = await getCollection("blog");
  const sorted = blog.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const siteUrl =
    context.site instanceof URL ? context.site.href : context.site ?? "https://amarafilmco.com/";

  return rss({
    title: siteConfig.businessName,
    description: siteConfig.description,
    site: siteUrl,
    items: sorted.map((post) => ({
      link: `/blog/${post.id}/`,
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
    })),
  });
};
