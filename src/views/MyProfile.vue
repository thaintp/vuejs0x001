<template>
  <div class="home">
    <div class="container">
      <div class="col s12 m8 offset-m2">
        <div class="card-panel orange accent-2 center">
          <table class="center-table" v-if="current">
              <tr>
                <th>Email</th>
                <td>{{ current.email }}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{{ current.name }}</td>
              </tr>
              <tr>
                <th>Job</th>
                <td>{{ current.job }}</td>
              </tr>
              <tr>
                <th>Rank</th>
                <td>{{ current.rank }}</td>
              </tr>
              <tr>
                <th>Level</th>
                <td>{{ current.level }}</td>
              </tr>
              <tr>
                <th>Xp</th>
                <td>{{ current.xp }}</td>
              </tr>
          </table>
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
