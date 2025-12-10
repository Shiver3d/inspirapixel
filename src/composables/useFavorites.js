import { ref, watch } from 'vue';

const FAVORITES_STORAGE_KEY = 'inspirapixel-favorites';

const favorites = ref(JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]'));

watch(favorites, (newFavorites) => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites));
}, { deep: true });

export function useFavorites() {

    const addFavorite = (image) => {
        if (!isFavorite(image.id)) {
            favorites.value.push(image);
        }
    };

    const removeFavorite = (imageId) => {
        favorites.value = favorites.value.filter(fav => fav.id !== imageId);
    };

    const isFavorite = (imageId) => {
        return favorites.value.some(fav => fav.id === imageId);
    };

    const toggleFavorite = (image) => {
        if (isFavorite(image.id)) {
            removeFavorite(image.id);
            return false;
        } else {
            addFavorite(image);
            return true;
        }
    };

    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
    };
}

//obs: esse composable gerencia a lista de favoritos, armazenando-a no localStorage e fornecendo funções para adicionar, remover, verificar e alternar favoritos. Ainda não está sendo usado no app principal. :P