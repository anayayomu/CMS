<template>
  <div class="menu">
    <div class="nav">
      <el-menu
        :default-active="activeDefault"
        :collapse="isFold"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="001529"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Monitor /></el-icon>
            <span>系统信息</span>
          </template>
          <el-menu-item
            index="2"
            @click="handleItemClick('/main/analysis/overview')"
            >核心技术</el-menu-item
          >
          <el-menu-item
            index="3"
            @click="handleItemClick('/main/analysis/dashboard')"
            >商品统计</el-menu-item
          >
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="5" @click="handleItemClick('/main/system/user')"
            >用户管理</el-menu-item
          >
          <el-menu-item index="6" @click="handleItemClick('/main/system/role')"
            >部门管理</el-menu-item
          >
          <el-menu-item index="7">菜单管理</el-menu-item>
          <el-menu-item index="8">角色管理</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="9">
          <template #title>
            <el-icon><ShoppingCart /></el-icon>
            <span>商品中心</span>
          </template>
          <el-menu-item index="10">商品类别</el-menu-item>
          <el-menu-item index="11">商品信息</el-menu-item>
        </el-sub-menu>

        <!-- <template v-for="item in userMenu" :key="item.id">
          <el-sub-menu index="item.id+''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('el-icon-')[1]"/>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item index="subItem.id+''" @click="handleItemClick(subItem)">
                {{ subItem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template> -->
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login'
import { mapPathMenu } from '@/utils/mapMenu'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

const loginStore = useLoginStore()
const userMenu = loginStore.userMenu

const router = useRouter()
function handleItemClick(item: any) {
  const url = item
  router.push(url)
}

const route = useRoute()
const activeDefault = computed(() => {
  const pathMenu = mapPathMenu(route.path, userMenu)
  return pathMenu.id + ''
})
// const activeDefault = ref('2')
</script>

<style lang="less" scoped>
.el-main {
  border-right: none;
  user-select: none;
}
.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2153;
  }
  .el-menu-item:hover {
    color: #fff;
  }
  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
