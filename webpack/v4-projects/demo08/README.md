## 步骤

1. 新建的方式与之前相同
2. `yarn add html-webpack-plugin@next -D`
3. `yarn add cross-env -D`

## DefinePlugin

可以设置环境变量，在开发环境和生产环境中使用环境变量使两者展示不同的代码

## 注意

使用的时候需要`JSON.stringify`，或者外面加`''`，因为插件会把文本外的字符串去掉，因此会报错

## 参考地址

[webpack-DefinePlugin](https://webpack.js.org/plugins/define-plugin/#root)
