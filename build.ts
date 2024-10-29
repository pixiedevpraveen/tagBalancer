await Bun.build({
    entrypoints: ["./src/index.ts"],
    outdir: "./build",
    sourcemap: "external",
    minify: true
});
