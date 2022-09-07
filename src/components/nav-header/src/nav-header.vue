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
      <div>
        <GxBreadcrumb :breadcrumbs="breadcrumbs"></GxBreadcrumb>
      </div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import UserInfo from "./user-info.vue";
import GxBreadcrumb from "@/base-ui/breadcrumb";
import type { IBreadcrumb } from "@/base-ui/breadcrumb";

import { useStore } from "@/store";
import { useRoute } from "vue-router";
import { pathMapBreadcrumbs } from "@/utils/map-menus";

export default defineComponent({
  components: {
    UserInfo,
    GxBreadcrumb,
  },
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      console.log("isFold", isFold);
      emit("foldChange", isFold.value);
    };

    // 面包屑的数据: [{name: , path: }]
    const store = useStore();
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus;
      const route = useRoute();
      const currentPath = route.path;
      return pathMapBreadcrumbs(userMenus, currentPath);
    });
    return {
      handleFoldClick,
      isFold,
      breadcrumbs,
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
