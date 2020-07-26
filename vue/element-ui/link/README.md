## props

- `type`(string)——定义链接的颜色
- `underline`(boolean)——定义hover时是否有下划线，默认是`true`
- `disabled`(boolean)——链接是否可点击
- `href`(string)——链接需要跳转的路径
- `icon`(string)——是否添加图标(左边)，如果图标在文字的右边，那么直接在文字后加`<i class="fa fa-..."></i>`


## 疑点难点

1. 为什么有click事件？
因为有些a标签用于文字的点击事件

2. 为什么要使用`v-bind="$attrs"`

这里得看[官方文档介绍](https://cn.vuejs.org/v2/api/#vm-attrs)，这是把父元素声明的属性，但是子元素没有引用到props中传入到内部组件

3. 为什么有`v-if="$slots.icon"`这段

个人猜测可以用slot传入icon