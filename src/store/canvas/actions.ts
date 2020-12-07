import { ActionTree } from "vuex";
import { IcanvasState } from "./models";
import { RootState } from "../RootState";

import firebase from "firebase";

export const actions: ActionTree<IcanvasState, RootState> = {
  getCanvas(): void {
    firebase.firestore().collection('canvas').get().then((doc: any) => {
      doc.forEach((element: any) => {
        // console.log(element.data());
      });
    }).catch((error: any) => {
      console.log(error);
    });
  },
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  },
};