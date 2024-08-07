// craco.config.mjs
import { defineConfig } from "@craco/craco";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default defineConfig({
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
      }),
    ],
  },
});
