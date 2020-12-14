<template>
  <input type="number" v-model="innerValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumberField",
  props: {
    value: Number,
    id: Number,
  },
  computed: {
    innerValue: {
      get(): number | undefined {
        return this.value;
      },
      set(value: number): void {
        this.$emit("change-value", Number(value), this.id);
      },
    },
  },
});
</script>

<style scoped>
input[type="number"] {
  font-size: 20px;
  width: 90%;
  height: 32px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  margin: 0px 12px;
}
</style>