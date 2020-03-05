<template>
  <div class="home">
    <div class="container">
      <div class="col s12 m8 offset-m2">
        <div class="card-panel orange accent-2 center">
          <ul v-if="current">
            <li class="chip">{{ current.name }}</li>
            <li>{{ current.DoB.toDate() }}</li>
            <li>{{ current.job }}</li>
            <li>{{ current.rank }}</li>
            <li>{{ current.level }}</li>
            <li>{{ current.xp }}</li>
          </ul>
          <div v-else>Loading...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../data/FireInit.js";
import firebase from "firebase";
export default {
  name: "MyProfile",
  data() {
    return {
      current: null,
      loading: true
    };
  },
  created() {
    db.collection("users")
      .where("email", "==", firebase.auth().currentUser.email)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(user => {
          this.current = user.data();
        });
      });
  }
};
</script>
