import { ActionTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

export const actions: ActionTree<IauthState, RootState> = {
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  }
};
