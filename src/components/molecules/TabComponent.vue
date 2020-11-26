<template>
  <div class="tab-component">
    <div
      :class="['tab', setClassSelected(tab.id)]"
      v-for="tab in list"
      :key="tab.id"
      @click="clickEvent(tab.id)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TabComponent",
  props: {
    list: Array,
    selected: Number,
  },
  computed: {
    setClassSelected() {
      const selected = this.selected;
      return function (id: number) {
        return selected === id ? "selected" : "";
      };
    },
  },
  methods: {
    clickEvent(id: number) {
      this.$emit("click-event", id);
    },
  },
});
</script>

<style lang="scss" scoped>
.tab-component {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  border: 1px solid black;
  user-select: none;
  margin: 0 auto;
  .tab {
    height: 100%;
    color: black;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid black;
    }
  }
  .selected {
    color: white !important;
    background: black !important;
  }
}
</style>