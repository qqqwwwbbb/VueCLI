<template>
  <card-product :allProducts="allProducts"/>
</template>

<script>
import CardProduct from "@/components/Product.vue";
import axios from "axios";

export default {
  name: "catalog",
  components: {
    CardProduct
  },
  data() {
    return {
      allProducts: []
    }
  },
  mounted() {
    axios.get(this.$store.state.API + 'products').then((response) => {
      this.allProducts = response.data
    })
  }
}
</script>

<style scoped>

</style>