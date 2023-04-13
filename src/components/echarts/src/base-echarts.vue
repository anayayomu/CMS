<template>
  <div class="baseEcharts">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echart from 'echarts'
import { onMounted, ref } from 'vue'
import type { EChartsOption } from 'echarts'

interface IProps {
  option: EChartsOption
}
const prop = defineProps<IProps>()

const echartRef = ref<HTMLElement>()
onMounted(() => {
  const echartInstance = echart.init(echartRef.value!, 'light', {
    renderer: 'canvas'
  })
  echartInstance.setOption(prop.option)
})

//
</script>

<style lang="less" scoped>
</style>
