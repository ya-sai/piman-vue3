<template>
  <div class="page">
    <div class="page-header">
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
      <router-link to="#ak-container" title="中央內容區塊" id="ak-container" accesskey="C" name="ak-container">:::</router-link>
      <h2>Pagination</h2>
      <section>
        <!-- 
          @change:pageSize="onChangeSize" 
          :pageSizeOptions="pageSizeOptions"
          not yet
        -->
        <pi-pagination
          :total="totalPages"
          v-model:current-page="currentPage"
          :pager-count="pagerCount"
          @change:page="onChangePage"
          :pageSize="pageSize"
        />
      </section>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
// import { PiInput} from "/dist/piman-vue3.es";

const totalPages = ref(100)
const currentPage = ref(2)
const pagerCount = ref(5)
// const pageSizeOptions = [
//   { label: '3', value: 3 },
//   { label: '18', value: 18 }
// ]
const pageSize = ref(5)

const onChangePage = (page: number) => {
  console.log('turn to ', page);
}

// const onChangeSize= (size: number) => {
//   pageSize.value = size
//   currentPage.value = 1
//   console.log('expand to ', size);
// }

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: 'Input'},
])
</script>
