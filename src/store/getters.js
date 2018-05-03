export const getters = {
  getBooks: (state) => {
    return (page = 1, perPage = 5) => {

      --page;
      return state.books.slice(page * perPage, (page + 1) * perPage);
    };
  },
  totalBooks: (state, getters) => {
    return getters.getBooks().length;
  },
  getAuthors: (state) => {
    return state.authors;
  },
};
