import { GetterTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

export const getters: GetterTree<IauthState, RootState> = {
  lightMode: state => {
    return state.lightMode;
  },
  fullScreen: state => {
    return state.fullScreen;
  }
};
