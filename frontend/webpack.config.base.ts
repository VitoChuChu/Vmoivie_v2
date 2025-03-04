import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { Configuration } from "webpack";

const config: Configuration = {
  target: "web",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.join(__dirname, "./build"),
    publicPath: "/Vmoivie_v2/",
    filename: "js/[name].[contenthash].js",
    clean: true,
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".css",
      ".less",
      ".ts",
      ".tsx",
    ],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      title: "Vmovie New",
      template: path.resolve(__dirname, "./src/public/index.html"),
      favicon: "./src/images/icon.png",
      filename: "index.html",
      inject: "body",
    }),
    new ESLintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
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
          // "sass-loader",
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

export default config;
