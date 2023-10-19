<template>
  <div
    :id=fixId
    ref="refPiSelect"
    class="pi-select"
    v-click-outside="vcoConfig"
  >
    <pi-button
      type="button"
      :id="`${fixId}-btn`"
      :theme=theme
      ref="refOpenBtn"
      aria-haspopup="listbox"
      :aria-expanded="listboxOpen ? 'true' : 'false'"
      :aria-controls="`${fixId}-listbox`"
      :disabled="disabled"
      :size="size"
      @click="handleClickSelect"
      :class="[
        'pi-select-btn',
        listboxOpen ? 'pi-select-btn--open' : '',
      ]"
    >
      <slot name="prefix"></slot>
      <span
        v-if="selectedVal.length === 0"
        :id="`${fixId}-label-text`"
        class="pi-select-text pi-select-placeholder"
      >
        <span v-if="placeholder">{{ placeholder }}</span>
        <span v-else>{{ t('select.placeholder') }}</span>
        <span class="visually-hidden">{{ t('select.hint') }}</span>
      </span>
      <span
        v-else-if="multiple !== undefined"
        class="pi-select-text multiple-label-group"
      >
        <template v-if="multiple === 'accordion' && selectedVal.length > 1">
          <span class="multiple-label">{{ selectedVal[0].label }}</span>
          <span class="pi-badge">+{{ selectedVal.length -1 }}</span>
        </template>
        <span
          v-else
          v-for="item in selectedVal" :key="item.value"
          class="multiple-label"
        >
          {{ item.label }}
        </span>
      </span>
      <span
        v-else
        :id="`${fixId}-label-text`"
        class="pi-select-text"
      >
        {{ selectedVal[0].label  }}
      </span>
      <slot name="affix"></slot>
      <div
        role="button"
        v-if="selectedVal.length > 0 && disabledClear == false"
        tabindex="0"
        @click.stop="handleClearSelected"
        @keydown.enter.prevent.stop="handleClearSelected"
        @keydown.enter.prevent.space="handleClearSelected"
        class="pi-select-clear-btn"
      >
        <span aria-hidden="true">✖</span>
        <span class="visually-hidden">{{ t('select.clear') }}</span>
      </div>
    </pi-button>
    <ul
      :id="`${fixId}-listbox`"
      role="listbox"
      ref="refListbox"
      tabindex="-1"
      :aria-labelledby="`${fixId}-label-text`"
      :aria-activedescendant="selectedId"
      :aria-multiselectable="multiple !== undefined"
      :class="[
        'pi-select-popup',
        listboxOpen ? 'pi-select-popup--open' : '',
        listboxClass ? listboxClass : ''
      ]"
    >
      <div
        v-if="toolbar"
        class="toolbar"
      >
        <label :for="`${fixId}-search`">
          <pi-input
            v-model="searchInput"
            ref="refSelectSearch"
            v-if="toolbar.includes('search')"
            :id="`${fixId}-search`"
            :placeholder="t('select.search')"
            @input="debounceSearch"
          />
          <span class="visually-hidden">{{ t('select.area_search') }}</span>
        </label>
      </div>
      <template v-for="(item, index) in innerOptions">
        <!-- 群組選項 -->
        <li
          role="group"
          v-if="item.type === 'group'"
          :key="`${index}-group`"
          tabindex="-1"
        >
          <ul
            role="none"
            :aria-label="item.label"
            tabindex="-1"
            :aria-labelledby="`${fixId}-optgroup-${index}`"
          >
            <li 
              role="presentation"
              class="optgroup-title"
              :id="`${fixId}-optgroup-${index}`"
            >
              {{ item.label }}
            </li>
            <li
              role="option"
              :id="`${fixId}-optgroup-${index}-option-${childIndex}`"
              v-for="(item, childIndex) in item.options"
              :key="childIndex"
              tabindex="0"
              :class="{
                'option-checked': item.checked,
                'option-multi-checked': multiple !== undefined
              }"
              :aria-selected="item.checked"
              @click="handleClickOption(item, childIndex, index, true)"
              @keydown.enter.prevent.stop="handleClickOption(item, childIndex, index, true)"
              @keydown.space.prevent.stop="onKeypress"
            >
              <slot name="option" :option="item">{{ item.label }}</slot>
            </li>
          </ul>
        </li>
        <!-- 選項 -->
        <li
          v-else
          role="option"
          :id="`${fixId}-option-${index}`"
          :key="index"
          tabindex="0"
          :class="{
            'option-checked': item.checked,
            'option-checked--multi': multiple !== undefined
          }"
          :aria-selected="item.checked"
          @click="handleClickOption(item, index, false)"
          @keydown.enter.prevent.stop="handleClickOption(item, index, false)"
          @keydown.space.prevent.stop="onKeypress"
        >
          <slot name="option" :option="item">{{ item.label }}</slot>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted, onBeforeUnmount, nextTick, getCurrentInstance } from 'vue'
