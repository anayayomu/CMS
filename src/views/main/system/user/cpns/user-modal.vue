<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? 'new Data' : 'edit Data'"
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="100px">
          <el-form-item label="name" prop="name">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="realname" prop="realname">
            <el-input v-model="formData.realname"></el-input>
          </el-form-item>
          <el-form-item v-if="isNewRef" label="password" prop="psd">
            <el-input show-password v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item label="cellphone" prop="cellphone">
            <el-input v-model="formData.cellphone"></el-input>
          </el-form-item>
          <el-form-item label="roleId" prop="roleId">
            <el-select
              v-for="item in entireRoles"
              :key="item.id"
              style="width: 100%"
            >
              <el-option :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="departmentId" prop="departmentId">
            <el-select
              v-for="item in entireDepartment"
              :key="item.id"
              style="width: 100%"
            >
              <el-option :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button>Cancel</el-button>
          <el-button type="primary" @click="handleContentData">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/user'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

const dialogVisible = ref(true)
const formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})
const isNewRef = ref(true)
const editData = ref()

const mainStore = useMainStore()
const { entireRoles, entireDepartment } = storeToRefs(mainStore)

// dialog handle
function setModalDialog(isNew: boolean = true, item?: any) {
  dialogVisible.value = true
  isNewRef.value = false
  if (!isNew && item) {
    // edit
    for (const key in formData) {
      formData[key] = item[key]
    }
    editData.value = item
  } else {
    // new data
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}

//提交数据，dialogVisible为false
const systemStore = useSystemStore()
function handleContentData() {
  dialogVisible.value = false
  if (!isNewRef.value && editData.value) {
    systemStore.patchEditUserDate(editData.value.id, formData)
  } else {
    systemStore.postNewUserData(formData)
  }
}

defineExpose({ setModalDialog })
</script>

<style lang="less" scoped>
</style>
