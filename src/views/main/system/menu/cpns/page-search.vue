<template>
  <div class="c-user-header">
    <el-form :model="form" ref="formRef" label-width="80px" size="large">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="user" prop="name">
            <el-input
              v-model="form.name"
              placeholder="please username"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="name" prop="leader">
            <el-input
              v-model="form.leader"
              placeholder="please name"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="name" prop="createAt">
            <el-date-picker
              v-model="form.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="startTime"
              end-placeholder="endTime"
              size="large"
            />
          </el-form-item>
        </el-col>
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

const emit = defineEmits(['queryClick', 'resetClick'])

const form = reactive({
  name: '',
  leader: '',
  createAt: ''
})

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
