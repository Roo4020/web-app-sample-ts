import { GetterTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

export const getters: GetterTree<IauthState, RootState> = {
  user: state => {
    return state.user;
  },
  state: state => {
    return state.state;
  },
};
