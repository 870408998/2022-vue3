<template>
  <div>
    <el-form label-width="100px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="密码">
            <el-input show-password />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="运动">
            <el-select style="width: 100%">
              <el-option>篮球</el-option>
              <el-option>足球</el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="运动">
            <el-date-picker style="width: 100%"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { IFormItem } from "../types";

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
