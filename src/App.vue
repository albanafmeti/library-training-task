<template>
  <div id="app">

    <div class="main-content">
      <div class="container">
        <div class="row">
          <div class="col">

            <h1 class="h1 my-3">Library</h1>
            <hr/>

            <router-view/>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer p-5">
      <div class="container">
        <div class="row text-center">
          <div class="col">
            <p>
              Copyright @ <strong>Scopic Software</strong> 2018
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">

  .main-content {
    min-height: 500px;
  }
</style>
