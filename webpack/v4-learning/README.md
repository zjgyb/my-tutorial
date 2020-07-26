## 内容简介

这里主要是根据官网以及其他教程来介绍相关内容。

## webpack是什么？

> 本质上，webpack是一个现代JavaScript应用程序的静态模块打包器。当webpack处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或者多个bundle。

## 功能

> 代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布

## 四个核心概念

### entry

入口文件

> 指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始。

```js
module.exports = {
  entry: 'main.js', // 多页应用时是一个对象
}
```

### output

打包后的文件名

> 告诉webpack在哪里输出它所创建的bundles，以及如何命名这些文件。

- filename: 打包后的命名文件名格式，`filename: 'bundle.js'`具体的文件名，`filename: 'bundle.[hash:9].js'`表示打包出来带有hash
- path: 打包路径，**必须是绝对路径**
- publicPath: 打包后文件加上统一的前缀，用于加载外部资源

代码演示：

```js
const path = require('path');

module.exports = {
  // ...
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), // 必须是绝对路径
  }
  // ...
}
```

- publicPath

### loader

> 让webpack能够处理那些非JavaScript文件(webpack自身只理解JavaScript)。loader可以将所有类型的文件转换为webpack能够处理的有效模块。

在`webpack.config.js`中以`module`键值表示

[loader相关](https://webpack.js.org/loaders/)

```js
module.exports = {
  // ...
  module: {
    noParse: /jquery/, // 忽略安装包内引入其他依赖库，能够加快构建速度
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
```

### plugins

> 从打包优化和压缩，一直到重新定义环境中的变量。

其实就是各式各样的包，能够优化打包出来的文件，贯穿打包整个过程。

## 其他重要概念

### Optimization

> Since version 4 webpack runs optimizations for you depending on the chosen `mode`, still all optimizations are available for manual configuration and overrides.

大意就是到了webpack第四版能够根据所选的`mode`环境进行优化，优化项

```js
module.exports = {
  // ...
  optimization: {
    splitChunks: { // 分离公共模块
      cacheGroups: {
        commons: { // 抽离相同引用组件
          name: 'commons',
          minSize: 0, // 文件最小体积
          chunks: 'initial',
          minChunks: 2 // 最小引用次数
        },
        vendors: { // 抽离第三方模块的包
          name: 'vendors',
          minSize: 0,
          minChunks: 2,
          chunks: 'initial',
          test: /node_modules/,
          priority: 1 // 权重
        }
      }
    }
  }
}
```

### mode

三个可选环境： `none`、`development`、`production`，常用的是后两种，`development`代表开发环境，打包后的代码不会压缩，有注释；`production`代表生成环境，打包后压缩代码

### resolve

解析第三方包 common

```js
module.exports = {
  resolve: {
    modules: [path.resolve('node_modules')], // 只在当前目录下查找
    extensions: ['.js', '.css'], // 自动为那些没有后缀名的文件增加默认拓展名
    mainFields: ['style', 'main'], // 更改引用的位置
    alias: { // 使用别名进行加载
      bootstrap: 'bootstrap/dist/css/bootstrap.css'
    }
  }
}
```

### devServer

可以配置调试的端口、热更新、代理等等

- port: 运行端口
- compress： 是否开启gzip压缩
- contentBase: 运行的静态文件地址
- progress： 控制台中是否有进度显示
- proxy: 代理地址
- before(app): 写mock数据

```js
module.exports = {
  // ...
  devServer: {
    port: 3000,
    compress: true,
    progress: true
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api': ''
        }
      }
    },
    before(app) {
      app.get('/api/user', (req, res) => {
        res.json({ test: 'tony'} );
      })
    }
  }
}
```

### watch

监控代码的变化

```js
module.exports = {
  // ...
  watch: true // 在打包的时候只要保存文件就能进行实时打包
}
```

### watchOptions

- poll: 监听的频率
- aggregateTimeout: 防抖
- ignored: 不需要监控的文件

```js
module.exports = {
  // ...
  watch: true,
  watchOptions: {
    poll: 1000,
    aggerateTimeout: 500,
    ignored: /node_modules/
  }
}
```

### Externals

在打包的时候忽略某些包

```js
module.exports = {
  // ...
  externals: {
    jquery: '$' // key是包的名字，value是使用的变量
  }
}
```

### performance

### node

与`nodejs`相关

### devtool

增加源码映射，单独生成一个souremap文件，代码出错了会标识错误

- source-map: 增加映射文件，可以帮我们调试源代码，显示错误的行数和具体位置
- eval-source-map: 不会产生单独文件，会把映射集成到打包文件中，但是可以显示行和具体位置
- cheap-module-source-map: 会产生sourcemap文件，根据我的测试并不能找到错误位置
- cheap-module-eval-source-map: 不会产生单独映射文件，集成在打包后的文件中，显示报错行，但不会显示具体位置