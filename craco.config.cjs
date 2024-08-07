// craco.config.cjs
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: "report.html",
        openAnalyzer: false,
      }),
    ],
  },
};
