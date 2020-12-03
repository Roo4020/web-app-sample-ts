<template>
  <div class="table-header">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="table-header-item"
      :style="`width: ${item.width}%`"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableHeader",
  props: {
    data: Array,
  },
});
</script>

<style lang="scss" scoped>
.table-header {
  width: 100%;
  height: 44px;
  display: flex;
  border: 1px solid white;
  &-item {
    height: 100%;
    color: white;
    background: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 8px;
  }
}
</style>