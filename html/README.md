## 语法解析

## mark(h5新增)

标签内的文字高亮显示(背景色为黄色)，行内元素

```html
<p>hello, my name is<mark> tony </mark></p>
```

## head内各种meta含义

首先meta元素有什么作用呢？看英文版[w3schools](https://www.w3schools.com/tags/tag_meta.asp)

> The `<meta>` tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.

> `<meta>`元素标签是提供有关HTML文档的元数据，元数据不会显示在页面上，但是能够被机器识别。

总而言之, `meta`标签与SEO有很大关系

### 例子

### charset

指定了`html`文档的编码格式，常见的是`utf-8`(Unicode的字符编码)，还有`ISO-8859-1`(拉丁字母的字符编码)，当然还有其他的，但是一般不常用也就不介绍了

```html
<meta charset="utf-8">
```

### name/content

指定元数据的名称

1. 定义了页面的作者
```html
<meta name="author" content="Tony">
```

2. 为搜索引擎提供关键字
```html
<meta name="keywords" content="HTML, CSS, JavaScript">
```

3. 对网页整体的描述

```html
<meta name="description" content="My tutorials on HTML, CSS and JavaScript">
```

4. 
- `width=device-width`——将页面宽度设置为跟随屏幕宽度变化而变化
- `initial-scale=1.0`——设置浏览器首次加载页面时的初始缩放比例(0.0-10.0正数)
- `maximum-scale=1.0`——允许用户缩放的最大比例(0.0-10.0正数)，必须大于等于`maximum-scale`
- `minimum-scale=1.0`——允许用户缩放的最小比例(0.0-10.0正数)，必须小于等于`maximum-scale`
- `user-scalable=no`——是否允许用户手动缩放(yes或者no)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minmum-scale=1.0">
```
5. 包含生成页面软件的标识符
> which contains the identifier of the software that generated the page.

```html
<meta name="generator" content="Hexo 3.8.0">
```
6. 定义主题颜色
```html
<meta name="theme-color" content="#222">
```

### http-equiv/content

> Provides an HTTP header for the information/value of the content attribute

1. 每30s刷新一次文档
```html
<meta http-equiv="refresh" content="30">
```

2. 告知浏览器以何种版本渲染界面。下面的例子有限使用IE最新版本
```html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

3. 请求和响应遵循的缓存机制，可以声明缓存的内容，修改过期时间，可多次声明

- `no-transform`——不得对资源进行转换或转变。
- `no-siteapp`——禁止百度进行转码

```html
<meta http-equiv="Cache-Control" content="no-transform">
<meta http-equiv="Cache-Control" content="no-siteapp">
```

[详细查看MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)
<!-- [我的博客用的原因](https://github.com/iissnan/hexo-theme-next/issues/1646) -->

### property/content

可以让网页成为一个**富媒体对象**，同意网页内容被其他网站引用

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://zjgyb.github.io/index.html">
<meta property="og:site_name" content="tony's blog">
```
