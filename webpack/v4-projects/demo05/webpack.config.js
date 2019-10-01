const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js", // 输出文件的文件名
    path: path.resolve(__dirname, "dist") // 输出文件放置目录
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 65,
              fallback: "file-loader" // 超出大小使用file-loader
            }
          }
        ]
      }
    ]
  }
};