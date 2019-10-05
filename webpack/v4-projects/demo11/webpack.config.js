const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js", // 输出文件的文件名
    path: path.resolve(__dirname, "dist") // 输出文件放置目录
  },
  devServer: {
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.bundle\.js$/,
        use: {
          loader: "bundle-loader",
          options: {
            lazy: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "demo11",
      minify: true
    })
  ]
};
