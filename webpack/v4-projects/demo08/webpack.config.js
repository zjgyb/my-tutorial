const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js", // 输出文件的文件名
    path: path.resolve(__dirname, "dist") // 输出文件放置目录
  },
  devServer: {
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "demo08",
      minify: true
    }),
    devFlagPlugin
  ]
};
