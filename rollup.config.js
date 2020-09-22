import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: "src/app.js",
    output: {
        file: "dist/bundle.js",
        format: "esm",
        name: "nama"
    },
    plugins: [
        babel({
            exclude: "node_modules/**",
            babelHelpers: "inline"
        }),
        json(),
        commonjs()
    ]
}