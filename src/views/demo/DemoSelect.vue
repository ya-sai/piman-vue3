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
      <router-link to="#ak-container" title="中央內容區塊" id="ak-container" accesskey="C" name="ak-container">:::</router-link>
      <h2>Select</h2>
      <section>
        <h3>Basic</h3>
        <pi-select
          v-model="value"
          :options="options"
        />
      </section>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

const options = [
  { label: 'label1', value: '1' },
  { label: 'label2', value: '2' },
  { label: 'label3', value: '3' },
  { 
    type: 'group',
    label: '第一群',
    options: [
      { label: 'label10', value: '10' },
      { label: 'label20', value: '20' },
      { label: 'label30', value: '30' }
    ]
  },
  { 
    type: 'group',
    label: '第二群',
    options: [
      { label: 'label11', value: '11' },
      { label: 'label21', value: '21' },
      { label: 'label31', value: '31' }
    ]
  },
  { label: 'label2', value: '42' },
  { label: 'label3', value: '43' },
]

const value = ref('')

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Select'},
])


</script>
