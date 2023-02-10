<template>
  <h2>Cart</h2>
  <div>
    <Product v-for="prod in cartArr" v-bind:key="prod.id" :prod-data="prod"></Product>
  </div>
</template>

<script>
import axios from "axios";
import Product from "@/components/Product";
import router from "@/router";
export default {
  name: "Catalog",
  components: {Product},
  data(){
    return{
      cartArr: [],
    }
  },
  methods: {
    deleteCard(prodData) {
      this.$store.dispatch('from_cart', prodData.id)
      this.$store.dispatch('get_cart')
    },
    toOrder() {
      this.$store.dispatch('to_order')
    },
  },
  mounted(){ // api!
    axios.get(this.$store.state.API + `cart`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + this.$store.state.token
      }
    }).then((response) => {
      this.cartArr = response.data.data
    })
  },
  computed: {
    fullSum() {
      this.sum = 0
      this.$store.state.cart.forEach(prodData => {
        this.sum+=prodData.price
      })
      return this.sum
    }
  }
}
</script>

<style scoped>
div {
  display: inline-block;
}
</style>