<script setup>
import { onMounted, ref } from 'vue';
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import BottomNavigation from "./components/BottomNavigation.vue";
import SearchModal from "./components/SearchModal.vue";
import { useTheme } from "./composables/useTheme.js";
import { useFetchUnsplash } from "./composables/useFetchUnsplash.js";
import { useSearch } from "./composables/useSearch.js";

const { isDark, toggleTheme, initTheme } = useTheme();
const { images, loading, error, fetchImages } = useFetchUnsplash();
const { isSearchOpen, openSearch, closeSearch } = useSearch();

// State para controle do menu mobile
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(async () => {
  initTheme();
  await fetchImages('landscape', 1, 12);
});
</script>

<template>
  <Header :menu-open="menuOpen" />
  <Hero /> 
  <Main :images="images" :loading="loading" :error="error" />
  <Footer />
  
  <SearchModal
    :is-open="isSearchOpen"
    :is-mobile-bottom="true"
    @close="closeSearch"
    @search="closeSearch"
  />
  
  <BottomNavigation
    :is-dark="isDark"
    :menu-open="menuOpen"
    :on-toggle-theme="toggleTheme"
    @search="openSearch"
    @toggle-menu="toggleMenu"
  />
</template>

<style scoped lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

</style>
