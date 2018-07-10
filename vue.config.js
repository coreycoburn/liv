const path = require("path");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g);
  }
}

module.exports = {
  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, "./public/index.html"),
          path.join(__dirname, "./src/*.vue"),
          path.join(__dirname, "./src/components/**/*.vue"),
          path.join(__dirname, "./src/layouts/**/*.vue"),
          path.join(__dirname, "./src/pages/**/*.vue")
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ["html", "js", "vue"]
          }
        ],
        whitelist: [
          "html",
          "body",
          "fade-enter-active",
          "fade-leave-active",
          "fade-enter",
          "fade-leave-to"
        ]
      })
    ]
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear();

    // add replacement loader(s)
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
