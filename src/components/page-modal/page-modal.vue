<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="
        isNewRef ? modalConfig.header.newTitle : modalConfig.header.editTitle
      "
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="100px">
          <template v-for="item in modalConfig.formItem" :key="item.prop">
            <el-form :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="formData[item.prop]"></el-input>
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="beginTime"
                  end-placeholder="endTime"
                ></el-date-picker>
              </template>
              <template v-if="item.type === 'select'">
                <el-select v-model="formData[item.prop]">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option
                      :label="option.label"
                      :value="option.value"
                    ></el-option>
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'custom'">
                <slot name="item.slotName"></slot>
              </template>
            </el-form>
          </template>
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
import useSystemStore from '@/store/main/system/user'
import modalConfig from '@/views/main/system/menu/config/modal config'
import { reactive, ref } from 'vue'

interface IModalProps {
  modalConfig: {
    pageName: string
    header: {
      newTitle: string
      editTitle: string
    }
    formItem: any[]
  }
  otherInfo?: any
}
const props = defineProps<IModalProps>()

const dialogVisible = ref(false)

const initialForm: any = {}
for (const item of props.modalConfig.formItem) {
  initialForm[item.prop] = item.initialValue ?? ''
}
const formData = reactive<any>(initialForm)
const isNewRef = ref(true)
const editData = ref()

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
      const item = modalConfig.formItem.find((item) => item.prop === key)
      formData[key] = item ? item.initialValue : ''
    }
    editData.value = null
  }
}

//提交数据，dialogVisible为false
const systemStore = useSystemStore()
function handleContentData() {
  dialogVisible.value = false
  let infoData = { ...formData }
  if (props.otherInfo) {
    infoData = { ...infoData, ...props.otherInfo }
  }
  if (!isNewRef.value && editData.value) {
    systemStore.editPageInfo(
      props.modalConfig.pageName,
      editData.value.id,
      infoData
    )
  } else {
    systemStore.newPageData(props.modalConfig.pageName, infoData)
  }
}

defineExpose({ setModalDialog })
</script>

<style lang="less" scoped>
</style>
