import { ActionTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

import firebase from "firebase";

export const actions: ActionTree<IauthState, RootState> = {
  signUp({ commit }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.id, payload.password)
      .then(user => {
        alert('アカウント登録が完了しました。');
        commit("setUserData", user?.user);
        commit("setSignInState", true);
      })
      .catch(error => {
        alert(error.message);
      });
  },
  signIn({ commit }, payload) {
    console.log(payload);
    firebase.auth().signInWithEmailAndPassword(payload.id, payload.password)
      .then(user => {
        alert('サインイン成功しました。');
        commit("setUserData", user?.user);
        commit("setSignInState", true);
      })
      .catch(error => {
        alert(error.message);
      });
  },
  onAuthChanged() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
    });
  },
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  },
};