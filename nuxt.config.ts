// https://nuxt.com/docs/api/configuration/nuxt-config
import * as path from "path"
// import * as path from "path"
import { dirname, join, resolve } from "path"
import { fileURLToPath } from "url"
const currentDir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  // future: {
  //   compatibilityVersion: 4,
  // },
  devtools: { enabled: true },

  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: { theme: "none" },
  },

  css: [
    join(currentDir, "./assets/css/tailwind.css"),
    join(currentDir, "./assets/css/base.css"),
    // join(currentDir, "./assets/css/primevue.css"),
  ],
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
