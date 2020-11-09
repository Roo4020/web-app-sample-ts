<template>
  <div class="header-logo" @click="transHome">This is a header</div>
</template>

<script>
export default {
  name: 'HeaderLogo',
  methods: {
      transHome() {
        this.$router.push("/home");
      },
  },
};
</script>

<style lang="scss" scopped>
.header-logo {
    font-size: 24px;
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana;
    cursor: pointer;
}
</style>