import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const imagesDirectory = resolve("images");

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-image-directory",
      generateBundle() {
        for (const filename of readdirSync(imagesDirectory)) {
          this.emitFile({
            type: "asset",
            fileName: `images/${filename}`,
            source: readFileSync(resolve(imagesDirectory, filename)),
          });
        }
      },
    },
  ],
});
