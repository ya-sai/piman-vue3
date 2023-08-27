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

const activeTab = ref('accordion')

</script>

<template>
  <pi-tabs v-model="activeTab">
    <pi-tab-panel name="accordion" label="Accordion"><DemoAccordion/></pi-tab-panel>
    <pi-tab-panel name="breadcrumb" label="Breadcrumbs"><DemoBreadcrumb/></pi-tab-panel>
    <pi-tab-panel name="button" label="Button"><DemoButton/></pi-tab-panel>
    <pi-tab-panel name="card" label="Card"><DemoCard/></pi-tab-panel>
    <pi-tab-panel name="checkbox" label="Checkbox"><DemoCheckbox/></pi-tab-panel>
    <pi-tab-panel name="tabs" label="Tabs"><DemoTabs/></pi-tab-panel>
  </pi-tabs>
</template>

<style>
body {
  padding: 1rem;
}
h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
}
h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}
section {
  margin-bottom: 2rem;
}
</style>