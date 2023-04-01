<template>
  <div class="formAccount">
    <el-form :model="form" label-width="50px">
      <el-form-item label="act">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="psd">
        <el-input v-model="form.psd" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: 'coderwhy',
  psd: 123456
})
</script>

<style lang="less" scoped>
</style>
