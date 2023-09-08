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
      <h2>Radio</h2>
      <section>
        <h3>Basic</h3>
        <pi-radio name="testname" value="1" v-model="valRaio" id="a">單選按鈕 1</pi-radio>
        <pi-radio name="testname" value="2" v-model="valRaio" id="b">單選按鈕 2</pi-radio>
        <pi-radio name="testname" value="3" v-model="valRaio" id="c">單選按鈕 3</pi-radio>
        <br>
        Select: {{ valRaio }}
      </section>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
// import { PiRadio } from "/dist/piman-vue3.es";

// checkbox
const valRaio = ref(3)

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Radio'},
])
</script>
