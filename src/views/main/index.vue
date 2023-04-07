<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside class="aside" :width="isFold ? '60px' : '210px'">
        <main-menu :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="40px">
          <main-header @fold-change="handleChange" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import mainMenu from '@/components/main-menu/index.vue'
import mainHeader from '@/components/main-header/index.vue'

const isFold = ref(false)
function handleChange(flag) {
  isFold.value = flag
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  background-color: #001529;

  .main-container {
    height: 100%;
    color: #fff;
    .aside {
      background-color: #001529;
    }

    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    // .el-header {
    //   background-color: beige;
    // }

    .el-main {
      background-color: cadetblue;
    }
  }
}
</style>
