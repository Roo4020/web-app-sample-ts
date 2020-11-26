<template>
  <div class="global-header">
    <div>
      <HeaderLogo />
    </div>
    <div>
      <AccountLink :label="linkLabel" @sign-out="signOut" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderLogo from "@/components/atoms/HeaderLogo.vue";
import AccountLink from "@/components/atoms/AccountLink.vue";


export default defineComponent({
  name: 'GlobalHeader',
  components: {
      HeaderLogo,
      AccountLink,
  },
  props: {
    linkLabel: String,
  },
  methods: {
    signOut() {
      this.$emit("sign-out");
    },
  },
});
</script>

<style lang="scss" scopped>
.global-header {
    width: 100%;
    height: 72px;
    background: black;
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
}
</style>