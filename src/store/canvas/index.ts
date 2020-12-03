import { Module } from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";
import { RootState } from "../RootState";
import { CanvasState, IcanvasState } from "./models";

const namespaced = true;

export const state: IcanvasState = new CanvasState();

export const canvas: Module<IcanvasState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions
};
