<template>
  <div class="page">
    <div class="page-header">
      <pi-button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <title>選單 Menu</title>
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      </pi-button>
      <pi-breadcrumb :key="$route.path">
        <pi-breadcrumb-item
          v-for="(pathItem, pathIndex) in path"
          :key="`pathIndex-${pathIndex}`"
          :title="`前往${pathItem.title}`"
          :to="pathItem.url"
        > {{ pathItem.title }}</pi-breadcrumb-item>
      </pi-breadcrumb>
    </div>
    <div class="page-main">
      <h2>Button</h2>
      <section>
        <h3>Size</h3>
        <pi-button size="small">Default</pi-button>
        <pi-button>Default</pi-button>
        <pi-button size="large">Default</pi-button>
      </section>
      <section>
        <h3>Theme</h3>
        <pi-button theme="primary">Primary</pi-button>
        <pi-button theme="success">Success</pi-button>
        <pi-button theme="warning">Warning</pi-button>
        <pi-button theme="danger">Danger</pi-button>
        <pi-button theme="primary-ghost">Primary</pi-button>
        <pi-button theme="success-ghost">Success</pi-button>
        <pi-button theme="warning-ghost">Warning</pi-button>
        <pi-button theme="danger-ghost">Danger</pi-button>
      </section>
      <section>
        <h3>Enhance Accessibility</h3>
        <pi-button theme="primary" a11y>Primary</pi-button>
        <pi-button theme="success" a11y>Success</pi-button>
        <pi-button theme="warning" a11y>Warning</pi-button>
        <pi-button theme="danger" a11y>Danger</pi-button>
        <pi-button theme="primary-ghost" a11y>Primary</pi-button>
        <pi-button theme="success-ghost" a11y>Success</pi-button>
        <pi-button theme="warning-ghost" a11y>Warning</pi-button>
        <pi-button theme="danger-ghost" a11y>Danger</pi-button>
      </section>
      <section>
        <h3>Disabled</h3>
        <pi-button size="small" disabled>Default</pi-button>
        <pi-button disabled>Default</pi-button>
        <pi-button size="large" disabled>Default</pi-button>
        <br/>
        <pi-button theme="primary" disabled>Primary</pi-button>
        <pi-button theme="success" disabled>Success</pi-button>
        <pi-button theme="warning" disabled>Warning</pi-button>
        <pi-button theme="danger" disabled>Danger</pi-button>
        <pi-button theme="primary-ghost" disabled>Primary</pi-button>
        <pi-button theme="success-ghost" disabled>Success</pi-button>
        <pi-button theme="warning-ghost" disabled>Warning</pi-button>
        <pi-button theme="danger-ghost" disabled>Danger</pi-button>
        <br>
        <pi-button theme="primary" a11y disabled>Primary</pi-button>
        <pi-button theme="success" a11y disabled>Success</pi-button>
        <pi-button theme="warning" a11y disabled>Warning</pi-button>
        <pi-button theme="danger" a11y disabled>Danger</pi-button>
        <pi-button theme="primary-ghost" a11y disabled>Primary</pi-button>
        <pi-button theme="success-ghost" a11y disabled>Success</pi-button>
        <pi-button theme="warning-ghost" a11y disabled>Warning</pi-button>
        <pi-button theme="danger-ghost" a11y disabled>Danger</pi-button>
      </section>
      <section>
        <h3>Loading</h3>
        <pi-button size="small" loading></pi-button>
        <pi-button loading></pi-button>
        <pi-button size="large" loading></pi-button>
        <pi-button size="small" loading>Loading</pi-button>
        <pi-button loading>Loading</pi-button>
        <pi-button size="large" loading>Loading</pi-button>
        <br/>
        <pi-button theme="primary" loading>Primary</pi-button>
        <pi-button theme="success" loading>Success</pi-button>
        <pi-button theme="warning" loading>Warning</pi-button>
        <pi-button theme="danger" loading>Danger</pi-button>
        <pi-button theme="primary-ghost" loading>Primary</pi-button>
        <pi-button theme="success-ghost" loading>Success</pi-button>
        <pi-button theme="warning-ghost" loading>Warning</pi-button>
        <pi-button theme="danger-ghost" loading>Danger</pi-button>
        <br>
        <pi-button theme="primary" loading a11y>Primary</pi-button>
        <pi-button theme="success" loading a11y>Success</pi-button>
        <pi-button theme="warning" loading a11y>Warning</pi-button>
        <pi-button theme="danger" loading a11y>Danger</pi-button>
        <pi-button theme="primary-ghost" loading a11y>Primary</pi-button>
        <pi-button theme="success-ghost" loading a11y>Success</pi-button>
        <pi-button theme="warning-ghost" loading a11y>Warning</pi-button>
        <pi-button theme="danger-ghost" loading a11y>Danger</pi-button>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
// import { PiButton } from "/dist/piman-vue3.es";
// import PiButton from '@/components/Button/PiButton.vue'

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Button'},
])
</script>
