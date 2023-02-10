import { createStore } from 'vuex';
import axios from "axios";
import router from "@/router";

export default createStore({
  state: {
    token: localStorage.getItem('token'),
    type_token: 'Bearer ',
    API: 'https://jurapro.bhuser.ru/api-shop/',
    cart: [],
    orders: [],
    cartCount: 0
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  mutations: {
    auth_success: (state, token) => {
      state.token = token
    },
    auth_error: (state) => {
      state.token = '';
    },
    cart_update: (state, data) => {
      state.cart = data
      state.cartCount = data.length
    },
    cart_delete: (state) => {
      state.cart = []
      state.cartCount = 0
    },
    order_update: (state, data) => {
      state.orders = data
    },
  },
  actions: {
    async to_cart({commit}, product_id) {
      await axios.post(this.state.API + 'cart/' + product_id, {}, {headers: {Authorization: this.state.type_token + this.state.token}})
    },
    async get_cart({commit}) {
      await axios.get(this.state.API + 'cart', {headers: {Authorization: this.state.type_token + this.state.token}})
          .then((response) => {
            commit('cart_update', response.data.data)
          })
    },
    async from_cart({commit}, product_id) {
      await axios.delete(this.state.API + 'cart/' + product_id, {headers: {Authorization: this.state.type_token + this.state.token}})
    },
    async get_order({commit}){
      await axios.get(this.state.API + 'order', {headers: {Authorization: this.state.type_token + this.state.token}}).then((response)=>{
        commit('order_update', response.data.data)
      })
    },
    async to_order({commit}){
      await axios.post(this.state.API + 'order', {}, {headers: {Authorization: this.state.type_token + this.state.token}})
          .then((response) => {
            commit('cart_delete', response.data.data)
          })
    },
    async login({commit}, user) {
      try {
        await axios.post(this.state.API + 'login', user).then((response) => {
          this.state.token = response.data.data.user_token
          localStorage.setItem('token', this.state.token)
          axios.defaults.headers = {Authorisation: this.state.type_token + this.state.token}
          router.push('/')
        })
      } catch (error) {
        commit('auth_error');
        localStorage.removeItem('token');
      }
    },
    async register({commit}, user) {
      try {
        await axios.post(this.state.API + 'signup', user).then((response) => {
          this.state.token = response.data.data.token
          localStorage.setItem('token', this.state.token)
          axios.defaults.headers = {Authorisation: this.state.type_token + this.state.token}
          router.push('/')
        })
      } catch (error) {
        commit('auth_error');
        localStorage.removeItem('token');
        console.log("error! enter the test data --> name: abc, password: 123123, email: awf@mail.ru")
        alert("Enter a correct data (you can view it in F12 console)");
      }
    },
    async logout() {
      localStorage.removeItem('token', this.state.token)
      this.state.token = '';
      await axios.get(this.state.API + 'logout')
    }
  },
})