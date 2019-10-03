## 步骤

1. 新建的方式与之前相同
2. `yarn add html-webpack-plugin@next -D`

## html-webpack-plugin

1. 有什么作用？
答：能够自动创建一个HTML文件，而不需要手动创建。

2. 为什么我安装包的时候使用了@next，而不用稳定版本？
答：现在稳定版本是`3.2.0`，但是当我压缩代码的时候发现并不能压缩html文件，看gitbub评论说需要安装最新版本，因此我使用了最新的版本来使html代码能够被压缩。

3. 为什么我不用`open-browser-webpack-plugin`插件?
答：因为在`webpack-dev-server`中有相似的功能，因此我就不需要用该插件了。

## 参考地址

- [webpack-HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
- [github-HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin#options)
- [webpack-DevServer](https://webpack.js.org/configuration/dev-server/)