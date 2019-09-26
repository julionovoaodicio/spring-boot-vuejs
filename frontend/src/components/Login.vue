<template>
  <div class="unprotected" v-if="loginError">
    <h1><b-badge variant="danger">You don't have rights here, mate :D</b-badge></h1>
    <h5>Seams that you don't have access rights... </h5>
  </div>
  <div class="unprotected" v-else>
    <h1><b-badge variant="info">Please login to get access!</b-badge></h1>
    <h5>You're not logged in - so you don't see much here. Try to log in:</h5>
    <card class="card" >
      <div class="container d-flex justify-content-center">
      <form @submit.prevent="callLogin()">
        <div class="form-group" >
          <input type="text" placeholder="username" class="form-control mt-1" v-model="user">
          <input type="password" placeholder="password" v-model="password" class="form-control mt-1">
            <b-btn variant="success" class="btn btn-block mt-3" type="submit">Login</b-btn>
            <p v-if="error" class="error">Bad login information</p>
          </div>
      </form>
      </div>
      </card>
  </div>

</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      loginError: false,
      user: '',
      password: '',
      error: false,
      errors: []
    }
  },
  methods: {
    callLogin() {
      this.errors = [];
      this.$store.dispatch("login", { user: this.user, password: this.password})
        .then(() => {
          this.$router.push('/Protected')
        })
        .catch(error => {
          this.loginError = true;
          this.errors.push(error);
          this.error = true
        })
    }
  }
}
</script>
<style>
</style>