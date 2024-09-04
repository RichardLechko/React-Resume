// craco.config.cjs
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add an alias for '@components'
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        alias: {
          ...webpackConfig.resolve.alias,
          "@components": path.resolve(__dirname, "src/components"),
        },
      };

      // Add the BundleAnalyzerPlugin
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "report.html",
          openAnalyzer: false,
        }),
      ];

      return webpackConfig;
    },
  },
};
