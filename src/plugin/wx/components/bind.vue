<template>
  <div class="wx-login">
    <el-dialog
      v-model="dialogVisible"
      title="扫码登录"
      width="30%"
      destroy-on-close
    >
      <div class="scan-ercode">
        <div v-if="timeout" @click="scan">
          验证码已过期，请重新获取
        </div>
        <img v-else :src="wxUrl" width="250" @click="scan">
        <span>使用微信扫码绑定（登录）</span>
      </div>

    </el-dialog>

    <el-dialog
      v-model="registerVisible"
      title="注册或绑定"
      width="30%"
      destroy-on-close
      @close="clearTimer"
    >
      <div>输入用户名密码，自动绑定现有用户或创建新用户</div>
      <el-form
        ref="ruleFormRef"
        label-width="120px"
        :model="registerForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="registerForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="registerEnter">确认</el-button>
        </el-form-item>
      </el-form></el-dialog>
    <el-button
        type="primary"
        style="width: 46%"
        size="large"
        @click="scan"
    >扫码登录</el-button>
<!--    <el-button @click="scan">扫码登录</el-button>-->
<!--    <el-button @click="clear">解除绑定</el-button>-->
  </div>

</template>

<script setup>
import { nextTick, ref } from 'vue'
import { getLoginPic, loginOrCreate, clearWx, register } from '@/plugin/wx/api/index.js'
import { createUniqueId } from '@/plugin/wx/utils/createUniqueId.js'
import { ElMessage } from 'element-plus'

const wxUrl = ref('')
const timeout = ref(false)

const dialogVisible = ref(false)
const timer = ref(null)
const scan = async() => {
  dialogVisible.value = true
  const loginFlag = createUniqueId(6)
  const state = window.localStorage.getItem('token') || undefined
  await nextTick()
  const res = await getLoginPic({ loginFlag, state })
  if (res.code === 0) {
    timeout.value = false
    clearTimer()
    setTimeout(() => {
      timeout.value = true
    }, 250 * 1000)
    wxUrl.value = `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${res.data.ticket}`
    timer.value = setInterval(() => {
      polling(loginFlag, state)
    }, 2000)
  }
}

const polling = async(loginFlag, state) => {
  const res = await loginOrCreate({ loginFlag, state })
  if (res.code === 0) {
    if (res.data.scan) {
      ElMessage.success(res.msg)
      clearInterval(timer.value)
      timer.value = null
      if (res.data.needRegister) {
        registerForm.value.loginFlag = loginFlag
        registerVisible.value = true
      }
      dialogVisible.value = false
    }
    if (res.data.token) {
      ElMessage.success(res.msg)
      window.localStorage.setItem('token', res.data.token)
      window.location.reload()
    }
  } else {
    clearInterval(timer.value)
    timer.value = null
  }
}

const clearTimer = () => {
  clearInterval(timer.value)
}

const clear = async() => {
  const res = await clearWx()
  if (res.code === 0) {
    ElMessage.success(res.msg)
  }
}

const registerVisible = ref(false)

const registerForm = ref({
  username: '',
  password: '',
  loginFlag: '',
})

const registerEnter = async() => {
  const res = await register(registerForm.value)
  if (res.code === 0) {
    window.localStorage.setItem('token', res.data.token)
    window.location.reload()
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
        img{
          cursor: pointer;
          border: 1px dashed #ccc;
          border-radius: 4px;
        }
        div{
          display: inline-flex;
          width: 250px;
          height: 250px;
          align-items: center;
          justify-content: center;
          border: 1px dashed #ccc;
          border-radius: 4px;
          cursor: pointer;
        }
    }
}
</style>
