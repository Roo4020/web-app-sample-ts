<template>
  <TableRow
    v-for="(dataItem, index) in data"
    :key="index"
    :dataItem="dataItem"
    :row="row"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TableRow from "@/components/organisms/Table/TableRow.vue";

export default defineComponent({
  name: "TableContent",
  components: {
    TableRow,
  },
  props: {
    data: Array,
    row: Array,
  },
});
</script>