<template>
  <div class="s-user">
    <user-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <user-content
      ref="contentRef"
      @new-data-click="handleNewData"
      @edit-data="handleEditClick"
    />
    <user-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userContent from './cpns/user-content.vue'
import userSearch from './cpns/user-search.vue'
import userModal from './cpns/user-modal.vue'

//对content的操作
const contentRef = ref<InstanceType<typeof userContent>>()
function handleQueryClick(formData: any) {
  contentRef.value?.fetchUserList(formData)
}
function handleResetClick() {
  contentRef.value?.fetchUserList()
}

//对dialog的操作
const modalRef = ref<InstanceType<typeof userModal>>()
function handleNewData() {
  modalRef.value?.setModalDialog(true)
}
function handleEditClick(item: any) {
  modalRef.value?.setModalDialog(false, item)
}
</script>

<style lang="less" scoped>
</style>
