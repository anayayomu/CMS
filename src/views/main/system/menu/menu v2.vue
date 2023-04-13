<template>
  <div class="menu">
    <page-content :content-config="contentConfig" />
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config v1/content.config'
</script>

<style lang="less" scoped>
</style>
