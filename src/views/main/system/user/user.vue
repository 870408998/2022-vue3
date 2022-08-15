<template>
  <div class="user">
    <gx-form v-bind="searchFormConfig"></gx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GxForm from "@/base-ui/form";
import type { IForm } from "@/base-ui/form";
import { searchFormConfig } from "./config/search.config";

export default defineComponent({
  name: "user",
  components: {
    GxForm,
  },
  setup() {
    const formConfig: IForm = {
      labelWidth: "120px",
      itemLayout: {
        padding: "10px 40px",
      },
      colLayout: {
        span: 8,
      },
      formItems: [
        {
          type: "input",
          label: "id",
          placeholder: "请输入id",
        },
        {
          type: "input",
          label: "用户名",
          placeholder: "请输入用户名",
        },
        {
          type: "password",
          label: "密码",
          placeholder: "请输入密码",
        },
        {
          type: "select",
          label: "喜欢的运动",
          placeholder: "请选择喜欢的运动",
          options: [
            { title: "篮球", value: "basketball" },
            { title: "足球", value: "football" },
          ],
        },
        {
          type: "datepicker",
          label: "创建时间",
          otherOptions: {
            startPlaceholder: "开始时间",
            endPlaceholder: "结束时间",
            type: "daterange",
          },
        },
      ],
    };

    return {
      searchFormConfig,
    };
  },
});
</script>

<style scoped></style>
