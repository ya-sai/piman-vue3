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
      <h2>Checkbox</h2>
      <section>
        <h3>Basic</h3>
        <pi-checkbox value="1" v-model="valCheckbox">Checkbox1</pi-checkbox>
        <pi-checkbox value="2" v-model="valCheckbox">Checkbox2</pi-checkbox>
        <pi-checkbox value="3" v-model="valCheckbox">Checkbox3</pi-checkbox>
        <div>{{ valCheckbox }}  <pi-button size="small" @click="onClearCheckbox">Clear</pi-button></div>
      </section>
      <section>
        <h3>Disabled</h3>
        <pi-checkbox value="1" v-model="valCheckbox" disabled>Checkbox1</pi-checkbox>
        <pi-checkbox value="2" v-model="valCheckbox" disabled>Checkbox2</pi-checkbox>
        <pi-checkbox value="3" v-model="valCheckbox" disabled>Checkbox3</pi-checkbox>
        <div>{{ valCheckbox }}  <pi-button size="small" @click="onClearCheckbox">Clear</pi-button></div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

//@ts-ignore
// import { PiButton, PiCheckbox } from "/dist/piman-vue3.es";

// checkbox
const valCheckbox = ref([])
const onClearCheckbox = () => {
  valCheckbox.value = []
}

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Checkbox'},
])
</script>
