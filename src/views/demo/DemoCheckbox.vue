<template>
  <div>
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
</script>
