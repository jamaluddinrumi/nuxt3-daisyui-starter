import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    "@storyblok/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-icons",
  ],
  storyblok: { accessToken: "ae7No8GPaQ2mzyt2r0rjoQtt" },
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
