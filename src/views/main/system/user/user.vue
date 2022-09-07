<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    // const userCount = computed(() => store.state.system.userCount);

    return {
      contentTableConfig,
      searchFormConfig,
    };
  },
});
</script>

<style scoped></style>
