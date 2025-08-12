/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_aZmHnZZG.mjs';
import 'kleur/colors';
import { A as ARTICLES_PER_PAGE, $ as $$MainLayout } from '../chunks/MainLayout_DcEVJWzI.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_BIZKkOb7.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_CGfTt67J.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DBBAVVO2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between mt-10"> <a${addAttribute("/articles?page=" + (currentPage - 1), "href")}${addAttribute(disablePrevious ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-lg pointer-events-none" : "inline-block bg-indigo-100 px-3 py-2 rounded-lg hover:bg-indigo-600 hover:text-white", "class")}>Previous</a> <a${addAttribute("/articles?page=" + (currentPage + 1), "href")}${addAttribute(disableNext ? "inline-block bg-gray-100 px-3 py-2 text-gray-400 rounded-lg pointer-events-none" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg", "class")}>Next</a> </div>`;
}, "C:/Users/rsegura/github/contemplador/src/components/Pagination.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const totalPages = Math.ceil(allBlogArticles.length / ARTICLES_PER_PAGE);
  const articlesForPage = allBlogArticles.slice((currentPage - 1) * ARTICLES_PER_PAGE, currentPage * ARTICLES_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl pb-3">Articles</h1> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <div class="grid grid-cols-3 gap-4 sm:grid-col-3"> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} ` })}`;
}, "C:/Users/rsegura/github/contemplador/src/pages/articles/index.astro", void 0);

const $$file = "C:/Users/rsegura/github/contemplador/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
