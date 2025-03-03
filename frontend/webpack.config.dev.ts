import path from "path";
import { merge } from "webpack-merge";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import webpackConfigBase from "./webpack.config.base";
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const configuration: Configuration = merge(webpackConfigBase, {
  mode: "development",
  devtool: "eval",
  devServer: {
    static: {
      directory: path.join(__dirname, "./build/ts"),
    },
    port: 3001,
    compress: true,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  // bundle size analyzer
  // plugins: [new BundleAnalyzerPlugin()],
});

export default configuration;
