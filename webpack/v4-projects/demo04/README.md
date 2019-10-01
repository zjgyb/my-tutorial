## 步骤

1. 新建的方式与之前相同
2. `yarn add style-loader css-loader -D`

## 介绍

为什么需要用到这两个包，这两个包有什么作用？

> loader让webpack能够去处理那些非JavaScript文件。loader可以将所有类型的文件转换为webpack能够处理的有效模块。

[style-loader](https://webpack.js.org/loaders/style-loader)
[css-loader](https://webpack.js.org/loaders/css-loader/)

style-loader——(Inject CSS into the DOM-将CSS注入DOM中)
css-loader——(The css-loader interprets `@import` and `url()` like `import/require()` and will resolve them-就是在css引入之后解析css)

因此两者在解析CSS的时候必不可少
