<template>
  <input type="password" v-model="innerValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PasswordField",
  props: {
    value: String,
    id: Number,
    formNumber: Number,
  },
  computed: {
    innerValue: {
      get(): string | undefined {
        return this.value;
      },
      set(value: string) {
        this.$emit("change-value", this.formNumber, this.id, value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
input[type="password"] {
  font-size: 20px;
  width: 280px;
  height: 32px;
  margin: 0px 12px;
}
</style>