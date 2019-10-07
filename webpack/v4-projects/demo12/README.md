## 步骤

1. 新建的方式与之前相同
2. `yarn add html-webpack-plugin@next -D`
3. `yarn add babel-loader @babel/core @babel/preset-env -D`
4. `yarn add lodash`

## Common chunk

如果没有使用这个模块，那么打包的时候每个文件都会打包`lodash`，这样重复打包同一个模块就会造成代码量太大，因此有必要把同一个模块的代码分割成单一文件，然后需要引用的时候去引用同一文件。

这个模块比较难懂，因此我会专门发一篇博客介绍这个模块。

## 注意

从`webpack4`开始就不使用`CommonsChunkPlugin`这个模块了

## 参考地址

[webpack-SplitChunks](https://webpack.js.org/plugins/split-chunks-plugin)
