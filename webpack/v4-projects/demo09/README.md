## 步骤

1. 新建的方式与之前相同
2. `yarn add html-webpack-plugin@next -D`
3. `yarn add babel-loader @babel/core @babel/preset-env -D`

## 解释

### babel-loader

> This package allows transpiling JavaScript files using **Babel** and **webpack**. 允许用babel和webpack转义JS文件

### @babel/core

> Babel compiler core. babel的核心模块

### @babel/preset-env

> @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).

大意就是能够把最新的ES语法转换成ES5

为什么一个babel-loader不能解决呢？我的理解是分开的话各有各的功能，方便配置，就像有的人不喜欢转义，因此就没有必要使用`@babel/preset-env`这个包。

## 注意

`babel-loader`是很慢的，因此有些文件夹下其实没有必要转义，例如`node_modules`，因此使用`exclude`去除一些没有必要转义的文件

## 参考地址

[webpack-babel loader](https://webpack.js.org/loaders/babel-loader/#root)
