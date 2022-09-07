<template>
  <div class="page_content">
    <div class="content">
      <GxTable :listData="dataList" v-bind="contentTableConfig">
        <template #headerHandler>
          <el-button type="primary">新建用户</el-button>
          <el-button>刷新</el-button>
        </template>
        <template #status="scope">
          <el-button
            size="small"
            plain
            :type="scope.row.enable ? 'success' : 'danger'"
            >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
          >
        </template>
        <template #createAt="scope">
          <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
        </template>
        <template #updateAt="scope">
          <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
        </template>
        <template #handler>
          <div class="handle_btn">
            <el-button size="small" type="text">编辑</el-button>
            <el-button size="small" type="text">删除</el-button>
          </div>
        </template>
      </GxTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

import GxTable from "@/base-ui/table";
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true,
    },
    pageName: {
      type: String,
      require: true,
    },
  },
  components: {
    GxTable,
  },
  setup(props) {
    const store = useStore();
    console.log("props", props.pageName);
    store.dispatch("system/getPageListAction", {
      // pageUrl: "/users/list",
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10,
      },
    });
    // const userList = computed(() => store.state.system.userList);
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    return {
      dataList,
    };
  },
});
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
