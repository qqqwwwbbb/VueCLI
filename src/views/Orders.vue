<template>
  <div class="card" v-for="card in $store.state.orders">
    <h1>Orders page!</h1>
    <div>
      <p>Your oder #{{ card.id }}</p>
      <div>
        <p>{{ card.order_price }} &#8381;</p>
      </div>
    </div>
    <hr>
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