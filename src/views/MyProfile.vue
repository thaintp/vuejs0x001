<template>
  <div class="home">
    <div class="container">
      <div class="col s12 m8 offset-m2">
        <div class="card-panel orange accent-2 center">
          <div v-if="user">
            <table class="center-table">
              <tr>
                <th>Email</th>
                <td>{{ user.email }}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>
                  {{ user.name }}
                  <router-link
                    to="/edit-profile/name"
                    class="secondary-content"
                  >
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

            <button @click="up" class="btn-floating btn-large btn-up pulse">
              <i class="fas fa-arrow-up"></i>
            </button>
          </div>
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
      user: null,
      doc: null,
      xpUp: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      ranks: [
        "",
        "Meteorite",
        "Pluto",
        "Moon",
        "Mercury",
        "Mars",
        "Venus",
        "Earth",
        "Neptune",
        "Uranus",
        "Saturn",
        "Jupiter",
        "Sun",
        "Black Hole"
      ]
    };
  },
  created: function() {
    db.collection("users")
      .where("email", "==", firebase.auth().currentUser.email)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.user = doc.data();
          this.doc = doc;
        });
      });
  },
  methods: {
    up: function() {
      ++this.user.xp;
      if (this.user.xp >= this.xpUp[this.user.level]) {
        ++this.user.level;
        var currentRankIndex = this.ranks.indexOf(this.user.rank);
        if (this.user.level >= this.xpUp[currentRankIndex]) {
          this.user.rank = this.ranks[currentRankIndex + 1];
          alert(`Congratulation! Rank up to ${this.user.rank}`);
        }
        this.user.xp = 0;
      }
    },
    isUp: function() {
      var upXp = this.user.xp !== this.doc.data().xp;
      if (upXp) {
        return true;
      }
      var upLevel = this.user.level !== this.doc.data().level;
      if (upLevel) {
        return true;
      }
      return false;
    }
  },
  beforeDestroy: function() {
    if (this.isUp()) {
      var save = confirm("Save your training?");
      if (save) {
        this.doc.ref.update({
          rank: this.user.rank,
          level: this.user.level,
          xp: this.user.xp
        });
      }
    }
  }
};
</script>
