const { defineConfig } = require("cypress");
const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const Webpack = require("webpack");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on) {
      const options = webpackPreprocessor.defaultOptions;
      options.webpackOptions.plugins = options.webpackOptions.plugins ?? [];
      options.webpackOptions.plugins.push(
        new Webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
          resource.request = resource.request.replace(/^node:/, "");
        })
      );

      on("file:preprocessor", webpackPreprocessor(options));
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
