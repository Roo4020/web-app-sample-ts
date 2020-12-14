import { ActionTree } from "vuex";
import { IcanvasState } from "./models";
import { RootState } from "../RootState";

import firebase from "firebase/app";
import "firebase/firestore";

export const actions: ActionTree<IcanvasState, RootState> = {
  getCanvas(): void {
    firebase.firestore().collection('canvas').get().then((snapShot: any) => {
      snapShot.forEach((doc: any) => {
        console.log(doc.data());
      });
    }).catch((error: any) => {
      console.log(error);
    });
  },
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  },
};