<template>
  <div>
    <div class="card">
      <div class="card-header">Edit Book</div>
      <div class="card-body">

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
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="3" placeholder="Enter Description"></textarea>
          </div>
          <p class="text-right">
            <button type="submit" class="btn btn-primary">Update</button>
          </p>
        </form>

      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "EditBook"
  }
</script>

<style scoped>

</style>
