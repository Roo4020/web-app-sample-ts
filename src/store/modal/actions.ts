import { ActionTree } from "vuex";
import { ImodalState } from "./models";
import { RootState } from "../RootState";

export const actions: ActionTree<ImodalState, RootState> = {
  setModal({ commit }, payload: String): void {
    commit("setState", true);
    commit("setPath", payload);
  },
  closeModal({ commit }): void {
    commit("setState", false);
    commit("setPath", "");
  },
  error({ commit }, payload: String): void {
    commit("setErrorMessage", payload);
  },
};