## $attrs & $listeners用法

### $attrs

> **只读**。包含了父作用域中**不**作为 prop 被识别 (且获取) 的特性绑定 (**class 和 style 除外**)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

### $listeners

> **只读**。包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。

案例

[父子通信](../projects/README.md#$attrs)
