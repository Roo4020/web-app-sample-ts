import { MutationTree } from "vuex";
import { ModalState, ImodalState } from "./models";

export const mutations: MutationTree<ImodalState> = {
  // 初期化
  init(state: ImodalState) {
    Object.assign(state, new ModalState());
  },
  setState(state: ImodalState, payload: Boolean) {
    state.state = payload;
  },
  setPath(state: ImodalState, payload: String) {
    state.path = payload;
  },
};
