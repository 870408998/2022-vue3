<template>
  <div class="login_panel">
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name='account'>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label name='phone' >
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref='phoneRef'/>
      </el-tab-pane>
    </el-tabs>
    <div class="account_control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login_btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone,
  },
  setup() {
    const isKeepPassword = ref(true);
    // const accountRef = ref<typeof LoginAccount>();
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const phoneRef = ref<InstanceType<typeof LoginPhone>>();
    const currentTab = ref('account')

    const handleLoginClick = () => { 
      if(currentTab.value === 'account'){
        accountRef.value?.loginAction(isKeepPassword.value);
      }else{ 
        console.log('loginPhone调用');
      }
    };
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLoginClick,
    };
  },
});
</script>

<style scoped lang="less">
.login_panel {
  width: 320px;
}
.account_control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.login_btn {
  width: 100%;
  margin-top: 10px;
}
</style>
