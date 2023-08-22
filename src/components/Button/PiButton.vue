<template>
  <button
    v-bind="$attrs"
    :disabled="disabled || loading"
    :class="[
      'pi-btn',
      theme ? `pi-btn--${theme}` : '',
      size ? `pi-btn--${size}` : ''
    ]"
  >
    <slot v-if="$slots.default"></slot>
    <span
      v-if="loading"
      class="pi-btn-loading"
      title="loading"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
</template>

<script lang="ts" setup>

defineProps({
  theme: String,
  disabled: Boolean,
  loading: Boolean,
  size: String,
})

</script>

<style scoped>
.pi-btn {
  cursor: pointer;
  padding: var(--spacing-s) var(--spacing-m);
  color: oklch(var(--button-default-color));
  background-color: oklch(var(--button-default-bg));
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid oklch(var(--color-border));
  border-radius: var(--radius);
  transition: background-color 160ms ease-in;
  &:hover {
    background-color: oklch(var(--button-default-hover-bg));
  }
  &:active {
    background-color: oklch(var(--button-default-active-bg));
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.4;
  }
  &.pi-btn--small {
    padding: var(--spacing-xxs) var(--spacing-xs);
    font-size: 0.75rem;
    & .pi-btn-loading {
      vertical-align: baseline;
      width: 0.75rem;
      height: 0.75rem;
      & span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }
  &.pi-btn--large {
    padding: var(--spacing-m) var(--spacing-xl);
    font-size: 1.25rem;
    & .pi-btn-loading {
      vertical-align: baseline;
      width: 1.25rem;
      height: 1.25rem;
      & span {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
  &.pi-btn--primary {
    color: oklch(var(--button-flat-color));
    background-color: oklch(var(--color-primary-500));
    border-color: oklch(var(--color-primary-500));
    &:hover {
      background-color: oklch(var(--color-primary-400));
      border-color: oklch(var(--color-primary-400));
    }
    &:active {
      background-color: oklch(var(--color-primary-600));
      border-color: oklch(var(--color-primary-600));
    }
    & .pi-btn-loading {
      & span {
        border-color: oklch(var(--button-flat-color)) transparent transparent transparent;
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--button-flat-color));
    }
  }
  &.pi-btn--success {
    color: oklch(var(--button-flat-color));
    background-color: oklch(var(--color-success-500));
    border-color: oklch(var(--color-success-500));
    &:hover {
      background-color: oklch(var(--color-success-400));
      border-color: oklch(var(--color-success-400));
    }
    &:active {
      background-color: oklch(var(--color-success-600));
      border-color: oklch(var(--color-success-600));
    }
    & .pi-btn-loading {
      & span {
        border-color: oklch(var(--button-flat-color)) transparent transparent transparent;
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--button-flat-color));
    }
  }
  &.pi-btn--warning {
    color: oklch(var(--button-flat-color));
    background-color: oklch(var(--color-warning-500));
    border-color: oklch(var(--color-warning-500));
    &:hover {
      background-color: oklch(var(--color-warning-400));
      border-color: oklch(var(--color-warning-400));
    }
    &:active {
      background-color: oklch(var(--color-warning-600));
      border-color: oklch(var(--color-warning-600));
    }
    & .pi-btn-loading {
      & span {
        border-color: oklch(var(--button-flat-color)) transparent transparent transparent;
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--button-flat-color));
    }
  }
  &.pi-btn--danger {
    color: oklch(var(--button-flat-color));
    background-color: oklch(var(--color-danger-500));
    border-color: oklch(var(--color-danger-500));
    &:hover {
      background-color: oklch(var(--color-danger-400));
      border-color: oklch(var(--color-danger-400));
    }
    &:active {
      background-color: oklch(var(--color-danger-600));
      border-color: oklch(var(--color-danger-600));
    }
    & .pi-btn-loading {
      & span {
        border-color: oklch(var(--button-flat-color)) transparent transparent transparent;
      }
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--button-flat-color));
    }
  }
  &.pi-btn--primary-ghost {
    color: oklch(var(--color-primary-600));
    background: oklch(var(--button-ghost-bg));
    border-color:oklch(var(--color-primary-600));
    transition: background-color 160ms ease-in, color 160ms ease-in;
    &:hover {
      background-color: oklch(var(--color-primary-100));
    }
    &:active {
      background-color: oklch(var(--color-primary-200));
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--color-primary-600));
    }
  }
  &.pi-btn--success-ghost {
    color: oklch(var(--color-success-600));
    background: oklch(var(--button-ghost-bg));
    border-color:oklch(var(--color-success-600));
    transition: background-color 160ms ease-in, color 160ms ease-in;
    &:hover {
      background-color: oklch(var(--color-success-100));
    }
    &:active {
      background-color: oklch(var(--color-success-200));
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--color-success-600));
    }
  }
  &.pi-btn--warning-ghost {
    color: oklch(var(--color-warning-600));
    background: oklch(var(--button-ghost-bg));
    border-color:oklch(var(--color-warning-600));
    transition: background-color 160ms ease-in, color 160ms ease-in;
    &:hover {
      background-color: oklch(var(--color-warning-100));
    }
    &:active {
      background-color: oklch(var(--color-warning-200));
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--color-warning-600));
    }
  }
  &.pi-btn--danger-ghost {
    color: oklch(var(--color-danger-600));
    background: oklch(var(--button-ghost-bg));
    border-color:oklch(var(--color-danger-600));
    transition: background-color 160ms ease-in, color 160ms ease-in;
    &:hover {
      background-color: oklch(var(--color-danger-100));
    }
    &:active {
      background-color: oklch(var(--color-danger-200));
    }
    & .pi-select-placeholder,
    & .pi-select-clear-btn { 
      color: oklch(var(--color-danger-600));
    }
  }
}

.pi-btn-loading {
  display: inline-block;
  vertical-align: text-bottom;
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  & span {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    margin: 0.125rem;
    border: 0.125rem solid oklch(var(--color-border));
    border-color: oklch(var(--color-border)) transparent transparent transparent;
    border-radius: 50%;
    animation: btn-loading-animation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    &:nth-child(1) {
      animation-delay: -450ms;
    }
    &:nth-child(2) {
      animation-delay: -300ms;
    }
    &:nth-child(3) {
      animation-delay: -150ms;
    }
  }
}

@keyframes btn-loading-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
