## webpack的一些命令

+ `webpack`对项目进行打包
+ `webpack -p`对打包的文件进行压缩
+ `webpack --watch`——自动监控文件的改变
+ `webpack -d`提供SourceMaps，方便调试
+ `webpack --colors`输出结果彩色显示
+ `webpack --config filename`指定配置文件

+ `npm run build -- --config filename`使用npm命令指定配置文件
+ `yarn run build --config filename`使用yarn命令指定配置文件

## 需要了解的配置

- [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)

## 其他介绍

webpack是0配置的，所以可以直接用`npx webpack`来实现打包，打包过程会寻找`index.js`，然后打包出的文件放到`dist`文件夹下，默认的打包出的文件名是`main.js`，如果想要更好的配置，那么就在根目录创建`webpack.config.js`进行配置

## 文件介绍

+ [单文件入口](./demo01/webpack.config.js)
+ [多文件入口](./demo02/webpack.config.js)
+ [plugins-vue打包](./demo03/webpack.config.js)
+ [module-引入CSS](./demo04/webpack.config.js)
+ [module-引入图片](./demo05/webpack.config.js)
+ [optimization-代码压缩](./demo06/webpack.config.js)
+ [plugins-自动生成html文件](./demo07/webpack.config.js)
+ [plugins-设置不同模式全局变量](./demo08/webpack.config.js)
+ [module-babel转换](./demo09/webpack.config.js)
+ [import异步&按需加载](./demo10/webpack.config.js)
+ [module-异步&按需加载](./demo11/webpack.config.js)
+ [optimization-代码分割](./demo12/webpack.config.js)
+ [devServer](./demo13/webpack.config.js)
