<template>
  <div class="content-header">
      <div>
          <slot name="left"></slot>
      </div>
      <div>
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentHeader",
});
</script>

<style lang="scss" scoped>
.content-header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
}
</style>