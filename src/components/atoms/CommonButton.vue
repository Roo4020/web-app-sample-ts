<template>
  <button @click="clickEvent">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommonButton",
  props: {
    label: String,
  },
  methods: {
    clickEvent() {
      this.$emit("click-event");
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  border: 2px solid black;
  height: 32px;
  color: black;
  background: none;
  font-size: 16px;
  padding: 0px 16px;
  margin-right: 12px;
  border-radius: 0;
  outline: none;
  white-space: nowrap;
  &:hover {
    background: black;
    color: white;
  }
}
</style>