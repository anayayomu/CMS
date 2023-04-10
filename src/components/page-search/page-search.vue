<template>
  <div class="c-user-header">
    <el-form :model="form" ref="formRef" label-width="80px" size="large">
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItem" :key="item.props">
          <el-col :span="8">
            <el-form :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="form[item.prop]"></el-input>
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="form[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="beginTime"
                  end-placeholder="endTime"
                ></el-date-picker>
              </template>
              <template v-if="item.type === 'select'">
                <el-select v-model="form[item.prop]">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option
                      :label="option.label"
                      :value="option.value"
                    ></el-option>
                  </template>
                </el-select>
              </template>
            </el-form>
          </el-col>
        </template>
      </el-row>
    </el-form>

    <div class="c-btn">
      <el-button icon="Refresh" @click="handleReset">reset</el-button>
      <el-button type="primary" icon="Search" @click="handleSearch"
        >search</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

interface IProps {
  searchConfig: {
    formItem: any[]
  }
}

const emit = defineEmits(['queryClick', 'resetClick'])
const props = defineProps<IProps>()

const initialForm: any = {}
for (const item of props.searchConfig.formItem) {
  initialForm[item.prop] = item.initialValue ?? ''
}
const form = reactive(initialForm)

const formRef = ref<InstanceType<typeof ElForm>>()
function handleReset() {
  formRef.value?.resetFields()
  emit('resetClick')
}

function handleSearch() {
  emit('queryClick', form)
  console.log(form)
}

//
</script>

<style lang="less" scoped>
.c-user-header {
  .el-form-item {
    padding: 10px 30px;
    margin-bottom: 0;
  }

  .c-btns {
    text-align: right;
    padding: 0 50px 10px 0;
  }
}
</style>
