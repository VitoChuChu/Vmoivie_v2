const { merge } = require("webpack-merge");
const webpackConfigBase = require("./webpack.config.base");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(webpackConfigBase, {
  mode: "production",
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
});
