<template>
  <div class="home">
    <div class="container">
      <div class="col s12 m8 offset-m2">
        <div class="card-panel orange accent-2 center">
          <table class="center-table" v-if="user">
            <tr>
              <th>Email</th>
              <td>{{ user.email }}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                {{ user.name }}
                <router-link to="/edit-profile/name" class="secondary-content">
                  <i class="fa fa-pen"></i>
                </router-link>
              </td>
            </tr>
            <tr>
              <th>Job</th>
              <td>
                {{ user.job }}
                <router-link to="edit-profile/job" class="secondary-content">
                  <i class="fa fa-pen"></i>
                </router-link>
              </td>
            </tr>
            <tr>
              <th>Rank</th>
              <td>{{ user.rank }}</td>
            </tr>
            <tr>
              <th>Level</th>
              <td>{{ user.level }}</td>
            </tr>
            <tr>
              <th>Xp</th>
              <td>{{ user.xp }}</td>
            </tr>
          </table>

          <div v-else>Loading...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../data/FireInit.js";
export default {
  name: "MyProfile",
  data: function() {
    return {
      user: null
    };
  },
  created: function() {
    db.collection("users")
      .where("email", "==", firebase.auth().currentUser.email)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.user = doc.data();
        });
      });
  }
};
</script>
