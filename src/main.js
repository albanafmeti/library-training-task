// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

// Import moment.js
window.moment = require('moment');

// Import toastr.
window.toastr = require('toastr');
toastr.options.progressBar = true;

// Import Vuejs Dialog.
import VuejsDialog from "vuejs-dialog";

Vue.use(VuejsDialog, {
  html: true,
  loader: true,
  okText: 'Delete',
  cancelText: 'Cancel',
  animation: 'fade'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
