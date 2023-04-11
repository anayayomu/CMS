<template>
  <div class="menu">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleReset"
    />
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @new-data-click="handleNewData"
      @edit-data="handleEdit"
    >
      <template #leader="scope">{{ scope.row[scope.prop] }}</template>
      <template #parent="scope">{{ scope.row[scope.prop] }}</template>
    </page-content>
    <page-modal :modal-config="modalConfigRef" ref="modalRef" />
  </div>
</template>

<script setup lang="ts" name="menu">
import { computed } from 'vue'
import pageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'

import searchConfig from './config/search config'
import contentConfig from './config/content config'
import modalConfig from './config/modal config'
import useMainStore from '@/store/main/main'
import usePageCount from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  const departments = mainStore.entireDepartment.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItem.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options?.push(...departments)
    }
  })
  return modalConfig
})

// search content的操作
const { contentRef, handleQueryClick, handleReset } = usePageCount()

// content modal的操作
const { modalRef, handleEdit, handleNewData } = usePageModal()
</script>

<style scoped>
</style>
