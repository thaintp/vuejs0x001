<template>
  <nav>
    <div class="nav-wrapper blue">
      <div class="container">
        <router-link to="/" class="left" style="font-size: 16pt">
          OhFix's team
        </router-link>
        <ul class="secondary-content">
          <li v-if="isLoggedIn">
            <router-link to="/my-profile">My Profile</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="isLoggedIn">
            <button @click="logout" class="btn">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
export default {
  name: "navbar",
  data() {
    return {
      isLoggedIn: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    }
  }
};
</script>
