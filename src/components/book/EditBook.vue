<template>
  <div>

    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active">
          <router-link :to="{ name: 'books' }">Books</router-link>
        </li>
        <li class="breadcrumb-item active">
          <router-link :to="{ name: 'edit-book', params: { id: book.id }}">Edit Book</router-link>
        </li>
      </ol>
    </nav>

    <div class="card mb-5">
      <div class="card-header">Edit Book</div>
      <div class="card-body">

        <!-- Edit Book Form -->
        <form v-if="bookItem">
          <div class="form-group">
            <label>ISBN</label>
            <input type="text" class="form-control" placeholder="Enter ISBN" v-model="bookItem.isbn">
          </div>
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" placeholder="Enter Title" v-model="bookItem.title">
          </div>

          <div class="form-group">
            <label>Author</label>
            <select class="form-control" v-model="bookItem.author">
              <option v-for="author in authors" :value="author">{{ author }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="3" placeholder="Enter Description"
                      v-model="bookItem.description"></textarea>
          </div>

          <div class="form-group">
            <div class="form-row justify-content-center">
              <div class="col-sm-4">
                <label>Creation Date</label>
                <datepicker v-model="bookItem.creation_date" :format="formatDate" input-class="form-control"
                            :inline="true"
                            placeholder="Creation Date"></datepicker>
              </div>
            </div>
          </div>

          <p class="text-right">
            <button type="submit" class="btn btn-primary" @click.prevent="update">Update</button>
          </p>
        </form>

      </div>

    </div>

  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import Datepicker from 'vuejs-datepicker';

  export default {
    name: "EditBook",
    components: {Datepicker},
    data: function () {
      return {
        bookItem: null
      }
    },
    computed: {
      ...mapGetters({
        'authors': 'getAuthors'
      }),

      book: function () {
        let bookId = parseInt(this.$route.params.id);
        return this.$store.getters.getBook(bookId)
      },
    },
    methods: {
      ...mapActions([
        'updateBook'
      ]),

      update() {

        try {
          this.validateBook();
        } catch (exception) {
          return toastr.error(exception);
        }

        this.updateBook(this.bookItem);

        toastr.success("Book has been updated successfully.");
        this.$router.push({name: 'books'});
      },

      formatDate(date) {
        return moment(date).format('YYYY-MM-DD');
      },

      validateBook() {
        if (this.bookItem.isbn === ""
          || this.bookItem.isbn === null) {
          throw "ISBN is required.";
        } else if (this.bookItem.title === ""
          || this.bookItem.title === null) {
          throw "Title is required.";
        } else if (this.bookItem.author === ""
          || this.bookItem.author === null) {
          throw "Author is required.";
        } else if (this.bookItem.creation_date === ""
          || this.bookItem.creation_date === null) {
          throw "Creation date is required.";
        }
      }
    },
    mounted: function () {
      this.bookItem = {...this.book};
    }
  }
</script>

<style scoped>

</style>
