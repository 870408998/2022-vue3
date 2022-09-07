<template>
  <div class="page_search">
    <gx-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick()">重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </gx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GxForm from "@/base-ui/form";
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      require: true,
    },
  },
  components: {
    GxForm,
  },
  setup(props) {
    const formItems = props.searchFormConfig?.formItems ?? [];
    const formOriginArr: any = [];
    for (const item of formItems) {
      formOriginArr[item.field] = "";
    }

    const formData = ref(formOriginArr);

    // const handleResetClick = () => {
    //   formData.value = formOriginArr;
    // };

    const handleResetClick = () => {
      for (const key in formOriginArr) {
        formData.value[`${key}`] = formOriginArr[key];
      }
    };
    return {
      formData,
      handleResetClick,
    };
  },
});
</script>

<style scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
