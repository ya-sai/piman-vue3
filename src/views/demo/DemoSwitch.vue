<template>
  <div class="page">
    <div class="page-header">
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
      <h2>Switch</h2>
      <section>
        <h3>Basic</h3>
        <pi-switch
          labelText="這是 Switch 開關按鈕"
          v-model="isOpen"
        />
      </section>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
// import { PiSwitch } from "/dist/piman-vue3.es";
// import PiSwitch from '@/components/Switch/PiSwitch.vue'

const isOpen = ref(false)
const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Switch'},
])
</script>
