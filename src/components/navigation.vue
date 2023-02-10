<template>
  <div class="header">
    <h1>My practice shop!</h1>
    <div class="nav">
      <router-link to="catalog"><p>Catalog</p></router-link>
      <router-link to="cart"><p>Cart ({{ this.$store.state.cartCount }})</p></router-link>
      <router-link to="orders"><p>Orders</p></router-link>
      <router-link v-if="!this.$store.getters.isAuthenticated" to="login"><p>Sign In</p></router-link>
      <router-link v-if="!this.$store.getters.isAuthenticated" to="register"><p>Sign Up</p></router-link>
      <router-link v-if="this.$store.getters.isAuthenticated" to="logout" @click="logout"><p>Logout...</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  }
}
</script>

<style scoped>
.header {
  display: inline-block;
  margin-left: 20px;
  justify-content: space-around;
  align-items: center;
}
.header > h1 {
 text-align: center;
}

.nav {
  width: 500px;
  display: flex;
  justify-content: space-around;
}

a {
  font-weight: bold;
  color: #213c4f;
  text-decoration: none;
}

a.router-link-exact-active {
  color: rgb(57, 36, 248);
}
</style>