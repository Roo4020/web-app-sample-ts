<template>
  <ModalFrame size="L">
    <template v-slot:header>
      <div>編集</div>
    </template>
    <template v-slot:content>
      <FormComponent
        v-for="form in formData"
        :key="form.id"
        :form="form"
        @change-value="changeFormValue"
      />
    </template>
    <template v-slot:footerLeft>
      <div></div>
    </template>
    <template v-slot:footerRight>
      <CommonButton label="更新" @click="updateCanvas" />
    </template>
  </ModalFrame>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ModalFrame from "@/components/organisms/Modal/ModalFrame.vue";
import FormComponent from "@/components/molecules/FormComponent.vue";
import CommonButton from "@/components/atoms/CommonButton.vue";

export default defineComponent({
  name: "EditCanvas",
  components: {
    ModalFrame,
    FormComponent,
    CommonButton,
  },
  computed: {
    formData(): Array<Object> {
      return (this as any).$store.state.canvas.canvas;
    },
  },
  methods: {
    changeFormValue(value: string | number, id: number): void {
      (this as any).$store.commit("canvas/changeCanvasValue", {
        key: id,
        value: value,
      });
    },
    async updateCanvas() {
      await (this as any).$store.dispatch("canvas/updateCanvas");
      await (this as any).$store.dispatch("canvas/getCanvas");
      await (this as any).$store.dispatch("modal/closeModal");
    },
  },
});
</script>