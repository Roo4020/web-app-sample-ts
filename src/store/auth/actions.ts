import { ActionTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

import firebase from "firebase/app";
import "firebase/auth";

export const actions: ActionTree<IauthState, RootState> = {
  signUp({ }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.id, payload.password)
      .then()
      .catch(error => {
        alert(error.message);
      });
  },
  signIn({ }, payload) {
    console.log(payload);
    firebase.auth().signInWithEmailAndPassword(payload.id, payload.password)
      .then()
      .catch(error => {
        alert(error.message);
      });
  },
  signOut() {
    firebase.auth().signOut().catch(error => {
      alert(error.message);
    })
  },
  onAuthChanged({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      const userData: any = user ? user : {};
      commit("setUserData", userData);
        commit("setSignInState", userData.uid ? true : false);
    });
  },
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  },
};