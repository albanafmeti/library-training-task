<template>
  <div class="modal fade" id="add-book-modal" tabindex="-1" role="dialog" aria-labelledby="Add Book"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Book</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

          <!-- Add Book Form -->
          <form>
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
            <p class="text-right">
              <button type="submit" class="btn btn-primary" @click.prevent="add">Add</button>
            </p>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: "AddBook",
    data: function () {
      return {
        bookItem: {
          isbn: null,
          title: null,
          author: null,
          description: null,
        }
      }
    },
    computed: {
      ...mapGetters({
        'authors': 'getAuthors'
      })
    },
    methods: {
      ...mapActions([
        'addBook',
      ]),

      add() {

        try {
          this.validateBook();
        } catch (exception) {
          return toastr.error(exception);
        }

        this.addBook(this.bookItem);

        toastr.success('Book has been added successfully.');
        $('#add-book-modal').modal('hide');

        // Reset bookItem
        this.bookItem = {
          isbn: null,
          title: null,
          author: null,
          description: null,
        }
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
    }
  }
</script>

