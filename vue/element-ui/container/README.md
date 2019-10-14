
## header & footer

这个比较简单，只有一个props——`height`，默认是`60px`

## main

这个只是创建了一个节点，没有`props`

## aside

只有一个`props`——`width`，默认是`300px`

## container

只有一个`props`——`direction`，判断子元素中是否有`el-header`或者`el-footer`，如果有排列方式就是纵向`vertical`，也就是css中的`flex-direction: column;`。另外一方面这个涉及到`vnode`的使用，具体参考可见[github](https://github.com/vuejs/vue/blob/dev/src/core/vdom/vnode.js)


## 疑惑

`container`中的css有`flex: 1`这个不是很清楚，我推测是为了保证层层嵌套时`flex`布局能使`width`不变