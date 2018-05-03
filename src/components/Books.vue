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

        <nav aria-label="Page navigation example" class="mt-4">
          <ul class="pagination">

            <li class="page-item" :disabled="!previousPage">
              <a class="page-link" href="#" @click.prevent="paginate(previousPage)">Previous</a>
            </li>

            <li class="page-item">
              <a class="page-link" href="#" @click.prevent="paginate(previousPage)"
                 v-if="previousPage">{{ previousPage }}</a>
            </li>

            <li class="page-item active"><a class="page-link" href="#">{{ currentPage }}</a></li>

            <li class="page-item"><a class="page-link" href="#" @click.prevent="paginate(nextPage)" v-if="nextPage">{{
              nextPage }}</a></li>

            <li class="page-item" :disabled="!nextPage">
              <a class="page-link" href="#" @click.prevent="paginate(nextPage)">Next</a>
            </li>
          </ul>
        </nav>

      </div>

    </div>

    <AddBook></AddBook>
  </div>
</template>

<script>
  import AddBook from "./AddBook";

  export default {
    name: "Books",
    components: {AddBook},
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
      previousPage: function () {
        return this.currentPage > 1 ? (this.currentPage - 1) : null;
      },
      nextPage: function () {
        let lastPage = Math.ceil(this.totalBooks / this.perPage);
        return lastPage > this.currentPage ? (this.currentPage + 1) : null;
      }
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
