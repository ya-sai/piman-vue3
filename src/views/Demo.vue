<script setup lang="ts">
import DemoButton from "@/views/demo/DemoButton.vue";
import DemoCheckbox from "@/views/demo/DemoCheckbox.vue";
import DemoCard from "@/views/demo/DemoCard.vue";
import DemoTabs from "@/views/demo/DemoTabs.vue";
import DemoAccordion from "@/views/demo/DemoAccordion.vue";
import PiTabPanel from "@/components/Tabs/PiTabPanel.vue";
import PiTabs from "@/components/Tabs/PiTabs.vue";
import { ref } from "vue";
import DemoBreadcrumb from "@/views/demo/DemoBreadcrumb.vue";

const activeTab = ref('button')

</script>

<template>
  
  <pi-tabs v-model="activeTab">
    <pi-tab-panel name="button" label="按鈕"><DemoButton/></pi-tab-panel>
    <pi-tab-panel name="checkbox" label="核取方塊"><DemoCheckbox/></pi-tab-panel>
    <pi-tab-panel name="card" label="卡片"><DemoCard/></pi-tab-panel>
    <pi-tab-panel name="tabs" label="標籤"><DemoTabs/></pi-tab-panel>
    <pi-tab-panel name="accordion" label="手風琴"><DemoAccordion/></pi-tab-panel>
    <pi-tab-panel name="breadcrumb" label="頁面導覽(麵包屑)"><DemoBreadcrumb/></pi-tab-panel>
  </pi-tabs>
</template>

<style scoped>
</style>