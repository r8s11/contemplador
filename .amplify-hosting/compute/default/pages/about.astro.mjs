/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D6HJHOr6.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_S6Wz4lDU.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About</h1> ` })}`;
}, "C:/Users/rsegura/github/contemplador/src/pages/about.astro", void 0);

const $$file = "C:/Users/rsegura/github/contemplador/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
