import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL,
      siteName: process.env.SITE_NAME,
      siteDescription: process.env.SITE_DESCRIPTION,
      language: process.env.LANGUAGE,
      titleSeparator: process.env.TITLE_SEPARATOR,
      trailingSlash: true,
    },
  },
  extends: ["nuxt-seo-kit"],
  modules: [
    "@storyblok/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-icons",
  ],
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    useApiClient: true,
    apiOptions: { cache: { type: "memory" } },
  },
  image: {
    provider: "storyblok",
    storyblok: {
      baseURL: "https://a.storyblok.com",
      modifiers: {
        format: "webp",
      },
    },
  },
});
