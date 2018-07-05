const path = require("path");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");

module.exports = {
  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, "./src/*.vue"),
          path.join(__dirname, "./src/components/**/*.vue"),
          path.join(__dirname, "./src/pages/**/*.vue")
        ])
      })
    ]
  }
};
