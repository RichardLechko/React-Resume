const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

console.log("config-overrides active");

module.exports = function override(config, env) {
  if (env === "production") {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "bundle-report.html",
      })
    );
  } else {
    // Development-specific overrides, if any, can go here
  }
  return config;
};
