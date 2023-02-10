<template>
  <form @submit.prevent="register">
    <h2>Register</h2>
    <br>
    <div>
      <label htmlFor="lastName">Last name</label>
      <input id="lastName" v-model="fio" type="text" placeholder="last name">
    </div>
    <div>
      <label htmlFor="username">Email</label>
      <input id="username" v-model="email" type="text" placeholder="i_love_django_@gmail.com">
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input id="password" v-model="password" type="password" placeholder="password">
    </div>
    <input type="submit" value="Register!">
  </form>
</template>

<script> // ilovedjango@mail.ru 123123
export default {
  name: "RegisterView",
  data() {
    return {
      fio: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      const userData = {
        fio: this.fio,
        email: this.email,
        password: this.password,
      };
      this.$store
          .dispatch('register', userData)
    },
  }
}
</script>

<style scoped>
form > div {
  width: 420px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form > div > label {
  width: 120px;
}

form > div > input {
  margin: 10px 0;
  width: 250px;
  height: 30px;
  padding-left: 10px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
}

form > div > input:focus {
  outline: none;
  border: 2px solid rgb(43, 36, 248);
}

form > input {
  margin: 20px 0;
  width: 200px;
  height: 35px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  background: rgba(116, 134, 227, 0.8);
  cursor: pointer;
}
</style>