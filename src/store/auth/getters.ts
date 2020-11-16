import { GetterTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

export const getters: GetterTree<IauthState, RootState> = {
  id: state => {
    return state.id;
  },
  password: state => {
    return state.password;
  },
};
