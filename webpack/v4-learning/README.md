## 内容简介

这里主要是根据官网的例子来介绍相关的内容

## webpack是什么？

> 本质上，webpack是一个现代JavaScript应用程序的静态模块打包器。当webpack处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或者多个bundle。

## 四个核心概念

### entry

> 指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始。

### output

> 告诉webpack在哪里输出它所创建的bundles，以及如何命名这些文件。

### loader

> 让webpack能够处理那些非JavaScript文件(webpack自身只理解JavaScript)。loader可以将所有类型的文件转换为webpack能够处理的有效模块。

在`webpack.config.js`中以`module`键值表示

[loader相关](https://webpack.js.org/loaders/)

### plugins

> 从打包优化和压缩，一直到重新定义环境中的变量。

其实就是各式各样的包，能够优化打包出来的文件，贯穿打包整个过程。

## 其他重要概念

### Optimization

> Since version 4 webpack runs optimizations for you depending on the chosen `mode`, still all optimizations are available for manual configuration and overrides.

大意就是到了webpack第四版能够根据所选的`mode`环境进行优化

### mode

三个可选环境：`none`、`development`、`production`

### resolve

### devServer

可以配置调试的端口、热更新等等

### watch

### Externals

### performance

### node

与`nodejs`相关