import useI18n from "@/locales/useI18n"
import { generateId } from '@/utils/generateId'
import useClickOutside from "@/composables/useClickOutside"
import FocusTrap from '@/composables/useFocusTrap'


interface ThisData {
  listboxOpen: boolean;
  selectedId: string;
  selected: string | null | {value: string, label: string};
  innerOptions: {value: string, label: string, checked: boolean}[];
  options: (Option|OptionGroup)[];
  selectedVal: {value: string, label: string}[];
  keyword: string;
  searchInput: string;
  debounce: { wait: number, timer: number };
  formItem: Vue | null;
  trap: FocusTrap | null;
  toolbar: string;
  vcoIntercept: null|Vue;
  close(): void;
  open(): void;
  handleEsc(): void;
  checkInsideList(): boolean;
  handleClickOutside(): void;
  onSearch(): void;
  resetTrap(el: HTMLElement): void;
}

interface OptionGroup {
  label: string,
  type: 'group',
  options: Option[]
}

interface Option {
  value: string,
  label: string,
}

const props = defineProps({
  id: String,
  theme: String,
  options: {
    type: Array,
    required: true,
  },
  modelValue: [ String, Number, Array ],
  multiple: [ String ],
  placeholder: String,
  disabledClear: {
    type: Boolean,
    default: false
  },
  disabled: Boolean,
  toolbar: Array,
  optionWidth: String,
  size: String,
  listboxClass: String,
})
const emit = defineEmits([ 'search', 'input', 'blur', 'change', 'toggleSlotItem', 'mountVcoItem' ])

const { t } = useI18n()

const refPiSelect = ref(null)
const refOpenBtn = ref(null)
const refListbox = ref(null)
const refSelectSearch = ref(null)
const listboxOpen = ref(false)
const selectedId = ref('')
// selected: this.label ? this.label : this.options.length > 0 ? this.options[0] : null,
const trap = ref(null)
const fixId = ref(generateId());
const keyword = ref('')
const searchInput = ref('')
const debounce = reactive({
  timer: undefined,
  wait: 800
})
const addedOptions = ref([])


const debounceSearch = () => {
  if(debounce.timer) { 
    clearTimeout(debounce.timer)
  }
  debounce.timer = setTimeout(() => {
    onSearch()
  }, debounce.wait);
}

const onSearch = () => {
  if(emit && emit.search) {
    emit('search', searchInput.value)
  }
  else {
    keyword.value = searchInput.value
    resetTrap(refSelectSearch.value as unknown as HTMLElement)
  }
}

const resetTrap = (firstFocus: HTMLElement) => {
  nextTick(()=>{
    if(trap.value) trap.value.dismiss()
    const list: HTMLElement = refListbox as unknown as HTMLElement
    trap.value = new FocusTrap([refPiSelect as unknown as HTMLElement, list], firstFocus)
  })
}

const checkInsideList = (event: Event) => {
  const list: HTMLElement = refListbox as unknown as HTMLElement
  return !list.contains(event.target as Node)
}

const handleClickSelect = () => {
  if(props.disabled) return
  if(listboxOpen.value) close()
  else open()
}

const handleClearSelected = ()=> {
  innerOptions.forEach(o => o.checked = false)
  const val = props.multiple === undefined ? '' : []
  emit('input', val);
  if(formItem.value) formItem.value.emit('change', val)
  // this.selected = '';
  selectedId.value = '';
  document.getElementById((this as any).fixId+'-btn')!.focus();
}

const handleClickOption = (item: {value: any, label: string}, index: number, parentIndex: number, group: boolean) => {
  selectedId.value = group ? `${(this as any).fixId}-optgroup-${parentIndex}-option-${index}` : `${(this as any).fixId}-option-${index}`;
  if(props.multiple === undefined){
    // this.selected = item;
    close()
    selectedVal.value = item.value;
    // document.getElementById((this as any).fixId)?.focus();
  }
  else {
    let arr = selectedVal.value.map(s=>s.value)
    let idx = arr.indexOf(item.value)
    if(idx >= 0) {
      arr.splice(idx, 1)
      selectedVal.value = arr as any
    }
    else {
      arr.push(item.value)
      selectedVal.value = arr as any
    }
  }
}

const onKeypress = (evt: KeyboardEvent) => {
  if( evt.target ) (evt.target as HTMLElement).click()
}

const handleClickOutside = () => {
  if(listboxOpen.value) close()
}

const vcoConfig = reactive({
  handler: handleClickOutside,
  middleware: checkInsideList
})

const handleEsc = (e: KeyboardEvent) => {
  if(e.key === 'Escape' || e.keyCode === 27) close()
}

const close = () => {
  listboxOpen.value = false
  const list: HTMLElement = refListbox as unknown as HTMLElement
  const btn: HTMLButtonElement = refOpenBtn as unknown as HTMLButtonElement

  if(trap.value){
    trap.value.dismiss()
    trap.value = null as any
  }
  btn.focus()
  document.body.removeChild(list)
  
  if(formItem.value) formItem.value.emit('blur')

  document.removeEventListener('keyup', handleEsc)

  if(vcoIntercept.value){
    vcoIntercept.value.emit('toggleSlotItem', false, this)
  }
}

