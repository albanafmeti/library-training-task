import Vue from 'vue';
import Vuex from 'vuex';
import {actions} from './actions'
import {getters} from './getters'
import {mutations} from './mutations'

import {BOOKS_LIST, AUTHORS_LIST} from "../data";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
  books: BOOKS_LIST,
  authors: AUTHORS_LIST
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug
});
