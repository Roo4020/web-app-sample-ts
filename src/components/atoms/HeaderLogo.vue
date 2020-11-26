<template>
  <div class="header-logo" @click="transHome">This is a header</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'HeaderLogo',
  methods: {
      transHome() {
        this.$router.push("/home");
      },
  },
});
</script>

<style lang="scss" scopped>
.header-logo {
    font-size: 24px;
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana;
    cursor: pointer;
}
</style>