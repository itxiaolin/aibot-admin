<template>
  <div class="wx-login">
    <el-button @click="clear">解除绑定</el-button>
  </div>

</template>

<script setup>
import { clearWx } from '@/plugin/wx/api/index.js'
import { ElMessage } from 'element-plus'

const clear = async() => {
  const res = await clearWx()
  if (res.code === 0) {
    ElMessage.success(res.msg)
  }
}

</script>

<style lang="scss" scoped>
.wx-login {
    display: inline-block;
    .scan-ercode{
        ::v-deep(iframe){
            border: 0;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
</style>
