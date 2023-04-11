<template>
  <div class="c-content">
    <div class="header">
      <h3>{{ contentConfig.header?.title ?? 'list' }}</h3>
      <el-button type="primary" @click="handleNewData">{{
        contentConfig.header?.btnTitle ?? 'new Data'
      }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border style="width: 100%">
        <template v-for="item in contentConfig.propList" :key="item.prop">
          <template v-if="item.type === 'timer'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handle'">
            <el-table-column v-bind="item">
              <template #default="scope">
                <el-button
                  type="primary"
                  text
                  size="small"
                  icon="Edit"
                  @click="handleEdit(scope.row)"
                  >edit</el-button
                >
                <el-button
                  type="danger"
                  text
                  size="small"
                  icon="Delete"
                  @click="handleDelete(scope.row.id)"
                  >delete</el-button
                >
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'custom'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <slot
                  :name="item.slotName"
                  v-bind="scope"
                  :prop="item.prop"
                ></slot>
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column align="center" v-bind="item"></el-table-column>
          </template>
        </template>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[5, 10, 20]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/user'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utils/format'
import { ref } from 'vue'

interface IProps {
  contentConfig: {
    pageName: string
    header?: {
      title: string
      btnTitle: string
    }
    propList: any[]
  }
}

const props = defineProps<IProps>()

// 广播事件
const emit = defineEmits(['newDataClick', 'editData'])

//初始化，一进入就请求数据
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchPageList()

//解构页面所需数据
const { pageList, pageTotalCount } = storeToRefs(systemStore)

// pagination handle
function handleSizeChange() {
  fetchPageList()
}
function handleCurrentChange() {
  fetchPageList()
}

// delete data
function handleDelete(id: number) {
  systemStore.delPageList(props.contentConfig.pageName, id)
}

// new data
function handleNewData() {
  emit('newDataClick')
}

//edit data
function handleEdit(item: any) {
  emit('editData', item)
}

// axios function
function fetchPageList(formData: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }

  // send axios
  const queryInfo = { ...pageInfo, ...formData }
  systemStore.postPageList(props.contentConfig.pageName, queryInfo)
}

defineExpose({ fetchPageList })

//
</script>

<style lang="less" scoped>
.c-content {
  margin-top: 20px;
  margin-bottom: 15px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
}
</style>
