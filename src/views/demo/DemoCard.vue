<template>
  <div>
    <h2>Card</h2>
    <section>
      <h3>Basic</h3>
      <pi-card>
        Cotnent
      </pi-card>
    </section>
    <section>
      <h3>Padding = 0</h3>
      <pi-card nopadding>
        Cotnent
      </pi-card>
    </section>
    <section>
      <h3>Custom Header</h3>
      <pi-card header="Custom">
        Cotnent
      </pi-card>
      <br>
      <pi-card>
        <template v-slot:header>
          <mark>Custom</mark>
          <pi-button theme="primary">Button</pi-button>
        </template>
        Cotnent
      </pi-card>
    </section>
    <section>
      <h3>Custom Header + Box-Shadow</h3>
      <pi-card shadow>
        <template v-slot:header>
          <mark>Custom</mark>
          <pi-button theme="primary">Button</pi-button>
        </template>
        Cotnent
        <template v-slot:footer>
          <pi-button theme="primary">Button</pi-button>
          <pi-button>Button</pi-button>
        </template>
      </pi-card>
    </section>
    <section>
      <h3>Custom Header + Box-Shadow + Custom Footer</h3>
      <pi-card shadow>
        <template v-slot:header>
          <mark>Custom</mark>
          <pi-button theme="primary">Button</pi-button>
        </template>
        Cotnent
        <template v-slot:footer>
          <pi-button theme="primary">Button</pi-button>
          <pi-button>Button</pi-button>
        </template>
      </pi-card>
    </section>
    <section>
      <h3>Custom Header + Box-Shadow + Custom Footer + Padding = 0</h3>
      <pi-card shadow  nopadding>
        <template v-slot:header>
          <mark>Custom</mark>
          <pi-button theme="primary">Button</pi-button>
        </template>
        <pi-accordion>
          <pi-accordion-item>
            Content 1
          </pi-accordion-item>
          <pi-accordion-item>
            Content 2
          </pi-accordion-item>
        </pi-accordion>
        <template v-slot:footer>
          <pi-button theme="primary">Button</pi-button>
          <pi-button>Button</pi-button>
        </template>
      </pi-card>
    </section>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
// import { PiButton, PiCard, PiAccordion, PiAccordionItem } from "/dist/piman-vue3.es";

</script>

<style scoped>
.pi-card {
  max-width: 375px;
}
</style>
