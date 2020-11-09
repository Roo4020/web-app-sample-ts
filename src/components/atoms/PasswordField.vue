<template>
  <input type="password" v-model="innerValue" />
</template>

<script>
export default {
  name: "PasswordField",
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
input[type="password"] {
  font-size: 20px;
  width: 280px;
  height: 32px;
  margin: 0px 12px;
}
</style>