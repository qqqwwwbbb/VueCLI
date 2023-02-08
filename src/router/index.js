import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store";

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('@/views/Login.vue');
    },
    beforeEnter: ifNotAuthenticated,
  },
  {path: '/', name: 'catalog',
    component: function () {
      return import('@/views/Catalog.vue'); // ПУТИ НА ВЬЮШКИ
    },
  },
  {path: '/signup', name: 'signup',
    component: function () {
      return import('@/views/SignUp.vue'); // САМА АВТОРИЗАЦИЯ
    },
    beforeEnter: ifNotAuthenticated,
  },
  {path: '/cart', name: 'cart',
    component: function () {
      return import('@/views/Cart.vue');
    },
    beforeEnter: ifAuthenticated,
  },
  {path: '/orders', name: 'orders',
    component: function () {
      return import('@/views/Orders.vue'); // УСЛОВИЕ ЕСЛИ НЕ АВТОРИЗИРОВАН!
    },
    beforeEnter: ifAuthenticated,
  },
  {path: '/logout',  name: 'logout',
    component: function () {
      return import('@/views/Logout.vue');
    },
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), routes
})

export default router