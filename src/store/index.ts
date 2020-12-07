import Vuex from 'vuex';
import { auth } from './auth/index';
import { canvas } from './canvas/index';
import { common } from './common/index';
import { modal } from './modal/index';

import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  modules: {
    auth,
    canvas,
    common,
    modal,
  },
  plugins: [
    createPersistedState()
  ]
});
