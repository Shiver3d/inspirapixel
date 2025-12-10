<script setup>
import { Icon } from '@iconify/vue';

const emit = defineEmits(['search', 'toggle-menu']);
const props = defineProps({
  isDark: { type: Boolean, default: false },
  menuOpen: { type: Boolean, default: false },
  onToggleTheme: { type: Function, required: true },
});



</script>

<template>
  <nav class="bottom-nav">
    <!-- Botão de busca -->
    <button class="nav-btn" @click="$emit('search')" title="Buscar">
      <Icon icon="material-symbols:search" width="35" height="35" />
    </button>

    <!-- Theme toggle button -->
    <button class="nav-btn" @click="props.onToggleTheme()" :title="isDark ? 'Modo claro' : 'Modo escuro'">
      <img v-if="isDark" src="../assets/sun.svg" alt="Modo claro" class="theme-icon"  />
      <img v-else src="../assets/moon.svg" alt="Modo escuro" class="theme-icon" />
    </button>

    <!-- Menu Hamburguer -->
    <button
      class="nav-btn"
      @click="$emit('toggle-menu')"
      :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
      :aria-expanded="menuOpen"
    >
      <Icon :icon="menuOpen ? 'mdi:close' : 'mdi:menu'" width="35" height="35" />
    </button>
  </nav>
</template>

<style scoped lang="scss">
.bottom-nav {
    display: none;
}

@media (max-width: 768px) {

.bottom-nav {
  position: fixed;
  margin: 5vh 20vw;
  bottom: 0;
  background: var(--color-bottom-nav);
  padding: 1vh 16vw;
  z-index: 1;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 12px 16px;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: var(--color-primary);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  .theme-icon {
    width: 35px;
    height: 35px;
  }
}
}

/* Resonsividade mobile */
@media (max-width: 468px) {
  .bottom-nav {
    display: flex;
    margin: 5vh 12vw;
  }
}

@media (max-width: 418px) {
  .bottom-nav {
    display: flex;
    margin: 5vh 8vw;
  }
}

</style>
