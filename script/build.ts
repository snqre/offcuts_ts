import { build } from "bun";

build({
    entrypoints: ["src/web/app.tsx"],
    format: "esm",
    minify: true,
    outdir: "src/web",
    sourcemap: "inline",
    target: "browser",
    throw: true
});