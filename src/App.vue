<script setup>
import { onMounted } from 'vue';
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { useTheme } from "./composables/useTheme.js";

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>

<template>
  <Header />
  <Hero /> 
  <Main />
  <Footer />
</template>

<style scoped lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}


</style>
