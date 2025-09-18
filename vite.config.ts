import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const viteConfig = defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        /* jsxImportSource: …, otherOptions… */
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
});

export default viteConfig;
