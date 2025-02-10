const path = require("path");
const { merge } = require("webpack-merge");
const webpackConfigBase = require("./webpack.config.base");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(webpackConfigBase, {
  mode: "development",
  devtool: "eval",
  devServer: {
    static: {
      directory: path.join(__dirname, "./build/js"),
    },
    port: 3000,
    compress: true,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  // bundle size analyzer
  // plugins: [new BundleAnalyzerPlugin()],
});
