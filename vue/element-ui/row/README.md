## props

- `tag`外层包裹的元素标签, `string`类型
- `justify`就是规定flex水平排列方向
- `align`就是规定flex垂直排列方向，因为习惯上可能把垂直方向上用`middle`表示，但是代码实际上是`align-items: center;`
- `type`只能是`flex`
- `gutter`其实就是左右间距，`number`类型，如果设置了`10`，那么样式就是`margin-left: -5px; margin-right: -5px`，这个属性也会影响下面子元素的`col`

[更多详情看官网](https://element.eleme.cn/#/zh-CN/component/layout)

## componentName

这个属性是为了之后元素判断父组件名字的时候使用，这在讲解`col`的时候就会说到了

## 总结

其他相对比较简单，看代码就能明白，因此就不介绍了。