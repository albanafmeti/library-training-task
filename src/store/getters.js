export const getters = {
  getBooks: (state) => {
    return (page = null, perPage = 5, searchText = null) => {

      let books = state.books;

      // Search if isset search text.
      if (searchText) {
        books = books.filter(function (book) {
          return book.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        });
      }

      if (page) {
        --page;
        return books.slice(page * perPage, (page + 1) * perPage);
      }

      return books;
    };
  },

  getBook: (state) => {

    return (bookId) => {
      return state.books.find(obj => obj.id === bookId)
    };
  },

  totalBooks: (state, getters) => {

    return (searchText = null) => {
      return getters.getBooks(null, null, searchText).length
    };
  },

  getAuthors: (state) => {
    return state.authors;
  },
};
