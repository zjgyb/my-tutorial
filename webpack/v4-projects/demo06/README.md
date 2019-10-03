## 步骤

1. 新建的方式与之前相同
2. `yarn add uglifyjs-webpack-plugin -D`

## uglifyjs

1. 这个有什么用？
答：压缩代码

2. `webpack -p`已经能对文件进行压缩，为何还需要？
答：因为在压缩的时候如果需要更复杂配置，那么就需要，比如删除代码中的`console.log`

3. optimization是什么？
> Since version 4 webpack runs optimizations for you depending on the chosen mode, still all optimizations are available for manual configuration and overrides.

因为如果放到`plugins`内的时候，像`console.log`在开发模式的时候需要用到，而在生产环境不需要用到，因此放到该对象下能够更好的区分不同模式下的开发。

## 参考链接

[UglifyJsPlugin-github](https://github.com/mishoo/UglifyJS2#compress-options)
[UglifyJsPlugin-webpack](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/#uglifyoptions)