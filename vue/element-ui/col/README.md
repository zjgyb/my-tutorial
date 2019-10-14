## 前言

由`index.scss`可以看出`element`栅格布局使用的`float: left | right;`和`width: num%;`两者来达到目的的。栅格分为 24 栏，因此从 0 到 24 的百分比分别为`0%`、`4.16667%;`、`8.33333%`、`12.5%`、`16.66667%`、`20.83333%`、`25%`、`29.16667%`、`33.33333%`、`37.5%`、`41.66667%`、`45.83333%`、`50%`、`54.16667%`、`58.33333%`、`62.5%`、`66.66667%`、`70.83333%`、`75%`、`79.16667%`、`83.33333%`、`87.5%`、`91.66667%`、`95.83333%`、`100%`(其实只需要 100/24\*num)就可以了

## props

- `tag`——包裹的元素标签，和`row`一样
- `span`——栅格占据的列数，就是宽的百分比，可选值是`0-24`
- `xs`、`sm`、`md`、`lg`、`xl`——响应式栅格数或者对象(这里由 css 控制)

```scss
@media only screen and (max-width: 767px) {
} // xs
@media only screen and (min-width: 768px) {
} // sm
@media only screen and (min-width: 992px) {
} // md
@media only screen and (min-width: 1200px) {
} // lg
@media only screen and (min-width: 1920px) {
} // xl
```

- `offset`——栅格左侧的间隔格数，从代码上表现为`margin-left: num%;`
- `push`——栅格向右移动的格数，从代码上表现为`position: relative; left: num%;`，相对自身进行偏移
- `pull`——栅格向左移动的格数，从代码上表现为`position: relative; right: num%;`，相对自身进行偏移

## 具体解析

### `span`、`offset`、`push`、`pull`

源码中是使用函数式编程的，为了更好的描述，使用正常编写模式。

```html
<!-- parent -->
<my-col :span="2" :offset="2" :pull="2" :push="2"></my-col>
```

```html
<!-- component -->
<template>
  <div :class="['my-col', classList]"></div>
</template>
<script>
  export default {
    props: {
      span: {
        type: Number,
        default: 24
      },
      offset: Number,
      pull: Number,
      push: Number
    },
    data() {
      return {
        classList: []
      };
    },
    created() {
      // 把传入的props转成相应的css类名
      // 如果是span, 最终传入的类名类似于`my-col-5`
      // 如果是其他三个props, 最终传入的类名类似于`my-col-offset-3`
      ["span", "offset", "pull", "push"].forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          this.classList.push(
            prop !== "span"
              ? `my-col-${prop}-${this[prop]}`
              : `my-col-${this[prop]}`
          );
        }
      });
    }
  };
</script>
```

### `xs`、`sm`、`md`、`lg`、`xl`

这几个因为在不同设备中 css 不同，而且支持传入对象，因此使用另一个函数添加 css

```html
<!-- parent -->
<my-col :xs="1" :sm="2" :md="3" :lg="4" :xl="{ span: 4, push: 2}"></my-col>
```

```html
<!-- component -->
<template>
  <div :class="['my-col', classList]">hello</div>
</template>

<script>
export default {
  props: {
    // ...
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  data() {
    return {
      classList: []
    };
  },
  created() {
    // ...

    // 如果是数字，那么直接添加类名类似于`my-col-xs-1`
    // 如果是对象，那么会和之前添加span、push这些一样，只是类名前面不一致，例如`my-col-xs-4`、`my-col-xs-push-2`
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        this.classList.push(`my-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          this.classList.push(
            prop !== 'span'
              ? `my-col-${size}-${prop}-${props[prop]}`
              : `my-col-${size}-${props[prop]}`
          );
        });
      }
    });
  }
};
</script>
```

### gutter

```html
<!-- parent -->
<template>
  <div :style="style">hello</div>
</template>

<script>
export default {
  data() {
    return {
      style: {}
    };
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      // 这里会一直查询到componentName为`MyRow`，否则查询到根元素vue，其parent属性为`undefined`为止
      while (parent && parent.$options.componentName !== 'MyRow') {
        parent = parent.$parent;
      }

      return parent ? parent.gutter : 0;
    }
  },
  created() {
    if (this.gutter) {
      this.style.paddingLeft = this.gutter / 2 + "px";
      this.style.paddingRight = this.style.paddingLeft;
    }
  }
};
</script>
```

```html
<!-- component -->
<template>
  <div :style="style"></div>
</template>

<script>
export default {
  data() {
    return {
      style: {}
    };
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      // 这里会一直查询到componentName为`MyRow`，否则查询到根元素vue，其parent属性为`undefined`为止
      while (parent && parent.$options.componentName !== 'MyRow') {
        parent = parent.$parent;
      }

      return parent ? parent.gutter : 0;
    }
  },
  created() {
    if (this.gutter) {
      this.style.paddingLeft = this.gutter / 2 + "px";
      this.style.paddingRight = this.style.paddingLeft;
    }
  }
};
</script>
```

## 注意

- 当父组件`display: flex;`时，子元素的`float`失效，因此会造成栅格布局失效。
- 因`css`文件较大，因此我删掉了`css`文件，详情查看源码