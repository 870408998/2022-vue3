<template>
  <div class="gx-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemLayout"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import type * as vueSet from "vue";
import type { IFormItem } from "../types";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      require: true,
    },
    formData: {
      type: Object,
      require: true,
    },
    formItems: {
      type: Array as vueSet.PropType<IFormItem[]>,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: "100px",
    },
    itemLayout: {
      type: Object,
      default: () => ({ padding: "10px 40px" }),
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4???
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // const formData = ref({ ...props.modelValue });
    const formData = ref({ ...props.modelValue });

    watch(
      formData,
      (newValue) => {
        console.log(newValue);
        emit("update:modelValue", newValue);
      },
      {
        deep: true,
      }
    );

    return {
      formData,
    };
  },
});
</script>

<style scoped>
.gx-form {
  padding-top: 22px;
}
</style>
