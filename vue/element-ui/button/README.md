## 前言

button我准备分三块来写，因props一下子写完可能很复杂，每一块props尽可能不一样，这样能够方便阅读。

## props

- `type`(string)——定义按钮的颜色
- `plain`(boolean)——定义按钮的颜色，相较于type来说颜色相对较浅(是否为朴素按钮)
- `round`(boolean)——定义了按钮是否圆角，class中同时加大了它的padding
- `circle`(boolean)——定义了按钮是否是一个圆形，class表现为`border-raduis`
- `icon`(string)——定义按钮是否有icon，我使用了fontawesome进行了模拟
- `disabled`(boolean)——定义按钮是否为禁用状态，其中CSS方面写了禁用按钮，html写了`disabled`判断是否禁用状态

以上部分是[第一块](./first/button.vue)主要的props

- `loading`(boolean)——定义了按钮是否为加载状态，如果是的话那么会使button为disabled状态
- `size`(medium/small/mini)——定义了按钮的大小，改变的是padding的值，原始`12px 20px`，`medium`为`10px 20px`，`small`为`9px 15px`，`mini`为`7px 15px`
- `autofocus`(boolean)——定义了按钮是否为聚焦状态，效果等同于hover的效果
- `native-type`(button/submit/reset)——定义了按钮的`type`类型

以上部分是[第二块](./second/button.vue)主要的props

## button group

这个模块其实就是把一系列`button`包裹进去，在单独使用`button`的时候每一个button的间距为`10px`，使用button group可以把button间距变成0，同时以`border-color`进行视觉间隔；除第一个和最后一个button外，其余button的`border-raduis`为0。

无props

## 注意

**第三块**因为有其它组件(Form、FormItem)注入依赖，因此这一块需要放入等研究完其它组件后再写