<template>
  <form @submit.prevent="login">
    <h2>Sign in</h2>
    <p>@ for email is required!*</p>
    <br>
    <div>
      <label for="username">Email</label>
      <input id="username" v-model="email" type="text" placeholder="i_love_django_@gmail.com">
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" placeholder="password">
    </div>
    <input type="submit" value="Sign in">
  </form>
</template>

<script>
export default {
  name: "LoginView",// почта обязательно с @
  data() {
    return {
      email: this.email,
      password: this.password,
    }
  },
  methods: {
    login() {
      const userData = {
        email: JSON.parse(JSON.stringify(this.email)),
        password: JSON.parse(JSON.stringify(this.password)),
      };
      this.$store
          .dispatch('login', userData)
    },
  }
}
</script>

<style scoped>
form > div {
  width: 340px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form > div > input {
  margin: 10px 0;
  width: 240px;
  height: 30px;
  padding-left: 10px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
}

form > div > input:focus {
  outline: none;
  border: 2px solid rgb(36, 54, 248);
}

form > input {
  margin: 20px 0;
  width: 90px;
  height: 40px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  background: rgba(116, 134, 227, 0.8);
  cursor: pointer;
}
</style>