<template>
  <div class="top-link" @click="clickEvent">{{ label }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AccountLink',
  props: {
    label: String,
  },
  methods: {
      clickEvent() {
        this.$emit("sign-out");
      },
  },
});
</script>

<style lang="scss" scopped>
.top-link {
    font-size: 16px;
    color: white;
    cursor: pointer;
}
</style>