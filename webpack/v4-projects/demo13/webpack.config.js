const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    app: "./src/app.js"
  },
  output: {
    filename: "[name].js", // 输出文件的文件名
    path: path.resolve(__dirname, "dist") // 输出文件放置目录
  },
  devServer: {
    port: 8000,
    compress: true,
    contentBase: './public/index.html'
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};
