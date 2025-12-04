<script setup>
import { onMounted } from 'vue';
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { useTheme } from "./composables/useTheme.js";
import { useFetchImages } from "./composables/useFetchImages.js";

const { initTheme } = useTheme();
const { images, loading, error, fetchImages } = useFetchImages();

onMounted(async () => {
  initTheme();
  await fetchImages(12);
});
</script>

<template>
  <Header />
  <Hero /> 
  <Main :images="images" :loading="loading" :error="error" />
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
