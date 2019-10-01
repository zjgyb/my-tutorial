## 水平垂直居中的实现方式

### 块级元素水平垂直居中

`html`结构

```html
<div class="parent">
  <div class="child"></div>
</div>
```

1. `flex`布局

```scss
.parent {
  width: 300px;
  height: 160px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;

  .child {
    width: 60px;
    height: 60px;
    border: 1px solid red;
  }
}
```

2. `position` + `margin`
适用于已知子元素宽高度

```scss
.parent {
  position: relative;
  width: 300px;
  height: 160px;
  background-color: #eee;

  .child {
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    border: 1px solid red;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -30px;
    margin-top: -30px;
  }
}
```

也可以通过百分比进行计算

```scss
.parent {
  position: relative;
  width: 300px;
  height: 160px;
  background-color: #eee;

  .child {
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    border: 1px solid red;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -10%;
    margin-top: -10%; // 注意margin的百分比都是相对于父元素宽度的
  }
}
```

未知子元素宽高度

```scss
.parent {
	position: relative;
  width: 300px;
  height: 160px;
  background-color: #eee;

  .child {
		box-sizing: border-box;
    width: 60px;
		height: 60px;
		border: 1px solid red;

    position: absolute;
		top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
```

3. `position` + `transform`

```scss
.parent {
  position: relative;
  width: 300px;
  height: 160px;
  background-color: #eee;

  .child {
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    border: 1px solid red;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
```

4. `padding`(使用范围有限)

```scss
.parent {
  box-sizing: border-box;
  width: 300px;
  height: 160px;
  background-color: #eee;
  padding-top: 50px;
  padding-left: 120px;

  .child {
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    border: 1px solid red;
  }
}
```

### 行内元素水平垂直居中

```html
<div class="parent">
	<span class="child">hello world!!! hello world!!! hello world!!!...</span>
</div>
```

1. `line-height` + `text-align`(文字不超过一行)

```scss
.parent {
  width: 300px;
  height: 160px;
  background-color: #eee;
  text-align: center;

  .child {
		border: 1px solid red;
    line-height: 160px;
  }
```

2. `flex`(用法和块级一样)

3. `tabel`、`table-cell` + `vertical-align`

```scss
.parent {
  display: table;
  width: 300px;
  height: 160px;
  background-color: #eee;

  .child {
    border: 1px solid red;
    display: table-cell;
    vertical-align: middle;
  }
}
```
