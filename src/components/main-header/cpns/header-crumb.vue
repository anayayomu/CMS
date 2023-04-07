<template>
  <div class="h-crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breakcrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useLoginStore from '@/store/login'
import { mapPathCrumb } from '@/utils/mapMenu'
import { useRoute } from 'vue-router'

const route = useRoute()
const userMenu = useLoginStore().userMenu
const breakcrumbs = computed(() => {
  return mapPathCrumb(route.path, userMenu)
})
</script>

<style lang="less" scoped>
.h-crumb {
  :deep(.el-breadcrumb__inner) {
    color: #fff;
  }
}
</style>
