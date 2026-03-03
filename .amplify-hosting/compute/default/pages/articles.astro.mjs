/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DpVWNvDj.mjs';
import 'piccolore';
import { A as ARTICLES_PER_PAGE, $ as $$MainLayout } from '../chunks/MainLayout_DO-PG9VO.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_CMF2OBuy.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_BFE0zwHc.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DmTC5oBN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="flex items-center justify-between mt-12 pt-8 border-t border-accent/10" aria-label="Pagination"> <a${addAttribute("/articles?page=" + (currentPage - 1), "href")}${addAttribute([
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
    disablePrevious ? "bg-light-100 text-light-400 cursor-not-allowed pointer-events-none" : "bg-white text-primary border border-light-300 hover:border-accent hover:text-accent shadow-sm hover:shadow-md"
  ], "class:list")}${addAttribute(disablePrevious ? "true" : void 0, "aria-disabled")}> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Previous
</a> <span class="font-hand text-xl text-light-500">
Page ${currentPage} </span> <a${addAttribute("/articles?page=" + (currentPage + 1), "href")}${addAttribute([
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
    disableNext ? "bg-light-100 text-light-400 cursor-not-allowed pointer-events-none" : "bg-accent text-light hover:bg-accent-400 shadow-sm hover:shadow-md"
  ], "class:list")}${addAttribute(disableNext ? "true" : void 0, "aria-disabled")}>
Next
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </nav>`;
}, "/Users/roosevelt/work/contemplador/src/components/Pagination.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog", (entry) => {
    return !entry.data.title.startsWith("Draft");
  })).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const totalPages = Math.ceil(
    allBlogArticles.length / ARTICLES_PER_PAGE
  );
  const articlesForPage = allBlogArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Articles" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-4"> <!-- Header --> <div class="mb-8" style="animation: fadeUp 0.6s ease both 0.1s"> <p class="font-hand text-xl text-accent mb-1">Browse & discover</p> <h1 class="font-display text-3xl sm:text-4xl font-bold text-primary mb-6">
All Articles
</h1> <div class="max-w-md"> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} </div> </div> <!-- Articles grid --> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} </section> ` })}`;
}, "/Users/roosevelt/work/contemplador/src/pages/articles/index.astro", void 0);

const $$file = "/Users/roosevelt/work/contemplador/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
