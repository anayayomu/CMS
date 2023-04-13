<template>
  <div class="role">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleReset"
    />
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @edit-data="handleEdit"
      @new-data-click="handleNewData"
    />
    <page-modal
      :other-info="otherInfo"
      :modal-config="modalConfig"
      ref="modalRef"
    >
      <template #menuList>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleElTree"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { nextTick, ref } from 'vue'
import type { ElTree } from 'element-plus'

import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'

import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content.config'

import pageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'

import usePageCount from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useMainStore from '@/store/main/main'

import { mapMenuList } from '@/utils/mapMenu'

const { contentRef, handleQueryClick, handleReset } = usePageCount()
const { modalRef, handleEdit, handleNewData } = usePageModal(editCallBack)

const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)

const otherInfo = ref({})
function handleElTree(data: any, item: any) {
  const menuList = [...data.checkedKeys, ...item.halfCheckedKeys]
  otherInfo.value = { menuList }
}

const treeRef = ref<InstanceType<typeof ElTree>>()
function editCallBack(itemData: any) {
  console.log(itemData)
  nextTick(() => {
    const menuId = mapMenuList(itemData.menuList)
    treeRef.value?.setCheckedKeys(menuId)
  })
}

//
</script>

<style lang="less" scoped>
</style>
