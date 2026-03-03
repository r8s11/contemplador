/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DpVWNvDj.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DO-PG9VO.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_CMF2OBuy.mjs';
import { $ as $$SearchForm } from '../../chunks/SearchForm_BFE0zwHc.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DmTC5oBN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  const searchResults = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const bodyMatch = article.body.toLocaleLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLocaleLowerCase());
    return titleMatch || bodyMatch || slugMatch;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Results" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-4"> <!-- Back link --> <a href="/articles" class="inline-flex items-center gap-2 text-light-600 hover:text-accent font-medium text-sm mb-6 transition-colors duration-200 group"> <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
All Articles
</a> <div class="max-w-md mb-8"> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} </div> <div class="mb-8" style="animation: fadeUp 0.6s ease both 0.1s"> <h1 class="font-display text-2xl sm:text-3xl font-bold text-primary">
Results for <span class="text-accent">"${query}"</span> </h1> <p class="text-light-600 mt-1 font-hand text-lg"> ${searchResults.length} ${searchResults.length === 1 ? "article" : "articles"} found
</p> </div> ${searchResults.length > 0 ? renderTemplate`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div>` : renderTemplate`<div class="text-center py-16"> <span class="font-hand text-6xl text-light-400">🔍</span> <p class="text-light-600 text-lg mt-4">
No articles found. Try a different search term.
</p> </div>`} </section> ` })}`;
}, "/Users/roosevelt/work/contemplador/src/pages/articles/search.astro", void 0);

const $$file = "/Users/roosevelt/work/contemplador/src/pages/articles/search.astro";
const $$url = "/articles/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
