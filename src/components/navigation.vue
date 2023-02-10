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
  margin-top: 15px;
  margin-bottom: 20px;
}
.header > h1 {
 text-align: center;
  animation: pulsate 0.11s ease-in-out infinite alternate;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #945fff,
      0 0 82px #5e00ff,
      0 0 92px #5e00ff,
      0 0 102px #5e00ff,
      0 0 151px #5e00ff;
}

.nav {
  margin-top: 45px;
  font-size: 21px;
  margin-bottom: 20px;
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
<style>
*{
  margin: 0;
  padding: 0;
}
</style>