<template>
  <button
    class="my-button"
    :class="['my-button--' + type, { 'is-plain': plain, 'is-round': round, 'is-circle': circle, 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i class="fa" :class="'fa-' + icon" v-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: String,
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
};
</script>
