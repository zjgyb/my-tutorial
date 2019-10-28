<template>
  <button
    class="my-button"
    :type="nativeType"
    :class="['my-button--' + type, size ? 'my-button--' + size : '', { 'is-circle': circle, 'is-disabled': disabled, 'is-loading': loading }]"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    @click="handleClick"
  >
    <i class="fa" :class="[icon, { 'fa-spinner': loading } ]" v-if="loading || icon"></i>
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
    icon: String,
    loading: {
      type: Boolean,
      default: false
    },
    size: String,
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>