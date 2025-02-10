const path = require("path");
const resolve = (targetPath) => {
  return path.resolve(__dirname, "..", targetPath);
};
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSS獨立檔案
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 最小化html
const ESLintPlugin = require("eslint-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  target: "web",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./build"),
    publicPath: "/",
    filename: "js/[name].[contenthash].js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".less"],
    alias: {
      "@": resolve("./src"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      title: "Vmovie New",
      template: path.resolve(__dirname, "./src/template/index.html"),
      favicon: "./src/images/icon.png",
      filename: "index.html",
      inject: "body",
    }),
    new ESLintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      {
        test: /\.jsx$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer"),
                  require("cssnano")({
                    preset: [
                      "default",
                      { discardComments: { removeAll: true } },
                    ],
                  }),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|[ot]tf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /.*font.*\.svg$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /^(?!.*font).*\.svg$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          // 可以增加其他有用到的dependency
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|antd)[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  // 取消size過大提示
  performance: { hints: false },
};
