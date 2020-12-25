<template>
  <div class="page">
    <ContentHeader>
      <template v-slot:right>
        <CommonButton label="新規登録" @click="showCanvasForm" />
      </template>
    </ContentHeader>
    <TableComponent :header="header" :data="canvasList"  @click-row="startEditCanvas" />
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
  created() {
    (this as any).$store.dispatch("canvas/getCanvas");
  },
  computed: {
    canvasList(): Array<Object> {
      return (this as any).$store.state.canvas.canvasList;
    },
  },
  methods: {
    async showCanvasForm() {
      (this as any).$store.commit("canvas/initCanvas");
      (this as any).$store.dispatch("modal/setModal", "AddCanvas");
    },
    async startEditCanvas(data: object) {
      await (this as any).$store.dispatch("canvas/setCanvasValue", data);
      (this as any).$store.commit("canvas/setCurrentDocId", data);
      (this as any).$store.dispatch("modal/setModal", "EditCanvas");
    },
  },
});
</script>