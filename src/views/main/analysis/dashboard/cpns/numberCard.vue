<template>
  <div class="numberCard">
    <div class="header">
      <span>{{ title }}</span>
      <el-tooltip :content="tips" placement="bottom" effect="light">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="count">
      <span ref="countOneRef">{{ number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ subTitle }}</span>
      <span ref="countTwoRef">{{ number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import { onMounted, ref } from 'vue'

interface IProps {
  amount?: string
  title: string
  tips: string
  number1?: number
  number2?: number
  subTitle: string
}
const prop = withDefaults(defineProps<IProps>(), {
  title: 'goods total',
  tips: 'goods total',
  number1: 509989,
  number2: 509989,
  subTitle: 'goods total'
})

const countOneRef = ref<HTMLElement>()
const countTwoRef = ref<HTMLSpanElement>()
const countion = {
  prefix: prop.amount === 'saleroom' ? '¥' : ''
}
onMounted(() => {
  const countupOne = new CountUp(countOneRef.value!, prop.number1, countion)
  const countupTwo = new CountUp(countTwoRef.value!, prop.number2, countion)
  countupOne.start()
  countupTwo.start()
})

//
</script>

<style lang="less" scoped>
.numberCard {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.header {
  display: flex;
  height: 38px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  justify-content: space-between;
  align-items: flex-end;
}
.count {
  display: flex;
  margin-left: 0px;
  flex: 1;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.45);
  justify-content: center;
  align-items: flex-start;
}
.footer {
  display: flex;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.45);
  border-top: 1px solid #f0f0f0;
}
</style>
