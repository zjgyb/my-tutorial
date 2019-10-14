<template>
  <section class="my-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'MyContainer',

  componentName: 'MyContainer',

  props: {
    direction: String
  },

  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      } else if (this.direction === 'horizontal') {
        return false;
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            console.log(vnode.componentOptions);

            return tag === 'my-header' || tag === 'my-footer';
          })
        : false;
    }
  }
};
</script>
