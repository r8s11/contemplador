/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_D6HJHOr6.mjs';
import 'kleur/colors';
import { A as ARTICLES_PER_PAGE, $ as $$MainLayout } from '../chunks/MainLayout_XdRD5GnF.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_CT7fS5pm.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_BI-w0vjS.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_CZTV9l0n.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between mt-10"> <a${addAttribute("/articles?page=" + (currentPage - 1), "href")}${addAttribute(disablePrevious ? "inline-block bg-neutral-100 px-3 py-2 text-neutral-400 rounded-lg pointer-events-none" : "inline-block bg-accent-100 px-3 py-2 text-accent-700 rounded-lg hover:bg-accent hover:text-light transition-colors duration-200", "class")}>
Previous
</a> <a${addAttribute("/articles?page=" + (currentPage + 1), "href")}${addAttribute(disableNext ? "inline-block bg-neutral-100 px-3 py-2 text-neutral-400 rounded-lg pointer-events-none" : "inline-block bg-accent-100 px-3 py-2 text-accent-700 rounded-lg hover:bg-accent hover:text-light transition-colors duration-200", "class")}>
Next
</a> </div>`;
}, "C:/Users/rsegura/github/contemplador/src/components/Pagination.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog", (entry) => {
    return !entry.data.title.startsWith("Draft");
  })).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
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
