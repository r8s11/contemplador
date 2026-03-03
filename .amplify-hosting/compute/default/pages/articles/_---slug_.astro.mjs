/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DpVWNvDj.mjs';
import 'piccolore';
import { $ as $$MainLayout, f as formatDate } from '../../chunks/MainLayout_DO-PG9VO.mjs';
import { a as getEntry } from '../../chunks/_astro_content_DmTC5oBN.mjs';
import { $ as $$Tags } from '../../chunks/Tags_C1MhH0KD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("blog", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": entry.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-3xl mx-auto py-4"> <!-- Back link --> <a href="/articles" class="inline-flex items-center gap-2 text-light-500 hover:text-accent font-display text-sm mb-8 transition-colors duration-300 group"> <svg class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Back to Articles
</a> <!-- Article header --> <header class="mb-10" style="animation: fadeUp 0.6s ease both 0.1s"> <div class="mb-4"> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} </div> <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4"> ${entry.data.title} </h1> <div class="flex items-center gap-3 text-light-600"> <div class="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center"> <span class="text-accent text-sm font-display font-bold"> ${entry.data.author?.charAt(0) || "R"} </span> </div> <div> <p class="text-sm font-display font-medium text-primary"> ${entry.data.author} </p> <p class="font-hand text-lg text-light-500"> ${formatDate(entry.data.pubDate)} </p> </div> </div> </header> <!-- Decorative divider --> <div class="flex items-center gap-4 mb-10"> <div class="flex-1 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div> <span class="text-accent/40 font-hand">~</span> <div class="flex-1 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div> </div> <!-- Article content --> <div class="prose" style="animation: fadeUp 0.6s ease both 0.25s"> ${renderComponent($$result2, "Content", Content, {})} </div> <!-- Article footer --> <div class="mt-12 pt-8 border-t border-accent/10"> <div class="bg-light rounded-2xl p-6 border border-accent/10 text-center"> <p class="font-hand text-2xl text-accent mb-2">
Thanks for reading! 🤔
</p> <p class="text-light-600 text-sm">
If you enjoyed this, explore more on the
<a href="/articles" class="warm-link text-accent hover:text-accent-400 font-display font-medium transition-colors">articles page</a>.
</p> </div> </div> </article> ` })}`;
}, "/Users/roosevelt/work/contemplador/src/pages/articles/[...slug].astro", void 0);

const $$file = "/Users/roosevelt/work/contemplador/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
