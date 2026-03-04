// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-01",
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {},
  app: {
    head: {
      title: "El Contemplador",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "A blog by Roosevelt Segura — exploring technology, software development, and the ideas that shape our digital world.",
        },
        { name: "theme-color", content: "#1a1520" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
        },
      ],
    },
  },
  nitro: {
    preset: "aws-amplify",
  },
});
