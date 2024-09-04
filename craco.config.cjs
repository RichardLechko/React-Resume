/* const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.mode = "production";

      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        alias: {
          ...webpackConfig.resolve.alias,
          "@components": path.resolve(__dirname, "src/components"),
        },
      };

      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "report.html",
          openAnalyzer: false,
        }),
      ];

      webpackConfig.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
            extractComments: false,
          }),
        ],
        splitChunks: {
          chunks: "all",
        },
      };

      return webpackConfig;
    },
  },
};
 */

module.exports = {};
