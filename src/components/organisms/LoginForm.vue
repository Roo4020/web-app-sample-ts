<template>
  <div class="login-form">
    <!-- <div class="login-form-content">
      <div>ID</div>
      <TextField @change-value="changeValue" />
    </div>
    <div class="login-form-content">
      <div>Password</div>
      <PasswordField @change-value="changeValue" />
    </div> -->
    <FormComponent
      v-for="(form, index) in data"
      :key="index"
      :form="form"
      :formNumber="tabData.id"
      @change-value="changeValue"
    />
    <div class="login-form-footer">
      <div class="password-resend-label">
        <div v-if="tabData.footerPasswordResendLabel">
          {{ tabData.footerPasswordResendLabel }}
        </div>
      </div>
      <CommonButton :label="tabData.label" @click-event="authEvent" />
    </div>
  </div>
</template>

<script>
import CommonButton from "@/components/atoms/CommonButton.vue";

import FormComponent from "@/components/molecules/FormComponent.vue";

export default {
  name: "LoginForm",
  components: {
    CommonButton,
    FormComponent,
  },
  props: {
    data: Array,
    tabData: Object,
    selectedTab: Number,
  },
  methods: {
    changeValue(formNumber, key, value) {
      this.$emit("change-value", formNumber, key, value);
    },
    authEvent() {
      if (this.selectedTab === 2) {
        this.$emit("sign-up");
      } else {
        this.$emit("sign-in");
      }
    },
  },
};
</script>

<style lang="scss" scopped>
.login-form {
  width: calc(100% - 24px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  &-footer {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 2px;
    .password-resend-label {
      width: 70%;
      font-size: 12px;
    }
  }
}
</style>