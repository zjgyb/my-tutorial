## 如何开始

1. `yarn init -y`
2. `yarn add webpack webpack-cli webpack-dev-server`
3. 配置`package.json`文件
4. 新增其他文件
5. 配置`webpack.config.js`
6. 查看使用`yarn run dev`，打包使用`yarn run build`

## 注意点

1. 这里没有用到babel转换，而我使用的是ES6语法，因此webpack打包出来也是ES6，之后的例子中会介绍如何转成ES5

2. 这里`index.html`放到根文件夹中，不能放到其他文件夹，这是一个问题，像vue中放到public文件夹中能正常使用，这里留到之后解决。