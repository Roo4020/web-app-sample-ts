<template>
  <div class="app">
    <div class="app-wrapper" v-if="$route.path !== '/'">
      <GlobalHeader />
      <div class="app-content">
        <GlobalAside />
        <router-view />
      </div>
    </div>
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import GlobalHeader from "@/components/layouts/GlobalHeader.vue";
import GlobalAside from "@/components/layouts/GlobalAside.vue";

export default {
  name: "App",
  components: {
    GlobalHeader,
    GlobalAside,
  },
  created() {
    (this as any).$store.dispatch("auth/onAuthChanged");
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
#app,
.app {
  width: 100%;
  height: 100%;
  margin: 0px;
  .app-wrapper {
    width: 100%;
    height: 100%;
    .app-content {
      height: calc(100% - 72px);
      display: flex;
      position: relative;
      top: 72px;
      .page {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        flex: 1;
      }
    }
  }
}
</style>