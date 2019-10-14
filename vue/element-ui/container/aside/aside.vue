<template>
  <aside class="my-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'MyAside',

    componentName: 'MyAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
