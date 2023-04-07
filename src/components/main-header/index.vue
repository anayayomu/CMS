<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenu">
      <el-icon size="25">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">
        <header-crumb />
      </div>
      <div class="info">
        <header-info />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headerCrumb from './cpns/header-crumb.vue'
import headerInfo from './cpns/headerInfo.vue'

const emit = defineEmits(['foldChange'])

const isFold = ref(false)
function handleMenu() {
  isFold.value = !isFold.value

  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 15px;
  }
}
</style>
