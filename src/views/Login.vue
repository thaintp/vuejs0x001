<template>
  <div class="container">
    <div class="col s12 m8 offset-m2">
      <div class="login card-panel deep-orange accent-2 white-text center">
        <h3>Login</h3>
        <form>
          <div class="input-field">
            <i class="fa fa-envelope prefix"></i>
            <input type="text" id="email" v-model="email" required />
            <label class="label-input" for="email">Email</label>
          </div>
          <div class="input-field">
            <i class="fas fa-lock prefix"></i>
            <input type="password" id="password" v-model="password" required />
            <label class="label-input" for="password">Password</label>
          </div>
          <router-link to="/register">
          <button class="btn btn-register">Register</button>
          </router-link>
          <button @click="login" class="btn btn-login">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Login as ${user.user.email}`);
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>
