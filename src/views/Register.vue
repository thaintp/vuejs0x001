<template>
  <div class="container">
    <div class="col s12 m8 offset-m2">
      <div class="register card-panel amber darken-2 white-text center">
        <h3>Register</h3>
        <form>
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
          <button class="btn btn-register" @click="register">Register</button>
          <router-link to="/login">
            <button class="btn btn-login">Login</button>
          </router-link>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../data/FireInit.js";
export default {
  name: "register",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register: function(event) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Account create for ${user.user.email}`);
            this.$router.push("/");
            db.collection("users").add({
              name: this.email,
              email: this.email,
              job: "xxx",
              DoB: "",
              level: 0,
              xp: 0,
              rank: "Meteorite"
            });
          },
          err => {
            alert(err.message);
          }
        );
      event.preventDefault();
    }
  }
};
</script>
