<template>
  <Header />
  <Menu />
  <div class="container">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";
</script>

<style scoped>
</style>