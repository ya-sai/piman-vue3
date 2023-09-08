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
      <h2>Breadcrumb</h2>
      <section>
        <h3>Basic</h3>
        <pi-breadcrumb key="/">
          <pi-breadcrumb-item
            v-for="(pathItem, pathIndex) in path"
            :key="`pathIndex-${pathIndex}`"
            :title="`前往${pathItem.title}`"
            :to="pathItem.url"
          >
            {{ pathItem.title }}
          </pi-breadcrumb-item>
        </pi-breadcrumb>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
// import { PiBreadcrumb, PiBreadcrumbItem } from "/dist/piman-vue3.es";
// import PiBreadcrumb from '@/components/Breadcrumb/PiBreadcrumb.vue'
// import PiBreadcrumbItem from '@/components/Breadcrumb/PiBreadcrumbItem.vue'

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Breadcrumb'},
])
</script>
