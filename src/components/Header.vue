<script setup>
import { ref, computed } from 'vue';
import { Icon } from "@iconify/vue";
import { useTheme } from "../composables/useTheme.js";
import SearchModal from "./SearchModal.vue";

const { isDark, toggleTheme } = useTheme();

defineProps({
  menuOpen: {
    type: Boolean,
    default: false,
  },
});

const isSearchOpen = ref(false);
const isMobileScreen = ref(window.innerWidth <= 468);

const openSearch = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;
};

window.addEventListener('resize', () => {
  isMobileScreen.value = window.innerWidth <= 468;
});
</script>

<!-- header -->
<template>
  <header :class="{ 'menu-open': menuOpen }">
    <img src="../assets/logo.svg" alt="Logo" />
    <h1>Inspira Pixel</h1>

    <div class="search-wrapper">
      <SearchModal :is-mobile-bottom="false" />
    </div>

    <nav :class="{ open: menuOpen }">
      <ul>
        <li>
          <a href="">
            <Icon icon="material-symbols:person-outline" width="30" height="30" />
          </a>
        </li>
        <li><a href="#hero">Início</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="">Favoritos</a></li>
        <li>
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? 'Modo claro' : 'Modo escuro'">
            <img v-if="isDark" src="../assets/sun.svg" alt="Modo claro" class="theme-icon"  />
            <img v-else src="../assets/moon.svg" alt="Modo escuro" class="theme-icon" />
          </button>
        </li>
      </ul>
    </nav>
  </header>


</template>

<style scoped lang="scss">

header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-bg-primary);
  box-shadow: 0 2px 4px var(--color-shadow);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 100;
  gap: 1rem;
}

img {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  flex: 1;
  transition: color 0.3s ease;
  font-family: "Abril Fatface", serif;
}

.search-wrapper {
  flex: 0 1 auto;
}

ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

a {
  text-decoration: none;
  color: var(--color-text-primary);
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

li {
  font-weight: 600;
  font-size: 1rem;
}

.theme-toggle {
  background-color: var(--color-text-primary);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  padding: 0;
}

.theme-toggle:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.theme-toggle:active {
  transform: scale(0.95);
}

.theme-icon {
  width: 20px;
  height: 20px;
}

:root.dark-mode .theme-icon {
  filter: invert(0);
}

@media (max-width: 768px) {
  header {
    padding: 0.75rem 1rem;
    gap: 0.5rem;
  }

  .theme-toggle {
    display: none;
  }

  h1 {
    font-size: 1.3rem;
    flex: 1;
  }

  .search-wrapper {
    display: none;
  }

  nav {
    position: absolute;
    margin-top: 40vh;
    top: 100%;
    right: 0;
    left: 0;
    background: var(--color-bg-primary);
    transform: translateY(10px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
    box-shadow: 0 8px 24px var(--color-shadow-dark);
  }

  nav.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  nav ul {
    flex-direction: column;
    gap: 0;
    padding: 12px 16px 18px;
    align-items: stretch;
  }

  nav ul li {
    padding: 10px 0;
    background-color: var(--color-bg-secondary);
  }

  nav ul li a {
    width: 100%;
    display: block;
    padding: 6px 8px;
  }
}

@media (max-width: 467px) {
  header {
    padding: 0.6rem 0.8rem;
  }

  h1 {
    display: none;
  }

  nav {
    display: none;
  }
}

</style>