const open = () => {
  listboxOpen.value = true
  const list: HTMLElement = refListbox as unknown as HTMLElement
  const btn: HTMLButtonElement = refOpenBtn as unknown as HTMLButtonElement

  document.body.appendChild(list)
  trap.value = new FocusTrap([refPiSelect as unknown as HTMLElement, list])

  const coor = btn.getBoundingClientRect()
  list.style.top = window.pageYOffset + coor.top + coor.height + 'px'
    // listbox min-width = 8rem
  const totalWidthOfDropdown = coor.left + (16 * 8)
  if((totalWidthOfDropdown > document.body.clientWidth) && (coor.width < 16 * 8)) {
      list.style.right = "0"
      list.style.width = "auto"
  }else {
    list.style.left = coor.left + 'px'
    list.style.width = props.optionWidth || coor.width + 'px'
  }

  document.addEventListener('keyup', handleEsc)

  if(vcoIntercept.value){
    vcoIntercept.value.emit('toggleSlotItem', true, this)
  }
}


const selectedVal = computed({
  get: () => {
    if(props.multiple === undefined){
      let groupOpt: typeof Option |undefined;
      const opt = props.options
        .find(o => {
          if((o as OptionGroup).type === 'group'){
            const found = (o as OptionGroup).options
              .find(subO => subO.value === props.modelValue )
            if(found) groupOpt = found
          }
          else {
            return (o as Option).value === props.modelValue
          }
        })
        
      return opt? [opt] : groupOpt ? [groupOpt] : []
    }
    else {
      let groupOpts: Option[] = []
      const opt = props.options.filter(o => {
        if((o as OptionGroup).type === 'group'){
          const found = (o as OptionGroup).options
            .filter( subO => (this as any).value.includes(subO.value))
          groupOpts = groupOpts.concat(found)
        }
        else {
          return (props.modelValue as Array<string|number>).includes((o as Option).value)
        }
      })
      return opt.concat(groupOpts)
    }
  },
  set: (val) => {
    (this as any).emit('input', val)
    if((this as any).formItem){
      (this as any).$nextTick(()=>{
        (this as any).formItem!.emit('change', val)
      })
    }
  }
})

const formItem = computed(()=> {
  const self = getCurrentInstance()
  if(!self) return null
  let parent = self.parent;
  if(!parent) return null
  let parentName = parent.type.__name;

  while (parentName !== 'PiFormItem') {
    parent = parent.parent;
    if(!parent) return null
    parentName = parent.type.__name;
  }
  return parent;
})

const innerOptions = computed(()=> {
  let result = props.options.map((opt: OptionGroup|Option) => {
    if((opt as OptionGroup).type === 'group'){
      let subOpts =  (opt as OptionGroup).options.map(subO => {
        return {
          checked: selectedVal.value.map(s=>s.value).includes(subO.value),
          ...subO
        }
      })
      if(keyword.value !== '') subOpts = subOpts.filter(opt => opt.label.includes(keyword.value))
      
      return {
        ...opt,
        options: subOpts
      }
    }else{
      return { 
        checked: selectedVal.value.map(s=>(s as any).value).includes((opt as Option).value), 
        ...opt 
      }
    }
  })
  if(keyword.value !== '') {
    result = result.filter(opt => (opt as OptionGroup).type==='group' || opt.label.includes(keyword.value))
  }

  return result
})

const optionsLength = computed(() => {
  let opt = 0
  let groupOpt = 0
  props.options.forEach(o => {
    if((o as OptionGroup).type === 'group'){
      groupOpt += (o as OptionGroup).options.length
    }
    else opt++
  })
  return opt + groupOpt
})

const vcoIntercept = computed(() => {
  const instance = getCurrentInstance();
  if (!instance) {
    return null;
  }
  let parent = instance.parent?.proxy as Vue | null;

  while (parent) {
    const hasIntercept = parent.$options?.vcoIntercept;
    if (hasIntercept) {
      return parent;
    }
    parent = parent.$parent?.proxy as Vue | null;
  }

  return null;
})

watch(optionsLength, (newValue, oldValue) => {
  if (listboxOpen.value) resetTrap(refSelectSearch.value as unknown as HTMLElement)
})

onMounted(() => {
  if(props.id) {
    fixId.value = 'bpa-select-' + props.id
  } else {
    fixId.value = 'bpa-select-' + generateId() // 假設 generateId 是一個可用的函數
  }

  const list: HTMLElement = ref('refListbox') as unknown as HTMLElement
  if (vcoIntercept.value) {
    vcoIntercept.value.emit('mountVcoItem', list)
  }
})

onBeforeUnmount(() => {
  if (listboxOpen.value) {
    close()
  }
})
</script>