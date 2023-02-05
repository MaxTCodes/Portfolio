/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
        }),
      ],
    },
  },
};