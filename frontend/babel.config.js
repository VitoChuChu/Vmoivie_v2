module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
  ],
  plugins: [
    // 讓Antd的CSS style按需求載入
    ["import", { libraryName: "antd", libraryDirectory: "lib", style: "css" }],
  ],
};
