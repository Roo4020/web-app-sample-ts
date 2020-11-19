import { MutationTree } from "vuex";
import { AuthState, IauthState } from "./models";

import firebase from "firebase";

export const mutations: MutationTree<IauthState> = {
  // 初期化
  init(state: IauthState) {
    Object.assign(state, new AuthState());
  },
  setUserData(state, payload) {
    state.user = payload;
  },
  setSignInState(state, payload) {
    state.state = payload;
  },
};
