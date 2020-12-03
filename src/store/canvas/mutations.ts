import { MutationTree } from "vuex";
import { CanvasState, IcanvasState } from "./models";

export const mutations: MutationTree<IcanvasState> = {
  // 初期化
  init(state: IcanvasState) {
    Object.assign(state, new CanvasState());
  },
};
