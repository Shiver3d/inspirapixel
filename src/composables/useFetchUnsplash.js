import { ref } from 'vue';

// Chave pública da Unsplash - substitua pela sua se necessário
// Você pode obter uma gratuitamente em: https://unsplash.com/developers
const VITE_UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || '';

export const useFetchUnsplash = () => {
  const images = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const query = ref('landscape');

  const fetchImages = async (searchQuery = 'landscape', page = 1, perPage = 12) => {
    loading.value = true;
    error.value = null;
    query.value = searchQuery;

    try {
      // Se houver chave de API, usar endpoint autenticado; senão, usar endpoint público
      const baseUrl = 'https://api.unsplash.com/search/photos';
      const params = new URLSearchParams({
        query: searchQuery,
        page,
        per_page: perPage,
        order_by: 'relevant',
      });

      if (VITE_UNSPLASH_ACCESS_KEY) {
        params.append('client_id', VITE_UNSPLASH_ACCESS_KEY);
      }

      const response = await fetch(`${baseUrl}?${params}`);

      if (!response.ok) {
        throw new Error(`Erro ${response.status} ao buscar imagens do Unsplash`);
      }

      const data = await response.json();

      images.value = (data.results || []).map((img) => ({
        id: img.id,
        src: img.urls.regular,
        alt: img.alt_description || img.description || 'Imagem do Unsplash',
        author: img.user?.name || 'Autor desconhecido',
        link: img.links.html,
      }));
    } catch (err) {
      error.value = err.message || 'Erro ao buscar imagens';
      console.error('Erro ao buscar imagens do Unsplash:', err);
      images.value = [];
    } finally {
      loading.value = false;
    }
  };

  return {
    images,
    loading,
    error,
    query,
    fetchImages,
  };
};
