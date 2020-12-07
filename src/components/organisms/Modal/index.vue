<template>
  <div class="modal-wrapper" @click.self="closeModal">
    <component :is="$store.state.modal.path" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AddCanvas from "@/components/organisms/Modal/AddCanvas.vue";

export default defineComponent({
  name: "Modal",
  components: {
    AddCanvas,
  },
  methods: {
    closeModal() {
      (this as any).$store.dispatch("modal/closeModal");
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-wrapper {
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>