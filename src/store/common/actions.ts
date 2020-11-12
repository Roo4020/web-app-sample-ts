import { ActionTree } from "vuex";
import { IcommonState } from "./models";
import { RootState } from "../RootState";

export const actions: ActionTree<IcommonState, RootState> = {
  testAction({ commit }, payload) {
    console.log(payload);
    commit("setSelectedTab", payload);
  },
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  },
};
