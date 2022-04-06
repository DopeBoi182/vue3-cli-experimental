import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Admin from '../views/Admin.vue'
import InsertBlog from '../views/InsertBlog.vue'
import Login from '../views/Login.vue'
import SingleBlog from '../views/SingleBlog.vue'
import EditBlog from '../views/EditBlog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: "Blog",
    component: Blog
  },
  {
    path: '/admin',
    name: "Admin",
    component: Admin
  },
  {
    path: '/blog/insert',
    name: "InsertBlog",
    component: InsertBlog
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/blog/:id',
    name: "SingleBlog",
    component: SingleBlog
  },
  {
    path: '/edit/:id',
    name: "EditBlog",
    component: EditBlog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

let isAuthenticated = false;
router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('auth'));
  if (to.name === "Login" && isAuthenticated) next({ name: "Home" });
  else next();
})

export default router
