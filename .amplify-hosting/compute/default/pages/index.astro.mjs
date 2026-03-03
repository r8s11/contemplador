/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DpVWNvDj.mjs';
import 'piccolore';
import { f as formatDate, $ as $$MainLayout, H as HOMEPAGE_ARTICLE_LIMIT } from '../chunks/MainLayout_BaURj9t1.mjs';
import { g as getCollection } from '../chunks/_astro_content_Y6Zlw7R_.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_BEvnruVv.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_BFE0zwHc.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$MostRecentArticle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MostRecentArticle;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute("/articles/" + article.slug, "href")} class="group block relative overflow-hidden rounded-2xl border border-accent/15 bg-gradient-to-br from-light via-light to-light-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"> <!-- Warm ambient corner glow --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true"> <div class="absolute -top-12 -right-12 w-48 h-48 bg-accent rounded-full opacity-[0.07] blur-[60px]"></div> </div> <!-- Decorative notebook rule lines --> <div class="absolute inset-x-8 top-12 space-y-6 opacity-[0.04]" aria-hidden="true"> <div class="h-px bg-primary"></div> <div class="h-px bg-primary"></div> <div class="h-px bg-primary"></div> <div class="h-px bg-primary"></div> </div> <div class="relative p-8 sm:p-10 min-h-[260px] flex flex-col justify-between"> <!-- Latest badge --> <div class="flex items-center gap-3 mb-6"> <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/15 text-accent rounded-full text-xs font-display font-semibold tracking-wide uppercase"> <span class="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
Latest
</span> <span class="font-hand text-light-500 text-base"> ${formatDate(article.data.pubDate)} </span> </div> <div class="space-y-4"> <h2 class="font-display text-2xl sm:text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-snug"> ${article.data.title} </h2> <p class="font-hand text-light-500 text-lg leading-relaxed">
Read this contemplation →
</p> </div> <div class="flex mt-6 flex-wrap gap-2"> ${article.data.tags.map((tag) => renderTemplate`<span class="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-display font-medium border border-accent/15 group-hover:border-accent/30 transition-colors duration-300">
#${tag} </span>`)} </div> </div> <!-- Animated accent underline --> <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div> </a>`;
}, "/Users/roosevelt/work/contemplador/src/components/MostRecentArticle.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = (await getCollection("blog", (entry) => {
    return !entry.data.title.startsWith("Draft");
  })).sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  const mostRecentArticle = allBlogArticles[0];
  const otherArticles = allBlogArticles.slice(1);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-8 sm:pt-16 pb-12 sm:pb-20 mb-8"> <!-- Warm ambient glow --> <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true"> <div class="absolute -top-20 right-1/4 w-96 h-96 bg-accent rounded-full opacity-[0.06] blur-[100px]"></div> <div class="absolute bottom-0 -left-20 w-72 h-72 bg-secondary rounded-full opacity-[0.05] blur-[80px]"></div> </div> <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start"> <!-- Left: editorial intro, offset from grid --> <div class="lg:col-span-5 space-y-6 animate-fade-up"> <p class="font-hand text-2xl text-accent stagger-1" style="animation: fadeUp 0.6s ease both 0.15s">
Welcome to my corner of the web
</p> <h1 class="font-display text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-primary stagger-2" style="animation: fadeUp 0.6s ease both 0.3s">
Thoughts, stories &
<span class="ink-underline text-accent">reflections</span> </h1> <p class="text-light-600 text-lg sm:text-xl leading-relaxed max-w-md stagger-3" style="animation: fadeUp 0.6s ease both 0.45s">
A personal space for exploring web development, life lessons, and
          everything in between. Pull up a chair.
</p> <div class="max-w-sm pt-2 stagger-4" style="animation: fadeUp 0.6s ease both 0.6s"> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} </div> </div> <!-- Right: featured article, overlapping the grid slightly for asymmetry --> <div class="lg:col-span-7 lg:-mt-4" style="animation: fadeIn 0.8s ease both 0.5s"> ${mostRecentArticle && renderTemplate`${renderComponent($$result2, "MostRecentArticle", $$MostRecentArticle, { "article": mostRecentArticle })}`} </div> </div> </section>  <div class="flex items-center gap-4 mb-12 px-4" aria-hidden="true"> <div class="flex-1 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div> <span class="font-hand text-accent/40 text-sm tracking-widest">~ ~ ~</span> <div class="flex-1 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div> </div>  <section class="mb-16"> <div class="flex items-end justify-between mb-10" style="animation: fadeUp 0.6s ease both 0.2s"> <div> <span class="font-hand text-accent text-lg">Keep reading</span> <h2 class="font-display text-2xl sm:text-3xl font-bold text-primary mt-1">
More Articles
</h2> </div> <a href="/articles" class="hidden sm:inline-flex items-center gap-2 warm-link text-sm font-display tracking-wide text-primary hover:text-accent transition-colors duration-300 group">
View all
<svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path> </svg> </a> </div> <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${otherArticles.slice(0, HOMEPAGE_ARTICLE_LIMIT).map((article, i) => renderTemplate`<div${addAttribute(`animation: fadeUp 0.6s ease both ${0.3 + i * 0.15}s`, "style")}> ${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })} </div>`)} </div> <div class="mt-10 text-center sm:hidden"> <a href="/articles" class="inline-flex items-center gap-2 font-display text-accent hover:text-accent-400 transition-colors duration-200">
View all articles
<span class="font-hand">→</span> </a> </div> </section> ` })}`;
}, "/Users/roosevelt/work/contemplador/src/pages/index.astro", void 0);

const $$file = "/Users/roosevelt/work/contemplador/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
