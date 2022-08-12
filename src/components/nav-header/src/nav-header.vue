<template>
  <div class="nav_header">
    <el-icon
      size="20px"
      v-if="isFold"
      @click="handleFoldClick"
      class="fold-menu"
    >
      <Expand />
    </el-icon>
    <el-icon size="20px" v-else @click="handleFoldClick" class="fold-menu">
      <Fold />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import UserInfo from "./user-info.vue";

export default defineComponent({
  components: {
    UserInfo,
  },
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      console.log("isFold", isFold);
      emit("foldChange", isFold.value);
    };
    return {
      handleFoldClick,
      isFold,
    };
  },
});
</script>

<style scoped lang="less">
.nav_header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
