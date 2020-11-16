import { ActionTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

export const actions: ActionTree<IauthState, RootState> = {
  signUp({ }, payload) {
    console.log(payload);
  },
  signIn({ }, payload) {
    console.log(payload);
  },
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  }
};
