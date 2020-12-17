import { MutationTree } from "vuex";
import { CanvasState, IcanvasState } from "./models";

export const mutations: MutationTree<IcanvasState> = {
  // 初期化
  init(state: IcanvasState) {
    Object.assign(state, new CanvasState());
  },
  changeCanvasValue(state: IcanvasState, payload: {key: number, value: string | number}) {
    state.canvas[payload.key - 1].value = payload.value;
  },
  initCanvas(state: IcanvasState) {
    state.canvas = new CanvasState().canvas;
  },
  setCanvasList(state: IcanvasState, payload) {
    state.canvasList = payload;
  },
};
