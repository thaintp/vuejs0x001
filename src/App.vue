<template>
  <div id="app">
    <navbar :key="$route.fullPath"></navbar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
export default {
  name: "app",
  components: {
    navbar
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.link {
  margin-right: 20px;
  &:hover {
    color: #ccc;
  }
}
.link:hover {
}
.btn-login {
  margin-left: 80px;
  background: #4db6ac !important;
  border-radius: 160px !important;
  width: 160px !important;
}
.btn-register {
  margin-right: 80px;
  background: #9e9e9e !important;
  border-radius: 160px !important;
  width: 160px !important;
}
.label-input {
  color: #ccc !important;
}
.login {
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 0 0px 1000px #ff6e40 inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }
}
.register {
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 0 0px 1000px #ffa000 inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }
}
</style>
