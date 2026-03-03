/* empty css                                 */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DpVWNvDj.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_BaURj9t1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto py-8"> <!-- Header --> <div class="text-center mb-12" style="animation: fadeUp 0.6s ease both 0.1s"> <p class="font-hand text-2xl text-accent mb-2">Nice to meet you</p> <h1 class="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">
About Me
</h1> <div class="w-16 h-px bg-accent/40 mx-auto"></div> </div> <!-- Content --> <div class="space-y-8"> <!-- Intro card --> <div class="bg-light rounded-2xl p-8 border border-accent/10" style="animation: fadeUp 0.6s ease both 0.2s"> <p class="text-lg text-light-700 leading-relaxed">
Hi, I'm <strong class="text-primary">Roosevelt Segura</strong>.
          Welcome to
<em class="font-hand text-accent text-xl">El Contemplador</em> — my digital
          sanctuary where code meets contemplation. This space is where I share my
          journey through web development, fatherhood, dance, and the beautiful messiness
          of life.
</p> </div> <!-- What I do --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> <div class="bg-light rounded-2xl p-6 border border-accent/10 hover:border-accent/25 transition-all duration-400 hover:-translate-y-0.5" style="animation: fadeUp 0.6s ease both 0.3s"> <div class="text-3xl mb-3">💻</div> <h3 class="font-display text-lg font-bold text-primary mb-2">
Web Development
</h3> <p class="text-light-600 text-sm leading-relaxed">
Building modern web experiences with tools like Astro, TypeScript,
            and Tailwind CSS. Always exploring what’s next in the web platform.
</p> </div> <div class="bg-light rounded-2xl p-6 border border-accent/10 hover:border-accent/25 transition-all duration-400 hover:-translate-y-0.5" style="animation: fadeUp 0.6s ease both 0.4s"> <div class="text-3xl mb-3">💃</div> <h3 class="font-display text-lg font-bold text-primary mb-2">
Dance
</h3> <p class="text-light-600 text-sm leading-relaxed">
A passionate dancer who believes movement is another form of
            expression. Dance keeps me grounded and reminds me that not
            everything needs logic.
</p> </div> <div class="bg-light rounded-2xl p-6 border border-accent/10 hover:border-accent/25 transition-all duration-400 hover:-translate-y-0.5" style="animation: fadeUp 0.6s ease both 0.5s"> <div class="text-3xl mb-3">👨‍👧</div> <h3 class="font-display text-lg font-bold text-primary mb-2">
Fatherhood
</h3> <p class="text-light-600 text-sm leading-relaxed">
Being a dad is the most important role I play. It shapes how I see
            the world and drives me to build things that matter.
</p> </div> <div class="bg-light rounded-2xl p-6 border border-accent/10 hover:border-accent/25 transition-all duration-400 hover:-translate-y-0.5" style="animation: fadeUp 0.6s ease both 0.6s"> <div class="text-3xl mb-3">🤔</div> <h3 class="font-display text-lg font-bold text-primary mb-2">
Contemplation
</h3> <p class="text-light-600 text-sm leading-relaxed">
A curious observer of human nature and consciousness. I believe the
            best code comes from understanding people first.
</p> </div> </div> <!-- About this blog --> <div class="bg-primary rounded-2xl p-8 text-light" style="animation: fadeUp 0.6s ease both 0.7s"> <h2 class="font-hand text-3xl text-accent mb-4">About this blog</h2> <p class="text-light-300 leading-relaxed">
El Contemplador is where I document my thoughts on modern web
          development, share what I’m learning, and occasionally wander into
          reflections about life itself. Whether you’re here for the code or the
          stories, I hope you find something that resonates.
</p> <div class="mt-6"> <a href="/articles" class="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-light rounded-xl font-display font-medium hover:bg-accent-400 transition-colors duration-300">
Read my articles
<span class="font-hand text-lg">→</span> </a> </div> </div> </div> </section> ` })}`;
}, "/Users/roosevelt/work/contemplador/src/pages/about.astro", void 0);

const $$file = "/Users/roosevelt/work/contemplador/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
