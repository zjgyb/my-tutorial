const path = require('path');

module.exports = {
  entry: "./src/index.js", // 单一入口文件
  output: {
    filename: "main.js", // 输出文件的文件名
    path: path.resolve(__dirname, "dist") // 输出文件放置目录
  }
};