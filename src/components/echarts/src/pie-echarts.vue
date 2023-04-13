<template>
  <div class="pieEChart">
    <base-echarts :option="option" />
  </div>
</template>

<script setup lang="ts">
import baseEcharts from './base-echarts.vue'
import type { EChartsOption } from 'echarts'

const option: EChartsOption = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
}
</script>

<style lang="less" scoped>
</style>
