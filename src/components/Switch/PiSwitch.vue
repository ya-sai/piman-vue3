<template>
  <div class="pi-switch">
    <button
      type="button"
      role="switch"
      :aria-checked="`${value}`"
      :id="`pi-switch-${fixId}`"
      @click="onSwitch"
      @blur="onEvent('blur')"
    >
      <div class="pi-switch-text pi-switch-text--close">
        <slot name="close-text">{{ t('switch.off') }}</slot>
      </div>
      <div class="pi-switch-text pi-switch-text--open">
        <slot name="open-text">{{ t('switch.on') }}</slot>
      </div>
    </button>
    <label
      :for="`pi-switch-${fixId}`"
      class="visually-hidden"
    >
      {{ labelText }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { generateId } from '@/utils/generateId';
import useI18n from "@/locales/useI18n";

const props = defineProps({
  id: String,
  labelText: {
    type: String,
    required: true,
  },
  value: Boolean,
});

const { t } = useI18n()

const fixId = ref('');
const switchOpen = ref(false);

const formItem = computed(() => {
  let parent = $parent;
  if (!parent) return null;
  let parentName = parent.$options.name;

  while (parentName !== 'PiFormItem') {
    parent = parent.$parent;
    if (!parent) return null;
    parentName = parent.$options.name;
  }
  return parent;
});

const onEvent = (event: 'blur' | 'change') => {
  nextTick(() => {
    if (formItem.value) formItem.value.$emit(event);
  });
};

const onSwitch = () => {
  switchOpen.value = !props.value;
  $emit('update:value', switchOpen.value);
  $emit('change', switchOpen.value);
  onEvent('change');
};

onMounted(() => {
  if(props.id){
    fixId.value = props.id
  }
  else {
    fixId.value = String(generateId())
  }
});
</script>

<style scoped>
.pi-switch {
  button {
    padding: 0.25rem;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    transition: background-color 160ms ease-in;
    &[aria-checked="false"] {
      background-color: lighten($color-gray, 30%);
      transition: background-color 160ms ease-in;
      .pi-switch-text--close {
        background-color: $color-white;
      }
    }
    &[aria-checked="true"] {
      background-color: $color-primary;
      transition: background-color 160ms ease-in;
      .pi-switch-text--close {
        color: $color-white;
      }
      .pi-switch-text--open {
        background-color: $color-white;
      }
    }
    &:hover {
      box-shadow: 0 0 0 1px $color-primary;
    }
    &:active {
      box-shadow: 0 0 0 1px $color-primary;
    }
    &:focus {
      box-shadow: 0 0 0 3px $outline-color;
    }
  }
}

.pi-switch-text {
  color: $color-black;
  padding: 0.25rem 0.5rem;
  border-radius: 0.1875rem;
}
</style>