<template>
  <div class="top">
    <div class="top-wrapper">
      <div class="top-title" @click="transHome">Web App Sample</div>
      <div class="tab-wrapper">
        <TabComponent
          :list="tabList"
          :selected="selectedTab"
          @click-event="selectTab"
        />
        <LoginForm
          v-for="item in tabList"
          :key="item.id"
          v-show="selectedTab === item.id"
          :data="formData[item.id - 1]"
          :tabData="item"
          :selectedTab="selectedTab"
          @change-value="changeValue"
          @sign-up="signUp"
          @sign-in="signIn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TabComponent from "@/components/molecules/TabComponent.vue";
import LoginForm from "@/components/organisms/LoginForm.vue";

import firebase from "firebase";

export default {
  name: "Top",
  components: {
    TabComponent,
    LoginForm,
  },
  data() {
    return {
      selectedTab: 1,
      tabList: [
        {
          id: 1,
          label: "Login",
          footerPasswordResendLabel: "パスワードをお忘れの場合はこちら",
        },
        {
          id: 2,
          label: "Create Account",
        },
      ],
      formData: [
        [
          {
            id: 1,
            label: "ID",
            value: "",
            formType: "TextField",
          },
          {
            id: 2,
            label: "Password",
            value: "",
            formType: "PasswordField",
          },
        ],
        [
          {
            id: 1,
            label: "ID",
            value: "",
            formType: "TextField",
          },
          {
            id: 2,
            label: "Password",
            value: "",
            formType: "PasswordField",
          },
        ],
      ],
    };
  },
  computed: {
    selectedTab() {
      return this.$store.state.common.selectedTab;
    },
  },
  methods: {
    transHome() {
      this.$router.replace("/home");
    },
    changeValue(formNumber, key, value) {
      this.formData[formNumber - 1][key - 1].value = value;
    },
    selectTab(id) {
      this.$store.dispatch("common/testAction", id);
      // this.$store.commit("common/setSelectedTab", id);
    },
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formData[1][0].value,
          this.formData[1][1].value
        )
        .then((user) => {
          console.log("signUp成功", user);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.formData[0][0].value,
          this.formData[0][1].value
        )
        .then(
          (user) => {
            console.log("signIn成功", user);
          },
          (error) => {
            alert(error.message);
          }
        );
    },
  },
};
</script>

<style lang="scss" scopped>
.top {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-wrapper {
    width: 400px;
    .top-title {
      font-size: 36px;
      text-align: center;
      cursor: pointer;
    }
    .tab-wrapper {
      margin-top: 8px;
    }
  }
}
</style>