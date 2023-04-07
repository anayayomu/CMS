<template>
  <div class="login-pinal">
    <h1>管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <div class="count">
              <el-icon><UserFilled /></el-icon>
              <span>账号登录</span>
            </div>
          </template>
          <pane-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="count">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </div>
          </template>
          <pane-phone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isKeep" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" @click="handlerLogin" type="primary"
      >Login</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import PaneAccount from './PaneAccount.vue'
import panePhone from './panePhone.vue'
import { local } from '@/utils/cache'

const activeName = ref<string>('account')
const isKeep = ref<boolean>(local.getCache('isKeep') ?? false)
const accountRef = ref<InstanceType<typeof PaneAccount>>()

watch(isKeep, (newValue) => {
  local.setCache('isKeep', newValue)
})
function handlerLogin() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction(isKeep.value)
    // console.log(accountRef.value)
  } else {
    console.log('phone')
  }
}
</script>

<style lang="less" scoped>
.login-pinal {
  width: 330px;

  h1 {
    text-align: center;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
  }
}
</style>
