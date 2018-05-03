import {ADD_BOOK, DELETE_BOOK} from './mutation-types'

export const mutations = {
  [ADD_BOOK](state, book) {
    // add book to state.books
  },

  [DELETE_BOOK](state, book) {

    state.books = state.books.filter(function (obj) {
      return obj.id !== book.id;
    });
  }
};
