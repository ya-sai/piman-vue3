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
      <h2>Card</h2>
      <section>
        <h3>Basic</h3>
        <pi-card>
          Cotnent
        </pi-card>
      </section>
      <section>
        <h3>Padding = 0</h3>
        <pi-card nopadding>
          Cotnent
        </pi-card>
      </section>
      <section>
        <h3>Custom Header</h3>
        <pi-card header="Custom">
          Cotnent
        </pi-card>
        <br>
        <pi-card>
          <template v-slot:header>
            <mark>Custom</mark>
            <pi-button theme="primary">Button</pi-button>
          </template>
          Cotnent
        </pi-card>
      </section>
      <section>
        <h3>Custom Header + Box-Shadow</h3>
        <pi-card shadow>
          <template v-slot:header>
            <mark>Custom</mark>
            <pi-button theme="primary">Button</pi-button>
          </template>
          Cotnent
          <template v-slot:footer>
            <pi-button theme="primary">Button</pi-button>
            <pi-button>Button</pi-button>
          </template>
        </pi-card>
      </section>
      <section>
        <h3>Custom Header + Box-Shadow + Custom Footer</h3>
        <pi-card shadow>
          <template v-slot:header>
            <mark>Custom</mark>
            <pi-button theme="primary">Button</pi-button>
          </template>
          Cotnent
          <template v-slot:footer>
            <pi-button theme="primary">Button</pi-button>
            <pi-button>Button</pi-button>
          </template>
        </pi-card>
      </section>
      <section>
        <h3>Custom Header + Box-Shadow + Custom Footer + Padding = 0</h3>
        <pi-card shadow  nopadding>
          <template v-slot:header>
            <mark>Custom</mark>
            <pi-button theme="primary">Button</pi-button>
          </template>
          <pi-accordion>
            <pi-accordion-item>
              Content 1
            </pi-accordion-item>
            <pi-accordion-item>
              Content 2
            </pi-accordion-item>
          </pi-accordion>
          <template v-slot:footer>
            <pi-button theme="primary">Button</pi-button>
            <pi-button>Button</pi-button>
          </template>
        </pi-card>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
// import { PiButton, PiCard, PiAccordion, PiAccordionItem } from "/dist/piman-vue3.es";

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Card'},
])
</script>

<style scoped>
.pi-card {
  max-width: 375px;
}
</style>
