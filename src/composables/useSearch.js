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
