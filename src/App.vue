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

//função para lidar com a pesquisa
const handleSearch = async (searchTerm) => {
  if (searchTerm && searchTerm.trim() !== '') {
    // 1. Inicia a busca com o novo termo
    await fetchImages(searchTerm, 1, 12);
  } else {
    // 2. Ou carrega imagens aleatórias se o termo for vazio
    await fetchImages('random', 1, 12);
  }
  // 3. Fecha o modal de pesquisa após a busca
  closeSearch(); 
}; //detalhei isso aq pq achei que tava precisando pra nn esquecer

onMounted(async () => {
  initTheme();
  await fetchImages('landscape', 1, 12);
});
</script>

<template>
  <Header :menu-open="menuOpen" @search="handleSearch" />
  <Hero /> 
  <Main :images="images" :loading="loading" :error="error" />
  <Footer />
  
  <!-- Modal de pesquisa para mobile -->
  <SearchModal
    :is-open="isSearchOpen"
    :is-mobile-bottom="true"
    @close="closeSearch"
    @search="handleSearch"
  />
  <!-- Menu de navegação inferior para mobile -->
  <BottomNavigation
    :is-dark="isDark"
    :menu-open="menuOpen"
    :on-toggle-theme="toggleTheme"
    @search="openSearch"
    @toggle-menu="toggleMenu"
  />
</template>

<style scoped lang="scss">
// Reset básico
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

</style>
