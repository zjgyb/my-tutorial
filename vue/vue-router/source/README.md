## 源码分析

## 学习方法

1. 了解`hashchange`、`pushState`、`replaceState`、`popstate`概念
2. 看他人博客同时参照源码
3. 实现一个简单的 vue-router

## 第一步

在`Vue Router`中`mode`有三种可选值，分别为`hash`、`history`、`abstract`

- hash: 使用 URL hash 值来作路由。支持所有浏览器。缺点：有一个`#`太丑了
- history: 依赖 HTML5 History API 和服务器配置。缺点：强制刷新的时候需要服务器配置，增加了不必要的开发。优点：url 和正常路由一样美观。
- abstract: 支持所有`JavaScript`运行环境，如 Node.js 服务器端。**如果发现没有浏览器的 API，路由会自动强制进入这个模式**。

### hashchange

只要新增了`#`或者`#`后面文字变动，`hashchange`监听的到

例如下面的例子：

```html
<body>
  <div>
    <a href="#box1">box1</a>
    <a href="#box2">box2</a>
    <a href="#box3">box3</a>
    <a href="#box4">box4</a>
  </div>
  <div id="box1" class="box">hello world box1!!!</div>
  <div id="box2" class="box">hello world box2!!!</div>
  <div id="box3" class="box">hello world box3!!!</div>
  <div id="box4" class="box">hello world box4!!!</div>
  <script>
    window.addEventListener("hashchange", function(event) {
      console.log("Old URL: " + event.oldURL + "\nNew URL: " + event.newURL);
      console.log(location.hash);
    });
  </script>
</body>
```

当点击第一个`a`标签的时候，它就会打印出下面三行

```
Old URL: http://127.0.0.1:5501/test.html
New URL: http://127.0.0.1:5501/test.html#box1
#box1
```

### pushState

语法：

```js
history.pushState(state, title, url); // 状态对象、新状态的标题和可选的相对URL
history.pushState({ name: "Nicholas" }, "Nicholas's page", "nicholas.html");
```

请看以下例子：

```html
<body>
  <div id="box1" class="box">hello world box1!!!</div>
  <button id="btn">点击</button>
  <script>
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      history.pushState({ name: "tony" }, "", "index.html");
    });
  </script>
</body>
```

当我点击按钮的时候页面内容并不会变化，但是浏览器 url 会从从`http://localhost:5501/test.html`变成`http://localhost:5501/index.html`，多了一条历史栈，如果回退，那么 url 会变成原来的`...test.html`，前进变成`...index.html`，内容依旧无变化，当我访问`https://www.google.com/`，回退变成`...index.html`，但现在内容发生了改变，变成了`index.html`内容，再回退，内容还是`index.html`内容，但是 url 变成了`...test.html`

### replaceState

语法与`pushState`相同

顾名思义，`pushState`是新增一条历史栈，而`replaceState`是修改历史栈

### popstate

在历史**状态**或者**数目**发生改变时能够发生响应的 API

在`script`标签内最后加如下代码：

```js
window.addEventListener("popstate", event => {
  console.log(
    "location: " + document.location + ", state: " + JSON.stringify(event.state)
  );
});
```

1. 例如在`pushState`点击按钮后退，那么就会打印出`location: http://localhost:5501/test.html, state: null`
2. 在`hashchange`例子中点击`a`标签，就会打印出例如`location: http://localhost:5501/test.html#box2, state: null`

