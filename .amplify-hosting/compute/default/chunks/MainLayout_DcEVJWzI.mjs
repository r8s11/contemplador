import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, a as createAstro, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_aZmHnZZG.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_DBBAVVO2.mjs';

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-gray-600 text-white"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="/" class="flex item-center space-x-3 rtl:space=x-reverse">Contemplador
</a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden w-full md:block md:w-auto" id="navbar-default"> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 text-white rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"> <li> <a href="/" class="block py-2 px-3 rounded md:p-0 hover:text-indigo-400" aria-current="page">Home</a> </li> <li> <a href="/articles" class="block py-2 px-3 rounded md:p-0 hover:text-indigo-400">All Articles</a> </li> <li> <a href="/about" class="block py-2 px-3 rounded md:p-0 hover:text-indigo-400">About</a> </li> </ul> </div> </div> </nav>`;
}, "C:/Users/rsegura/github/contemplador/src/components/Nav.astro", void 0);

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString(void 0, options);
}
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = await getCollection("blog");
  const tags = allBlogArticles.flatMap((article) => article.data.tags);
  const uniqueTags = [...new Set(tags)];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-indigo-600 text-white"> <div class="container mx-auto mt-8 max-w-screen-xl px-8"> <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"> <div class="mt-6"> <h3 class="text-lg font-semibold mb-4">About</h3> <p class="text-white text-sm">
El Contemplador is a personal blog by Roosevelt Segura. The intent of
          this blog is to display web develoment skills and also to share thought
          and ideas.
</p> </div> <div class="mt-6"> <h3 class="text-xl font-semibold mb-4">Categories</h3> <ul class="text-white text-sm"> ${uniqueTags.map((tag) => renderTemplate`<li class="mb-2"> <a${addAttribute("/articles/tag/" + tag, "href")}>#${capitalize(tag)}</a> </li>`)} </ul> </div> <div class="mt-6"> <h3 class="text-xl font-semibold mb-4">Contact</h3> <ul class="text-white text-sm"> <li class="mb-2"><a href="#">Email</a></li> <li class="mb-2"><a href="#">Facebook</a></li> <li class="mb-2"><a href="#">Instagram</a></li> <li class="mb-2"><a href="#">Linkedin</a></li> <li class="mb-2"><a href="#">Twitter</a></li> </ul> </div> </div> </div> <p class="text-end text-xs">Roosevelt Segura</p> </footer>`;
}, "C:/Users/rsegura/github/contemplador/src/components/Footer.astro", void 0);

const SITE_TITLE = "El Contemplador";
const SITE_DESCRIPTION = "Demo site for porfolio";
const HOMEPAGE_ARTICLE_LIMIT = 3;
const ARTICLES_PER_PAGE = 3;

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta name="description"${addAttribute(SITE_DESCRIPTION, "content")}><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${SITE_TITLE} 🤔 ${title}</title>${renderHead()}</head> <body class=""> ${renderComponent($$result, "Nav", $$Nav, {})} <section class="container mx-auto max-w-screen-xl mt-10 px-8"> ${renderSlot($$result, $$slots["default"])} </section> ${renderComponent($$result, "Foorter", $$Footer, {})} </body></html>`;
}, "C:/Users/rsegura/github/contemplador/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, ARTICLES_PER_PAGE as A, HOMEPAGE_ARTICLE_LIMIT as H, capitalize as c, formatDate as f };
