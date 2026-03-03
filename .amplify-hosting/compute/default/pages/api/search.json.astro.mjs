import { g as getCollection } from '../../chunks/_astro_content_CqCRq4m8.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  const query = url.searchParams.get("query");
  if (query === null) {
    return new Response(
      JSON.stringify({
        error: "Query param is missing"
      }),
      {
        status: 400,
        //bad request
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  const allBlogArticles = await getCollection(
    "blog",
    (entry) => !entry.data.title.startsWith("Draft")
  );
  const q = query.toLowerCase();
  const searchResult = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(q);
    const bodyMatch = article.body.toLowerCase().includes(q);
    const slugMatch = article.slug.toLowerCase().includes(q);
    return titleMatch || bodyMatch || slugMatch;
  });
  return new Response(JSON.stringify(searchResult), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
