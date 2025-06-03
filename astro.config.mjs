// config/astro/astro.config.mjs
import { defineConfig } from "astro/config";

const isDev = process.env.NODE_ENV === "development";
const isPreview = process.argv.includes("preview");
const isGHPages = process.env.GITHUB_ACTIONS === "true"; // Автоопределение GitHub Actions

export default defineConfig({
    site: "https://web22des.github.io",
    base: isDev || isPreview || !isGHPages ? "/" : "/stellar-star/",
    trailingSlash: "always",
    output: "static", // Явно указываем статический режим
});
