import { ref } from 'vue';

const isSearchOpen = ref(false);

export const useSearch = () => {
  const openSearch = () => {
    isSearchOpen.value = true;
  };

  const closeSearch = () => {
    isSearchOpen.value = false;
  };

  return {
    isSearchOpen,
    openSearch,
    closeSearch,
  };
};
//obs: esse composable gerencia o estado de abertura e fechamento do modal de busca no aplicativo.