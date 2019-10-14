# 研究element-ui源码

大概到webpack学习结束的时候研究。

## 研究前的知识点

列出相关的目录结构

```
lib
  |- directives
  |- locale
  |- mixins
  |- theme-chalk
  |- alert.js
  |- ...
packages
  |- alert
  |- aside
  |- ...
src
  |- directives
  |- locale
  |- mixins
  |- transitions
  |- utils
  |- index.js
types
  |- alert.d.ts
  |- aside.d.ts
  |- ...
package.json
...
```

- [渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)
- [插件](https://cn.vuejs.org/v2/guide/plugins.html)

## 说明

为了简便，我不会按照源码的目录结构，而是扁平化，方便阅读与书写。同时便于区别，名字前缀变成`my`，同时CSS代码删除了前缀，例如`-webkit`，只保留一般格式。

- [row](./row/README.md)
- [col](./col/README.md)
- [container](./container/README.md)

## 研究中遇到的问题

[问题](./questions/README.md)
