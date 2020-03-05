<template>
  <div class="home">
    <div class="container">
      <div class="col s12 m8 offset-m2">
        <div class="card-panel deep-purple accent-1 center">
          <table class="centered">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Job</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.rank }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.job }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../data/FireInit.js";
export default {
  name: "Home",
  data() {
    return {
      users: [],
      loading: true
    };
  },
  created() {
    db.collection("users")
      .orderBy("level")
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          const user = {
            id: doc.id,
            rank: doc.data().rank,
            name: doc.data().name,
            job: doc.data().job
          };
          this.users.push(user);
        });
      });
  }
};
</script>
