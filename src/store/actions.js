import {ADD_BOOK, DELETE_BOOK} from './mutation-types'

export const actions = {
  addBook(context, payload) {
    context.commit(ADD_BOOK, payload)
  },
  deleteBook(context, payload) {
    context.commit(DELETE_BOOK, payload)
  },
};
