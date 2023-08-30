<template>
 <li class="pi-breadcrumb__item">
    <router-link
      v-if="to"
      :to="to"
      :title="title"
    >
      <slot></slot>
    </router-link>
    <slot v-else></slot>
  </li>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';


defineProps({
  to: [String, Object],
  title: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
.pi-breadcrumb__item {
  color: oklch(var(--breadcrumb-color));
  &:after {
    content: '/';
    margin: 0 var(--spacing-xs);
  }
  &[aria-current] {
    font-weight: normal;
    &:after {
      display: none;
    }
  }
}
</style>
