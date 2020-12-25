<template>
  <div class="form-component">
    <div class="form-component-label">{{ form.label }}</div>
    <div class="form-component-input">
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
import NumberField from "@/components/atoms/NumberField.vue";

export default defineComponent({
  name: "FormComponent",
  components: {
    TextField,
    PasswordField,
    NumberField,
  },
  props: {
    form: Object,
    formNumber: Number,
  },
  methods: {
    changeValue(value: string, key: number, formNumber: number) {
      this.$emit("change-value", value, key, formNumber);
    },
  },
});
</script>

<style lang="scss" scoped>
.form-component {
  width: 100%;
  font-size: 20px;
  margin: 16px 0px;
  &-label {
    padding-left: 16px;
  }
  &-input {
    width: 90%;
    display: flex;
    justify-content: center;
    margin: auto;
  }
}
</style>