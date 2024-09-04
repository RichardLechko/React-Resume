const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ensure production mode
      webpackConfig.mode = "production";

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

      // Optimize performance
      webpackConfig.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // Remove console logs
              },
            },
            extractComments: false, // Avoid creating separate files for comments
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
