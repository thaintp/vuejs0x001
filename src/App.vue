<template>
  <div id="app">
    <navbar :key="$route.fullPath"></navbar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" src="./assets/scss/style.scss"></style>

<script>
import navbar from "./components/Navbar";
export default {
  name: "app",
  components: {
    navbar
  }
};
</script>
