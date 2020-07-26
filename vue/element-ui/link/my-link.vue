<template>
  <a
    :href="disabled ? null : href"
    :class="['my-link', 'my-link--' + type, disabled && 'is-disabled', !disabled && underline && 'is-underline']"
    v-bind="$attrs"
    @click="handleClick"
  >
    <i class="fa" :class="icon" v-if="icon"></i>
    <span v-if="$slots.default" class="el-link--inner">
      <slot></slot>
    </span>

    <!-- 这里可以用于使用slot插入icon的功能，也可以直接使用文字+icon进行插入 -->
    <template v-if="$slots.icon">
      <slot v-if="$slots.icon" name="icon"></slot>
    </template>
  </a>
</template>

<script>
export default {
  name: 'MyLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: true
    },
    icon: String,
    href: String
  },
  methods: {
    handleClick(event) {
      // 当a标签用于点击事件的时候用于传递event
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', event);
        }
      }
    }
  },
};
</script>

<style lang="scss">
[class*='fa-'] {
  font-size: 14px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

.my-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;

  &.my-link--default {
    color: #606266;

    &:hover {
      color: #409eff;
    }
  }

  &.is-underline {
    &:hover {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 0;
        bottom: 0;
        border-bottom: 1px solid #409eff;
      }
    }
  }

  &.is-disabled {
    cursor: not-allowed;
    color: #c0c4cc;

    &:hover {
      text-decoration: none;
      color: #c0c4cc;
    }
  }

  [class*='fa-'] + span {
    margin-left: 5px;
  }
}

.my-icon--right {
  margin-left: 5px;
}
</style>