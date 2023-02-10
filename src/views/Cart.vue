<template>
  <h2>Cart</h2>
  <div>
    <Product v-for="prod in cartArr" v-bind:key="prod.id" :prod-data="prod">
      {{ prod.price }}
      <h2 @click="deleteCard(prod)" class="cross">+</h2>
      <p>{{ fullSum }}</p>
      <button @click="toOrder">Кнопка</button>
    </Product>
  </div>
</template>

<script>
import axios from "axios";
import Product from "@/components/Product";
import router from "@/router";
import cart from "@/views/Cart";
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

.cross {
  transform: rotate(45deg);
  cursor: pointer;
}
button {
  color: #2c3e50;
  width: 200px;
  height: 32px;
  margin: 10px 0;
  font-size: 16px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  background: rgba(234, 36, 248, 0.8);
  cursor: pointer;
}
</style>