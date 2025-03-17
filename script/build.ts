import { build } from "bun";

build({
    entrypoints: ["./src/web/app.tsx"],
    format: "esm",
    minify: false,
    outdir: "./src/web",
    sourcemap: "inline",
});