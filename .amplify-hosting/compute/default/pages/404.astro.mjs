/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D6HJHOr6.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_S6Wz4lDU.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "SITE_TITLE": "404 - Page not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-items-center gap-7"> <h1 class="text-5xl">404</h1> <p class="text-2xl mb-10">Sorry, We couldn't find the page your were looking for.</p> <a href="/" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Go back home</a> </div> ` })}`;
}, "C:/Users/rsegura/github/contemplador/src/pages/404.astro", void 0);

const $$file = "C:/Users/rsegura/github/contemplador/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
