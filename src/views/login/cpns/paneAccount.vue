<template>
  <div class="formAccount">
    <el-form
      ref="formRef"
      :rules="rules"
      :model="form"
      label-width="50px"
      status-icon
    >
      <el-form-item label="act" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="psd" prop="psd">
        <el-input v-model="form.psd" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/index'
import { local } from '@/utils/cache'
import type { IAccount } from '../types/index'
import type { FormRules, ElForm } from 'element-plus'

const form = reactive<IAccount>({
  name: local.getCache('name') ?? '',
  psd: local.getCache('password') ?? ''
})
const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Account', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,20}$/,
      message: 'Length should be 3 to 20',
      trigger: 'blur'
    }
  ],
  psd: [
    { required: true, message: 'Please input Account', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: 'Length should be > 6',
      trigger: 'blur'
    }
  ]
})

const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction(isKeep: boolean) {
  formRef.value?.validate((valid) => {
    if (valid) {
      const name = form.name
      const password = form.psd
      loginStore.loginData({ name, password }).then(() => {
        if (isKeep) {
          local.setCache('name', name)
          local.setCache('password', password)
        } else {
          local.removeCache('name')
          local.removeCache('password')
        }
      })
    } else {
      ElMessage.error('account or password no right')
    }
  })
}
defineExpose({
  loginAction
})
console.log('1111')
</script>

<style lang="less" scoped>
</style>
