<template>
  <div class="container">
    <div class="col s12 m8 offset-m2">
      <div class="edit card-panel pink accent-2 white-text center">
        <h5>Enter new {{ property }}</h5>
        <form @submit.prevent="edit">
          <div class="input-field">
            <i v-if="property == 'name'" class="fas fa-signature prefix"></i>
            <i v-if="property == 'job'" class="fas fa-id-badge prefix"></i>
            <input type="text" v-model="value" required />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../data/FireInit.js";
export default {
  name: "EditProfile",
  data: function() {
    return {
      user: null,
      property: null,
      value: null
    };
  },
  created: function() {
    this.property = this.$route.params.property;
    db.collection("users")
      .where("email", "==", firebase.auth().currentUser.email)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.user = doc.data();
          var entries = Object.entries(doc.data());
          for (var [property, value] of entries) {
            if (property == this.property) {
              this.value = value;
              break;
            }
          }
        });
      });
  }
};
</script>
