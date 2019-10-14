<template>
  <footer class="my-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'MyFooter',

    componentName: 'MyFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
