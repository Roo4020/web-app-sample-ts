import { MutationTree } from "vuex";
import { AuthState, IauthState } from "./models";

export const mutations: MutationTree<IauthState> = {
  // 初期化
  init(state: IauthState) {
    Object.assign(state, new AuthState());
  },
};
