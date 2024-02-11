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
      }
    );
  }
};

const allBlogArticles: CollectionEntry<'blog'>[] = await getCollection(
    'blog'
);