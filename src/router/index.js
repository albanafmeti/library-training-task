import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/book/Books'
import EditBook from '@/components/book/EditBook'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'books',
      component: Books
    },
    {
      path: '/book/:id',
      name: 'edit-book',
      component: EditBook
    }
  ]
})
