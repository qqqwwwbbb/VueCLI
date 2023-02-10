<template>
  <div v-if="this.$store.state.orders.length > 0">
  <div class="card" v-for="card in $store.state.orders">
    <h1>Orders page!</h1>
    <br>
    <div>
      <p>Your oder #{{ card.id }}</p>
      <div>
        <p>{{ card.order_price }} &#8381;</p>
      </div>
    </div>
    <hr>
  </div>
  </div>
  <div v-else>
    <p>You have 0 orders!</p>
    <br>
    <p>Order makes from products in the cart, so you should check it!</p>
    <router-link to="cart"><p>Cart</p></router-link>
  </div>
</template>

<script>
export default {
  name: "OrderView",
  mounted() {
    this.$store.dispatch('get_order')
  }
}
</script>

<style scoped>
.card {
  width: 1000px;
  margin: 0 auto;
}

.card > div {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
}

.card > div > div {
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>