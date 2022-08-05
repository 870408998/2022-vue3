<template>
  <div class="login_account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import type { ElForm } from "element-plus/lib/components/form/index";
import { rules } from "../config/account-config";

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: "",
    });
    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = () => {
      console.log("loginAction go");
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log("真正执行登录逻辑");
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
