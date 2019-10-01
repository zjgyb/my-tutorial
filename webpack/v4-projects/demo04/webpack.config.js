const path = require('path');

module.exports = {
  entry: {
    main: "./src/index.js",
    app: "./src/app.js"
  },
  output: {
    filename: "[name].js", // 输出文件的文件名
    path: path.resolve(__dirname, "dist") // 输出文件放置目录
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};