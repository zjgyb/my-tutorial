## 常见的包介绍

## html相关

- html-webpack-plugin: webpack中生成模板html配置, [项目地址github](https://github.com/jantimon/html-webpack-plugin)
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	//...
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', // 以src目录下的index.html作为模板
			filename: 'index.html', // 打包后的文件命名，默认也是index.html
			minify: {
				collapseWhitespace: true, // 折叠成一行
			},
			hash: true, // 加hash，表现形式是 src="../filename?hash"
			chunk: [], // 需要包含的文件名
		})
	]
}
```

## CSS相关

- style-loader: 把css文件插入到html中(以style形式插入)，[项目地址github](https://github.com/webpack-contrib/style-loader)
- css-loader: 用于解析`@import`方式引入css，[项目地址github](https://github.com/webpack-contrib/css-loader)

```js
module.exports = {
	// ...
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
		]
	}
}
```

- node-sass, sass-loader: 把sass或者scss文件转换成css文件
```js
module.exports = {
	// ...
	module: {
		rules: [
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
		]
	}
}
```

- mini-css-extract-plugin: 把CSS以link方式插入，如果需要压缩，还需要两个插件`optimize-css-assets-webpack-plugin`和`teser-webpack-plugin`

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	// ...
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css', // 打包后css文件名
		})
	],
	module: {
		rules: [
			{ 
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader, // 把原先的style-loader变成这个选项
						'css-loader'
					}
				]
			}
		]
	},
	optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
}
```
- postcss-loader autoprefixer: 为css属性值自动添加浏览器前缀

```js
// 需要在根目录创建postcss.config.js
module.exports = {
	plugins: [
		require('autoprefixer')
	]
}
```

```js
module.exports = {
	// ...
	module: {
		rules: [
			{ 
				test: /\.css$/, 
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: [
							modules: true,
							importLoaders: 1,
							// 0 => no loaders(default);
							// 1 => postcss-loader;
							// 2 => postcss-loader, sass-loader
						]
					},
					'postcss-loader'
				] 
		  }
		]
	}
}
```


## JS相关
### uglifyjs-webpack-plugin

### babel相关

- babel-loader: babel转换
- @babel/core: babel核心模块
- @babel/preset-env: ES6转换成ES5(并不是所有语法)
- @babel/plugin-proposal-class-properties: class等ES6语法进行转换

注意可以直接使用`import`进行路由懒加载

```js
module.exports = {
	// ...
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'bable-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					}
				]
			}
		]
	}
}
```

- @babel/plugin-transform-runtime、@babel/runtime: 一个插件能够使用Babel注入方式减少代码体积，主要实现功能1. Helper aliasing, 把像class等语法抽离出来，避免重复；2. core-js aliasing不需要全局污染使用`Map`、`Set`、`Promise`等内置语法；3. regenerator aliasing使用generator或者async语法时导入模块

添加方式，往plugins中添加

```js
{
	use: {
		loader: 'babel-loader',
		options: {
			// ...
			plugins: ["@babel/plugin-transform-runtime"]
		},
		exclude: /node_modules/, // 需要排除包文件夹，否则会报错
	}
}
```

- @babel/polyfill: 把高级语法加到原型上，像`includes`等语法需要使用该包进行转化，只需要`yarn add @babel/polyfill`，然后在文件首部使用`require(@babel/polyfill)`


### 校验JS

- eslint, eslint-loader: 校验js语法，需要新建一个`.eslintrc.json`
```js
module.exports = {
	// ...
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'eslint-loader',
				exclude: /node_modules/,
				enforce: 'pre'
			}
		]
	}
}
```

### 其他

- expose-loader: 能够把模块注入到全局对象中，例如$挂载到`window`对象上

```js
import $ from 'expose-loader?$!jquery';
console.log(window.$);
```

或者在`webpack.config.js`中直接使用

```js
module.exports = {
	// ...
	module: {
		rules: [
			// ...
			{
				loader: 'expose-loader',
				options: '$'
			}
		]
	}
}
```


- clean-webpack-plugin(3.0.0): 在打包之前吗删除之前打包的文件
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	// ...
	plugins: [
		new CleanWebpackPlugin()
	]
}
```

- copy-webpack-plugin(5.0.5): 拷贝文件
```js
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
	// ...
	plugins: [
		new CopyWebpackPlugin([
			{ from: './doc', to: '' } // 把doc文件夹下的所有文件粘贴到dist目录下
		])
	]
}
```

- webpack-dev-middleware: 服务端代理请求，免去了前端代理
```js
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(middleware(compiler));
```

- webpack-merge: 能够合并webpack文件配置，能够让生产和开发环境区分开

```js
// 例如生产环境的代码
const { smart } = require('webpack-merge');
const config = require('./webpack.base.js');

module.exports = smart(config, {
	mode: 'production'
})
```

## webpack相关

- webpack.ProvidePlugin(): 可以全局注入变量
```js
const Webpack = require('webpack');
module.exports = {
	// ...
	plugins: [
		new Webpack.ProvidePlugin({
			'$': 'jquery'
		})
	]
}
```

- webpack.BannerPlugin(): 在头部生成一些标记
```js
const Webpack = require('webpack');
module.exports = {
	// ...
	plugins: [
		new Webpack.BannerPlugin('copyright by tony') // 会让js文件的头部加上这一行注释
	]
}
```
- webpack.DefinePlugin(): 能够定义全局变量
```js
const Webpack = require('webpack');
module.exports = {
	// ... 
	plugins: [
		new Webpack.DefinePlugin({
			DEV: JSON.stringify('development') // 需要加一层字符串
		})
	]
}
```
- webpack.IngorePlugin(): 忽略一些加载项
```js
module.exports = {
	plugins: [
		new Webpack.IgnorePlugin(/\.\/locale/, /moment/) // 忽略语言包的导入，减小打包文件大小
	]
}
```

- webpack.DllPlugin()、webpackDllReferencePlugin(): 先抽离出大的文件
```js
// 预打包文件
const path = require('path');
const webpack = require('webpack');
module.exports = {
	entry: {
		react: ['react', 'react-dom']
	},
	output: {
		filename: '_dll_[name].js',
		path: path.resolve(__dirname, 'dist', 'manifest.json'),
		library: '_dll_[name]', // 导出的变量名
	},
	plugins: [
		new webpack.DllPlugin({
			name: '_dll_[name]', // 需要与output.library变量名一致
			path: path.resolve(__dirname, 'dist', 'manifest.json')
		})
	]
}
```

```js
// 正式的webpack.config.js
const path = require('path');
const webpack = require('webpack');
module.exports = {
	// ...
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new webpack.DllReferencePlugin({
			manifest: path.resolve(__dirname, 'dist', 'manifest')
		})
	]
}
```

同时在html中引入该文件`<script src="./_dll_react.js"></script>`

## 图片相关

- file-loader: 能够解析JS中引入的图片
```js
module.exports = {
	// ...
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader'
			}
		]
	}
}
```

- url-loader: 限制一张图片，小于一定大小的时候图片转换成base64形式

```js
module.exports = {
	// ...
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 100 * 1024, // 100kb以内转成base64
							outputPath: './img/', // 把图片资源放到img目录下
						}
					}
				]
			}
		]
	}
}
```

## 多线程

happypack(5.0.1): 启动多线程打包，当项目比较大时可以启用

```js
const Happypack = require('happypack');
module.exports = {
	// ...
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'Happypack/loader?id=js'
			}
		]
	},
	plugins: [
		new Happypack({
			id: 'js', // 与module中对应
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			]
		})
	]
}
```