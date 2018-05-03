<template>
  <div>
    <div class="card">
      <div class="card-header">Books

        <button type="button" class="btn btn-sm btn-outline-primary pull-right" data-toggle="modal"
                data-target="#add-book-modal">
          <i class="fa fa-plus"></i>&nbsp;&nbsp;Add Book
        </button>
      </div>
      <div class="card-body">

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
              <a href="#" class="btn btn-outline-primary btn-sm" title="Edit"><i class="fa fa-pencil"></i></a>
              <a href="#" class="btn btn-outline-danger btn-sm" title="Delete"><i class="fa fa-times"></i></a>
            </td>
          </tr>
          </tbody>
        </table>

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

  export default {
    name: "Books",
    components: {Pagination, AddBook},
    data: function () {
      return {
        currentPage: 1,
        perPage: 3
      }
    },
    computed: {
      books: function () {
        return this.$store.getters.getBooks(this.currentPage, this.perPage)
      },
      totalBooks: function () {
        return this.$store.getters.totalBooks
      },
    },
    methods: {
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
