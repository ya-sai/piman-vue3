<template>
  <div>
    <h2>Accordion</h2>
    <section>
      <h3>Basic</h3>
      <pi-accordion>
        <pi-accordion-item>
          Content
        </pi-accordion-item>
        <pi-accordion-item open>
          Content (set default open)
          <pi-accordion>
            <pi-accordion-item>
              Content
            </pi-accordion-item>
            <pi-accordion-item open>
              Content (set default open)
            </pi-accordion-item>
          </pi-accordion>
        </pi-accordion-item>
      </pi-accordion>
    </section>
    <section>
      <h3>Custom Header</h3>
      <pi-accordion>
        <pi-accordion-item title="Custom">
          Content
        </pi-accordion-item>
        <pi-accordion-item>
          <template v-slot:title><mark>Custom(HTML)</mark></template>
          Content
        </pi-accordion-item>
      </pi-accordion>
    </section>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
// import { PiAccordion, PiAccordionItem } from "/dist/piman-vue3.es";

</script>
