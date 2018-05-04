import {ADD_BOOK, DELETE_BOOK, UPDATE_BOOK} from './mutation-types'

export const actions = {
  addBook(context, payload) {
    context.commit(ADD_BOOK, payload)
  },

  updateBook(context, payload) {
    context.commit(UPDATE_BOOK, payload)
  },

  deleteBook(context, payload) {
    context.commit(DELETE_BOOK, payload)
  },
};
