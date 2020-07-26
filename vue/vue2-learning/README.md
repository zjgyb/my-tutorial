## $attrs & $listeners 用法

### $attrs

> **只读**。包含了父作用域中**不**作为 prop 被识别 (且获取) 的特性绑定 (**class 和 style 除外**)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="\$attrs" 传入内部组件——在创建高级别的组件时非常有用。

### $listeners

> **只读**。包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。

案例

[父子通信](../projects/README.md#$attrs)

## vue实例上的属性或方法

- $el
- $options
- $nextTick(func)
- $watch(key, func(newValue, oldValue))

## vue模板语法

以`{{ expression }}`形式表示，里面的内容主要是运算、取值、三元运算符

## 指令

- v-once
- v-if、v-else-if、v-else
- v-show
- v-html
- v-for: 循环
```html
<div id="app">
  <div v-for="(num, index) in nums" :key="index">{{ num }} {{ index }}</div>
  <div v-for="(value, key, index) in obj" :key="value">{{ value }} {{ key }} {{ index }}</div>
  <template v-for="(num, index) in nums">
    <div :key="`${index}_1`">{{ num }} {{ index }}</div>
    <div :key="`${index}_2`">{{ num }} {{ index }}</div>
  </template>
</div>
<script>
  // 已默认引入vue
  const vm = new Vue({
    data: {
      nums: [1, 2, 3],
      obj: {
        name: 'tony',
        age: 20
      }
    }
  }).$mount('#app');
</script>
```

- v-model: 用于双向绑定，修饰符`.number`、`.trim`
```html
  <div id="app">
    <div>
      <input type="text" v-model="text">      
      {{ text }}
    </div>
    <div>
      <select v-model="selectValue">
        <option v-for="fruit in fruits" :key="fruit.id" :value="fruit.id">{{ fruit.value }}</option>
      </select>
      {{ selectValue }}
    </div>
    <div>
      男： <input type="radio" v-model="sexValue" value="男">
      女： <input type="radio" v-model="sexValue" value="女">
      sex is {{ sexValue }}
    </div>
    <div>
      篮球： <input type="checkbox" v-model="hobby" value="篮球">
      足球： <input type="checkbox" v-model="hobby" value="足球">
      乒乓球： <input type="checkbox" v-model="hobby" value="乒乓球">
      hoddy is {{ hobby }}
    </div>
    <div>
      <input type="text" v-model.number="num">
      {{ num }}
    </div>
  </div>
  <script src="./node_modules/vue/dist/vue.js"></script>
  <script>
    const vm = new Vue({
      data: {
        text: 'value',
        fruits: [ { id: 1, value: '苹果' }, { id: 2, value: '香蕉' }, { id: 3, value: '橘子' }],
        selectValue: 2,
        sexValue: '男',
        hobby: [],
        num: 12
      }
    }).$mount('#app');
  </script>
```

v-if控制的是dom，v-show控制的是样式而且不支持template


## 方法

- watch
- computed
- method

watch可以支持异步，computed是用`Object.defineProperty`实现的

## 生命周期

- beforeCreate: 初始化自己的生命周期并且绑定自己的事件
- created: 可以获取数据和调用方法
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestory
- destoryed

## 其他

- `v-bind="$attr"`——绑定所有的属性
- `v-on="$listeners"`——绑定所有的方法