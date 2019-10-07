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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "demo12",
      minify: true
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      name: 'lodash'
      // cacheGroups: {
      //   commons: {
      //     name: "lodash",
      //     chunks: "all",
      //     minChunks: 2
      //   }
      // }
    }
  }
};
