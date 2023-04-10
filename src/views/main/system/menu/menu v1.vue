<template>
  <div class="menu">
    <page-search @query-click="handleQueryClick" @reset-click="handleReset" />
    <page-content
      ref="contentRef"
      @new-data-click="handleNewData"
      @edit-data="handleEdit"
    />
    <page-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts" name="menu">
import { ref } from 'vue'
import pageSearch from './cpns/page-search.vue'
import PageContent from './cpns/page-content.vue'
import PageModal from './cpns/page-modal.vue'

const contentRef = ref<InstanceType<typeof PageContent>>()
function handleQueryClick(queryInfo: any) {
  contentRef.value?.fetchPageList(queryInfo)
}
function handleReset() {
  contentRef.value?.fetchPageList()
}

const modalRef = ref<InstanceType<typeof PageModal>>()
function handleNewData() {
  modalRef.value?.setModalDialog()
}
function handleEdit(item: any) {
  modalRef.value?.setModalDialog(false, item)
}
</script>

<style scoped>
</style>
