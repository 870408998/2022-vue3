<template>
  <div class="login_account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import localCache from "@/utils/cache";
import type { ElForm } from "element-plus/lib/components/form/index";
import { rules } from "../config/account-config";

export default defineComponent({
  setup() {
    const store = useStore();
    const account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? "",
    });
    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = (isKeepPassword: boolean) => {
      console.log("loginAction go");
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            localCache.setCache("name", account.name);
            localCache.setCache("password", account.password);
          } else {
            localCache.deleteCache("name");
            localCache.deleteCache("password");
          }
          console.log("[ account ] >", account);
          //  执行登录验证
          store.dispatch("login/accountLoginAction", { ...account });
        }
      });
    };

    return {
      rules,
      account,
      loginAction,
      formRef,
    };
  },
});
</script>

<style scoped lang="less">
.login_account {
}
</style>
