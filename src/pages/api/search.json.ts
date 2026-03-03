import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ url }): Promise<Response> => {
  const query: string | null = url.searchParams.get("query");

  //Handle if query is not present
  if (query === null) {
    return new Response(
      JSON.stringify({
        error: "Query param is missing",
      }),
      {
        status: 400, //bad request
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const allBlogArticles: CollectionEntry<"blog">[] = await getCollection(
    "blog",
    (entry) => !entry.data.title.startsWith("Draft"),
  );

  // Filter articles based on query
  const q = query.toLowerCase();
  const searchResult = allBlogArticles.filter((article) => {
    const titleMatch: boolean = article.data.title.toLowerCase().includes(q);
    const bodyMatch: boolean = article.body.toLowerCase().includes(q);
    const slugMatch: boolean = article.slug.toLowerCase().includes(q);

    return titleMatch || bodyMatch || slugMatch;
  });

  return new Response(JSON.stringify(searchResult), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
