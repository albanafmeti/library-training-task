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
              <input type="text" class="form-control" placeholder="Enter ISBN">
            </div>
            <div class="form-group">
              <label>Title</label>
              <input type="text" class="form-control" placeholder="Enter Title">
            </div>
            <div class="form-group">
              <label>Author</label>
              <select class="form-control">
                <option v-for="author in authors" :value="author">{{ author }}</option>
              </select>
            </div>

            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" rows="3" placeholder="Enter Description"></textarea>
            </div>

            <hr/>
            <p class="text-right">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Update</button>
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
    computed: {
      ...mapGetters({
        'authors': 'getAuthors'
      })
    },
    methods: {
      ...mapActions([
        'addBook', // map `this.addBook()` to `this.$store.dispatch('addBook')`
      ]),
    }
  }
</script>

<style scoped>

</style>
