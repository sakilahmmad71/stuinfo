import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import Router from 'vue-router'
import Home from '../ui/pages/Home.vue'
import BookList from '../ui/pages/BookList.vue'
import StudentList from '../ui/pages/StudentList.vue'
import CreateBook from '../ui/pages/CreateBook.vue'
import CreateStudent from '../ui/pages/CreateStudent.vue'

Vue.use(VueMeteorTracker)
Vue.use(Router)

export const router = new Router({
  mode : "history",
  routes : [
    {path : '/', name : 'home', component : Home },
    { path : '/register-student', name : 'register-student', component : CreateStudent },
    { path : '/register-book', name : 'register-book', component : CreateBook },
    {path : '/students', name : 'students', component: StudentList },
    {path : '/books', name : 'books', component : BookList }
  ]
})