## 项目中常用的 vue 代码

## 父子组件相关

### 父传子 props

```html
<!-- parent -->
<template>
  <div>
    <child-com :msg="msg" />
  </div>
</template>

<script>
  import ChildCom from "./child";

  export default {
    components: {
      ChildCom
    },
    data() {
      return {
        msg: "Props of msg!!!"
      };
    }
  };
</script>
```

```html
<!-- child -->
<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String
    }
  };
</script>
```

### 子传父$emit

1. 普通传递

```html
<!-- parent -->
<template>
  <div>
    <child-com @getmsg="getmsg" />
  </div>
</template>

<script>
  import ChildCom from "./child";

  export default {
    components: {
      ChildCom
    },
    methods: {
      getmsg(value) {
        console.log("value is ", value);
      }
    }
  };
</script>
```

```html
<!-- child -->
<template>
  <div>
    <input type="text" v-model="value" />
    <button @click="handle">向父元素传递数据</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ""
      };
    },
    methods: {
      handle() {
        this.$emit("getmsg", this.value);
      }
    }
  };
</script>
```

2. 双向绑定

```html
<!-- parent -->
<template>
  <div>
    <child-com v-model="show" v-show="show" />
    <!-- 相当于 -->
    <!-- <child-com :value="show" @input="(val1) => show = val1" v-show="show" /> -->
    <button @click="childShow">显示子元素</button>
  </div>
</template>

<script>
  import ChildCom from "./child";

  export default {
    components: {
      ChildCom
    },
    data() {
      return {
        show: false
      };
    },
    methods: {
      childShow() {
        this.show = true;
      }
    }
  };
</script>
```

```html
<!-- child -->
<template>
  <div>
    <button @click="hidden">隐藏</button>
  </div>
</template>

<script>
export default {
  methods: {
    hidden() {
      this.$emit('input', false);
    }
  },
}
</script>
```

### $attrs & $listeners

```html
<!-- parent -->
<template>
  <div>
    <child-com :id="id" :name="name" :class="{ 'child-class': true }" :style="{ color: 'red' }" @msg="msg" />
  </div>
</template>

<script>
import ChildCom from './child';

export default {
  components: {
    ChildCom
  },
  data() {
    return {
      id: 'id',
      name: 'name'
    }
  },
  methods: {
    msg() {

    }
  },
}
</script>
```

```html
<!-- child -->
<template>
  <div>
    <p>hello world!!!</p>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  created() {
    console.log(this.$attrs); // { name: "name" }
    console.log(this.$listeners.msg); // msg函数
  },
  methods: {
    hidden() {
      this.$emit('input', false);
    }
  },
}
</script>

```