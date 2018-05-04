<template>
  <div>
    <div class="card">
      <div class="card-header">Edit Book</div>
      <div class="card-body">

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

  export default {
    name: "EditBook",
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
      update() {
        this.updateBook(this.bookItem);
        toastr.success("Book has been updated successfully.");
        this.$router.push({name: 'books'});
      },

      ...mapActions([
        'updateBook', // map `this.addBook()` to `this.$store.dispatch('addBook')`
      ]),
    },
    mounted: function () {
      this.bookItem = {...this.book};
    }
  }
</script>

<style scoped>

</style>
