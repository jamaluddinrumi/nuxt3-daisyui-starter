import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@storyblok/nuxt', "@nuxtjs/tailwindcss", "nuxt-icon"],
  storyblok: { accessToken: 'ae7No8GPaQ2mzyt2r0rjoQtt' },
});
