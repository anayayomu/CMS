<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountAnalysis" :key="item.amount">
        <el-col :span="6">
          <number-card v-bind="item" />
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <div>
          <pie-echarts />
        </div>
      </el-col>
      <el-col :span="7">
        <div></div>
      </el-col>
      <el-col :span="7">
        <div></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'
import numberCard from './cpns/numberCard.vue'
import pieEcharts from '@/components/echarts/src/pie-echarts.vue'

const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisData()

const { amountAnalysis } = storeToRefs(analysisStore)

//
</script>

<style lang="less" scoped>
</style>
