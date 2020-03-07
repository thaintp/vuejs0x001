<template>
  <div class="containter">
    <div class="col s12 m8 offset-m2">
      <div class="register card-panel amber darken-2 white-text center">
        <h3>Register(cont)</h3>
        <form @submit.prevent="registerCont">
          <div class="input-field">
            <i class="fa fa-envelope prefix"></i>
            <input type="text" id="email" v-model="email" disabled />
          </div>
          <div class="input-field">
            <i class="fas fa-signature prefix"></i>
            <input type="text" id="name" v-model="name" required />
            <label for="name" class="label-input">Name</label>
          </div>
          <div class="input-field">
            <i class="fas fa-id-badge prefix"></i>
            <input type="text" id="job" v-model="job" required />
            <label for="job" class="label-input">Job</label>
          </div>
          <div class="input-field">
            <i class="fab fa-hackerrank prefix"></i>
            <input type="text" id="rank" v-model="rank" disabled />
          </div>
          <div class="input-field">
            <i class="fas fa-level-up-alt prefix"></i>
            <input type="text" id="level" v-model="level" disabled />
          </div>
          <div class="input-field">
            <i class="fas fa-battery-half prefix"></i>
            <input type="text" id="xp" v-model="xp" disabled />
          </div>
          <button type="submit" class="btn btn-register-cont">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../data/FireInit.js";
export default {
  name: "register-cont",
  data: function() {
    return {
      email: "",
      name: "",
      job: "",
      rank: "Meteorite",
      level: 0,
      xp: 0
    };
  },
  created: function() {
    this.email = firebase.auth().currentUser.email;
  },
  methods: {
    registerCont: function(event) {
      db.collection("users")
        .add({
          email: this.email,
          name: this.name,
          job: this.job,
          rank: this.rank,
          level: this.level,
          xp: this.xp
        })
        .then(() => {
          alert(`User for ${this.email} is added`);
          this.$router.push("/");
        })
        .catch(err => {
          alert(err);
        });
      event.preventDefault();
    }
  }
};
</script>
