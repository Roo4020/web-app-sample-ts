<template>
  <div class="top-link" @click="transTop">Log out</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AccountLink',
  methods: {
      transTop() {
        this.$router.push("/");
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