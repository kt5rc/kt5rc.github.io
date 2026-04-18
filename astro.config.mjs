import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://kt5rc.github.io",
  output: "static",
  integrations: [mdx(), react()]
});
