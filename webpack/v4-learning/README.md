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

### plugins

> 从打包优化和压缩，一直到重新定义环境中的变量。

其实就是各式各样的包，能够优化打包出来的文件，贯穿打包整个过程。