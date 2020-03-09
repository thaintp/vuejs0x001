<template>
  <div class="container">
    <div class="col s12 m8 offset-m2">
      <div class="register card-panel amber darken-2 white-text center">
        <h3>Register</h3>
        <form @submit.prevent="register">
          <div class="input-field">
            <i class="fa fa-envelope prefix"></i>
            <input type="text" id="email" v-model="email" required />
            <label for="email" class="label-input">Email</label>
          </div>
          <div class="input-field">
            <i class="fas fa-lock prefix"></i>
            <input type="password" id="password" v-model="password" required />
            <label for="password" class="label-input">Password</label>
          </div>
          <button type="submit" class="btn btn-active">Register</button>
          <router-link to="/login">
            <button class="btn btn-inactive">Login</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Account create for ${user.user.email}. Enter the profile!`);
            this.$router.push("/register-cont");
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>
