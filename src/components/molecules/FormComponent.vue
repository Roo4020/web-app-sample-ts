<template>
  <div class="form-component">
    <div>{{ form.label }}</div>
    <div>
      <keep-alive>
        <component
          :is="form.formType"
          :value="form.value"
          :id="form.id"
          :formNumber="formNumber"
          @change-value="changeValue"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TextField from "@/components/atoms/TextField.vue";
import PasswordField from "@/components/atoms/PasswordField.vue";

export default defineComponent({
  name: "FormComponent",
  components: {
    TextField,
    PasswordField,
  },
  props: {
    form: Object,
    formNumber: Number,
  },
  methods: {
    changeValue(formNumber: number, key: number, value: string) {
      this.$emit("change-value", formNumber, key, value);
    },
  },
});
</script>

<style lang="scss" scoped>
.form-component {
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 16px 0px;
}
</style>