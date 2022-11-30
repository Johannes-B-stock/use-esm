import json from "@rollup/plugin-json";
import esbuild from "rollup-plugin-esbuild";

import pkg from "./package.json";

export default {
  input: "src/use-execa.ts",
  plugins: [esbuild({}), json()],
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
};
