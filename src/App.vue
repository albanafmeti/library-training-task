<template>
  <div id="app">

    <div class="main-content">
      <div class="container">
        <div class="row">
          <div class="col">

            <router-link :to="{ name: 'books' }" class="app-title-link">
              <h1 class="h1 my-3 app-title">Library</h1>
            </router-link>
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

  .app-title {
    font-family: initial;
  }

  .app-title-link, .app-title-link:hover {
    text-decoration: none;
    color: #000;
  }
</style>
