import Vuex from 'vuex';
import { auth } from './auth/index';
import { common } from './common/index';

import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  modules: {
    auth,
    common,
  },
  plugins: [
    createPersistedState()
  ]
});
