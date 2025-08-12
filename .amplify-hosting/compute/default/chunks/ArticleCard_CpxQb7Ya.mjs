import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderComponent, r as renderTemplate } from './astro/server_aZmHnZZG.mjs';
import 'kleur/colors';
import { f as formatDate } from './MainLayout_DsFAw9a5.mjs';
import { $ as $$Tags } from './Tags_BlajYare.mjs';

const $$Astro = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-md  mt-10"> <div class="flex bg-slate-200 rounded-lg overflow-hidden shadow-lg"> <div class="p-6"> <h2 class="text-2xl font-semibold mb-2"> <a${addAttribute("/articles/" + article.slug, "href")}>${article.data.title}</a> </h2> <p class="text-gray-600 text-sm mb-4">${formatDate(article.data.pubDate)}</p> ${renderComponent($$result, "Tags", $$Tags, { "tags": article.data.tags })} </div> </div> </div>`;
}, "C:/Users/rsegura/github/contemplador/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
