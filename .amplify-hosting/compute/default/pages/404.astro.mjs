/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DpVWNvDj.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_BaURj9t1.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center py-20 text-center" style="animation: fadeUp 0.6s ease both 0.1s"> <span class="font-hand text-8xl sm:text-9xl text-accent/80 mb-4 animate-float">404</span> <h1 class="font-display text-2xl sm:text-3xl font-bold text-primary mb-3">
Lost in contemplation
</h1> <p class="text-light-600 text-lg mb-8 max-w-md">
This page wandered off somewhere. Let’s guide you back.
</p> <a href="/" class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-light rounded-xl font-display font-medium hover:bg-accent-400 transition-all duration-300 shadow-sm hover:shadow-md"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg>
Go back home
</a> </div> ` })}`;
}, "/Users/roosevelt/work/contemplador/src/pages/404.astro", void 0);

const $$file = "/Users/roosevelt/work/contemplador/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
