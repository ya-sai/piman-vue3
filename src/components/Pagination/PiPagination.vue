<template>
  <div class="pi-pagination-group">
    <div class="pi-pagination-group__item">
      <div
        v-if="layout.includes('total_item') || layout.includes('total_page')"
        class="pi-pagination-info"
      >
        {{ t('pagination.total') }}
        <span v-if="layout.includes('total_page')">{{ totalPages }} {{ t('pagination.page') }}&nbsp;</span>
        <span v-if="layout.includes('total_item')">{{ total }} {{ t('pagination.result') }}</span>
      </div>
      <div
        v-if="layout.includes('page_size')"
        class="pi-pagination-info pi-pagination-info--pagesize"
      >
        <!-- <pi-select
          v-model="syncPageSize"
          class="page-size-select"
          :options="pageSizeOptions"
          disabledClear
          :size="size"
          @input="handleChangePageSize"
        >
          <template v-slot:prefix>
            <span class="prefix">{{ t('pagination.per') }}</span>
          </template>
          <template v-slot:affix>
            <span class="affix">{{ t('pagination.result') }}</span>
          </template>
        </pi-select> -->
      </div> 
    </div>
    <div class="pi-pagination-group__item">
      <nav
        :aria-label="t('pagination.aria')"
        class="pi-pagination"
      >
        <ul>
          <li
            v-if="layout.includes('first')"
            class="first"
          >
            <pi-button
              :aria-disabled="syncCurrentPage === 1 ? true : false"
              :disabled="syncCurrentPage === 1 ? true : false"
              theme="primary-ghost"
              :size="size"
              @click="handleClickPager(1)"
            >
              <slot name="first-page-text">
                <span aria-hidden="true">⇤</span>
                <span class="visually-hidden">{{ t('pagination.first_page_text') }}</span>
              </slot>
            </pi-button>
          </li>
          <li class="prev">
            <pi-button
              :aria-disabled="syncCurrentPage === 1 ? true : false"
              :disabled="syncCurrentPage === 1 ? true : false"
              theme="primary-ghost"
              :size="size"
              @click="handleClickPager(prevPage)"
            >
              <slot name="prev-page-text">
                <span aria-hidden="true">⇠</span>
                <span class="visually-hidden">{{ t('pagination.prev_page_text') }}</span>
              </slot>
            </pi-button>
          </li>
          <li 
            v-for="item in pagers"
            :key="item"
            :class="item === syncCurrentPage ? 'current' : ''"
          >
            <pi-button
              :aria-current="item === syncCurrentPage ? true : false"
              :theme="item === syncCurrentPage ? 'primary' : 'primary-ghost'"
              :size="size"
              @click="handleClickPager(item)"
            >
              <span class="visually-hidden">{{ t('pagination.goto') }}</span>
              <span>{{ item }}</span>
              <span class="visually-hidden">{{ t('pagination.page') }}</span>
            </pi-button>
          </li>
          <li class="next">
            <pi-button
              :aria-disabled="syncCurrentPage === totalPages ? true : false"
              :disabled="(syncCurrentPage === totalPages) || (totalPages === 0) ? true : false"
              theme="primary-ghost"
              :size="size"
              @click="handleClickPager(nextPage)"
            >
              <slot name="next-page-text">
                <span aria-hidden="true">⇢</span>
                <span class="visually-hidden">{{ t('pagination.next_page_text') }}</span>
              </slot>
            </pi-button>
          </li>
          <li
            v-if="layout.includes('last')"
            class="last"
          >
            <pi-button
              :aria-disabled="syncCurrentPage === totalPages ? true : false"
              :disabled="(syncCurrentPage === totalPages) || (totalPages === 0) ? true : false"
              theme="primary-ghost"
              :size="size"
              @click="handleClickPager(totalPages)"
            >
              <slot name="last-page-text">
                <span aria-hidden="true">⇥</span>
                <span class="visually-hidden">{{ t('pagination.last_page_text') }}</span>
              </slot>
            </pi-button>
          </li>
        </ul>
      </nav>
    </div>
    <div 
      v-if="layout.includes('jump')"
      class="pi-pagination-group__item pi-pagination-group__item--jump"
    >
      <label :for="goPagesId">
        <span>{{ t('pagination.goto') }}</span>
        <!-- <pi-input
          type="number"
          :max="totalPages"
          :min="1"
          :value="jumperNumber"
          @inputKeyup="handleClickPager"
          disabled-clear
          :size="size"
          :id="goPagesId"
        /> -->
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { generateId } from '@/utils/generateId';
import { ref, onMounted, defineProps, computed, watch } from 'vue';
import useI18n from "@/locales/useI18n";

const props = defineProps ({
  total: { type: Number, required: true },
  currentPage: { type: Number, required: true },
  pagerCount: { type: Number, default: 5 },
  pageSizeOptions: {
    type: Array,
    default: () => {
      return [
        { label: '10', value: 10 },
        { label: '20', value: 20 },
        { label: '50', value: 50 },
        { label: '100', value: 100 },
      ]
    }
  },
  pageSize: { type: Number, default: 10 },
  layout: { type: Array, default: () => ['total_item', 'total_page', 'page_size', 'first', 'last', 'jump']},
  size: String
})

const { t } = useI18n()
const goPagesId = ref('')
const syncCurrentPage = ref(props.currentPage);
const syncPageSize = ref(10);

const totalPages = computed(() => Math.ceil(props.total / syncPageSize.value));
const prevPage = computed(() => syncCurrentPage.value - 1);
const nextPage = computed(() => syncCurrentPage.value + 1);
const jumperNumber = ref(syncCurrentPage.value);
const pagers = computed(() => {
  const pagerStart = (Math.ceil(syncCurrentPage.value / props.pagerCount) - 1) * props.pagerCount + 1;
  const pagerEnd = (Math.ceil(syncCurrentPage.value / props.pagerCount) - 1) * props.pagerCount + props.pagerCount;
  const pagers = [];
  for (let i = pagerStart; i <= pagerEnd; i++) {
    if (i <= totalPages.value) {
      pagers.push(i);
    }
  }
  return pagers;
});

// const handleChangePageSize = (pageSize) => {
//   emit('change:pageSize', pageSize)
// };

const emit = defineEmits([ 'input', 'blur', 'change', 'update:modelValue' ])

const handleClickPager = (page) => {
  if (page > 0 && page <= totalPages.value) {
    syncCurrentPage.value = page;
    emit('update:currentPage', page);
    emit('sync-page-param', { syncCurrentPage: page });
    emit('change:page', page);
  }
  // else {
  //   PiMsg({
  //     msg: t('pagination.exceed'),
  //   });
  // }
};

watch(syncCurrentPage, (newPage) => {
  jumperNumber.value = newPage;
});


onMounted(()=>{
  goPagesId.value = 'bpa-pagination-go-pages-' + generateId()
})

</script>