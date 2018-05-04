import {ADD_BOOK, DELETE_BOOK, UPDATE_BOOK} from './mutation-types'
import Vue from 'vue';

export const mutations = {
  [ADD_BOOK](state, book) {

    let length = state.books.length;
    let {[length - 1]: lastBook} = state.books;
    book.id = lastBook.id + 1;
    state.books.push(book);
  },

  [UPDATE_BOOK](state, book) {

    state.books = state.books.map(obj => {
      if (obj.id === book.id) {
        return book;
      }
      return obj;
    });

    console.log(state.books);

  },

  [DELETE_BOOK](state, book) {

    state.books = state.books.filter(function (obj) {
      return obj.id !== book.id;
    });
  }
};
