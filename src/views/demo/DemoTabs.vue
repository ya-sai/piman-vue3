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
      <h2>Tabs</h2>
      <section>
        <h3>Basic</h3>
        <pi-tabs v-model="demoTabs">
          <pi-tab-panel name="first-tab" label="Tab1">This is the content of the first tab</pi-tab-panel>
          <pi-tab-panel name="second-tab" label="Tab2">This is the content of the second tab</pi-tab-panel>
        </pi-tabs>
      </section>
      <section>
        <h3>tab-panel Padding = 0</h3>
        <pi-tabs v-model="demoTabs4">
          <pi-tab-panel name="first-tab4" label="Tab1" nopadding>This is the content of the first tab with padding=0</pi-tab-panel>
          <pi-tab-panel name="second-tab4" label="Tab2" nopadding>This is the content of the second tab with padding=0</pi-tab-panel>
        </pi-tabs>
      </section>
      <section>
        <h3>Badge</h3>
        <pi-tabs v-model="demoTabs2">
          <pi-tab-panel name="first-tab2" label="Tab1" badge="23">This is the content of the first tab</pi-tab-panel>
          <pi-tab-panel name="second-tab2" label="Tab2" badge="new">This is the content of the second tab</pi-tab-panel>
          <pi-tab-panel name="third-tab2" label="Tab3">This is the content of the third tab</pi-tab-panel>
          <pi-tab-panel name="forth-tab2" label="Tab4">This is the content of the forth tab</pi-tab-panel>
        </pi-tabs>
      </section>
      <section>
        <h3>Tabs Prefiix/Affix icon classname</h3>
        <pi-tabs v-model="demoTabs3">
          <pi-tab-panel name="first-tab3" label="Tab1" prefix="fas fa-bars">This is the content of the first tab</pi-tab-panel>
          <pi-tab-panel name="second-tab3" label="Tab2" affix="fas fa-bars">This is the content of the second tab</pi-tab-panel>
        </pi-tabs>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
// import { PiTabPanel, PiTabs } from "/dist/piman-vue3.es";
// import PiTabPanel from '@/components/Tabs/PiTabPanel.vue'
// import PiTabs from '@/components/Tabs/PiTabs.vue'

const demoTabs = ref('first-tab')
const demoTabs2 = ref('first-tab2')
const demoTabs3 = ref('first-tab3')
const demoTabs4 = ref('first-tab4')

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Tabs'},
])
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
</style>
