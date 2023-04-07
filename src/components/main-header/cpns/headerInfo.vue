<template>
  <div class="headerInfo">
    <div class="h-icon">
      <span
        ><el-icon><Message /></el-icon
      ></span>
      <span
        ><el-icon><ChatDotSquare /></el-icon
      ></span>
      <span
        ><el-icon><More /></el-icon
      ></span>
    </div>
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="30" src="" />
          <span class="h-name">coderwhy</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExit">退出系统</el-dropdown-item>
            <el-dropdown-item divided>个人信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TOKEN } from '@/global/content'
import { local } from '@/utils/cache'
import { useRouter } from 'vue-router'

const router = useRouter()
function handleExit() {
  local.removeCache(TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.headerInfo {
  display: flex;
  align-items: center;
}
.h-icon {
  display: inline-flex;
  margin-right: 20px;

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background-color: #f2f2f2;
    }
    i {
      font-size: 20px;
    }
  }
}

.info {
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
  .user-info {
    display: flex;
    align-items: center;

    .h-name {
      margin-left: 5px;
    }
  }
}
</style>
