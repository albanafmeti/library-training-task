<template>
  <div>

    <div class="card mb-5">
      <div class="card-header">Books

        <button type="button" class="btn btn-sm btn-outline-primary pull-right" data-toggle="modal"
                data-target="#add-book-modal">
          <i class="fa fa-plus"></i>&nbsp;&nbsp;Add Book
        </button>
      </div>
      <div class="card-body">


        <input type="text" class="form-control mb-2" placeholder="Search by title"
               v-model="searchText"/>

        <table class="table table-striped table-hover">
          <thead>
          <tr>
            <th>ID</th>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Creation Date</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="book in books">
            <td>{{ book.id }}</td>
            <td>{{ book.isbn }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.creation_date}}</td>
            <td>
              <router-link :to="{ name: 'edit-book', params: { id: book.id }}" class="btn btn-outline-primary btn-sm"
                           title="Edit"><i
                class="fa fa-pencil"></i></router-link>
              <a href="#" class="btn btn-outline-danger btn-sm" title="Delete"
                 @click.prevent="deleteBookConfirmation(book)">
                <i class="fa fa-times"></i>
              </a>
            </td>
          </tr>
          </tbody>
        </table>

        <p class="text-center" v-if="totalBooks === 0">No results</p>

        <Pagination :current-page="currentPage" :per-page="perPage" :total="totalBooks"
                    @paginate="paginate"></Pagination>

      </div>

    </div>

    <AddBook></AddBook>
  </div>
</template>

<script>
  import AddBook from "./AddBook";
  import Pagination from "../pagination/Pagination";
  import {mapActions} from 'vuex';

  export default {
    name: "Books",
    components: {Pagination, AddBook},
    data: function () {
      return {
        searchText: null,

        currentPage: 1,
        perPage: 5
      }
    },
    computed: {
      books: function () {
        return this.$store.getters.getBooks(this.currentPage, this.perPage, this.searchText)
      },
      totalBooks: function () {
        return this.$store.getters.totalBooks(this.searchText);
      },
    },
    methods: {
      deleteBookConfirmation(book) {
        let _this = this;
        this.$dialog.confirm(`<p class='text-center m-0'>Are you sure you want to delete this book?</p>`)
          .then(function (dialog) {

            setTimeout(() => {
              _this.deleteBook(book);

              toastr.success("Book has been deleted successfully.");
              dialog.close();
            }, 1000);

          });
      },
      ...mapActions(['deleteBook']),

      paginate(page) {
        if (page) {
          this.currentPage = page;
        }
      }
    }
  }
</script>

<style scoped>

  .content ul {
    list-style: none;
  }

</style>
