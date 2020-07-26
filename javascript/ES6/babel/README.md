## 前言

并不是所有浏览器支持ES6，因此需要有一个工具把ES6转化成ES5，而这个工具就是babel

## babel-node

> 让node环境支持ES6语法

## @babel/register

> 适合开发环境，把`require`命令加载的文件转码成`node`去加载文件

## @babel/core

> 调用babel的API进行转码

## @babel/polyfill

babel默认只转换新的JS句法，而不转新的API，例如`Proxy`、`Set`、`Map`等不转码，而`@babel/polyfill`把新的API转换