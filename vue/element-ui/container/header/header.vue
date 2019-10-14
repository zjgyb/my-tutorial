<template>
  <header class="my-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'MyHeader',

    componentName: 'MyHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
