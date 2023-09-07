<template>
  <div>
    <pi-switch
      labelText="開關說明"
      v-model="isOpen"
    />
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
// import { PiSwitch } from "/dist/piman-vue3.es";
// import PiSwitch from '@/components/Switch/PiSwitch.vue'

const isOpen = ref(true)
</script>
