const path = require("path");

module.exports = {
  entry: {
    // 多个入口文件
    main: "./src/index.js",
    app: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
};