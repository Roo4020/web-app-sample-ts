<template>
  <input type="text" v-model="innerValue" />
</template>

<script>
export default {
  name: "TextField",
  props: {
    value: String,
    id: Number,
    formNumber: Number,
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("change-value", this.formNumber, this.id, value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="text"] {
  font-size: 20px;
  width: 280px;
  height: 32px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  margin: 0px 12px;
}
</style>