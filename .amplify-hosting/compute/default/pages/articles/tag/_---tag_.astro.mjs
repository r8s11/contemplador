/* empty css                                       */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DpVWNvDj.mjs';
import 'piccolore';
import { c as capitalize, $ as $$MainLayout } from '../../../chunks/MainLayout_DO-PG9VO.mjs';
import { $ as $$ArticleCard } from '../../../chunks/ArticleCard_CMF2OBuy.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_DmTC5oBN.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag } = Astro2.params;
  if (tag === void 0) {
    throw new Error("Tag is required");
  }
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const tagArticles = allBlogArticles.filter(
    (article) => article.data.tags.includes(tag)
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `#${capitalize(tag)}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-4"> <!-- Back link --> <a href="/articles" class="inline-flex items-center gap-2 text-light-600 hover:text-accent font-medium text-sm mb-6 transition-colors duration-200 group"> <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
All Articles
</a> <div class="mb-8"> <span class="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-3"> <span class="text-accent-600">#</span>${capitalize(tag)} </span> <h1 class="font-display text-2xl sm:text-3xl font-bold text-primary">
Articles tagged <span class="text-accent">#${capitalize(tag)}</span> </h1> <p class="text-light-600 mt-1 font-hand text-lg"> ${tagArticles.length} ${tagArticles.length === 1 ? "article" : "articles"} </p> </div> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${tagArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </section> ` })}`;
}, "/Users/roosevelt/work/contemplador/src/pages/articles/tag/[...tag].astro", void 0);

const $$file = "/Users/roosevelt/work/contemplador/src/pages/articles/tag/[...tag].astro";
const $$url = "/articles/tag/[...tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
