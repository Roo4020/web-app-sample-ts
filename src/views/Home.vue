<template>
  <div class="page">
    <ContentHeader>
      <template v-slot:right>
        <CommonButton label="新規登録" />
      </template>
    </ContentHeader>
    <TableComponent :header="header"></TableComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ContentHeader from "@/components/molecules/ContentHeader.vue";
import CommonButton from "@/components/atoms/CommonButton.vue";

import TableComponent from "@/components/organisms/Table/index.vue";

import { HOME_LIST } from "@/mixins/tableList.ts";

export default defineComponent({
  name: 'Home',
  components: {
    ContentHeader,
    CommonButton,
    TableComponent,
  },
  data() {
    return {
      header: HOME_LIST,
    };
  },
});
</script>
