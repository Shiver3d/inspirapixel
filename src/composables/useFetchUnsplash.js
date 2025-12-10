import { ref } from 'vue';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || ''; // Pega a chave da API do Unsplash das variáveis de imagem

export const useFetchUnsplash = () => {
  const images = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const query = ref('random');

  const fetchImages = async (searchQuery = 'random', page = 1, perPage = 12) => {
    loading.value = true;
    error.value = null;
    query.value = searchQuery;

    try {
      const baseUrl = 'https://api.unsplash.com/photos/random';
      const params = new URLSearchParams({
        query: searchQuery,
        count: perPage,
      });

      if (UNSPLASH_ACCESS_KEY) {
        params.append('client_id', UNSPLASH_ACCESS_KEY);
      }

      const response = await fetch(`${baseUrl}?${params}`);

      if (!response.ok) {
        throw new Error(`Erro ${response.status} ao buscar imagens do Unsplash`);
      }

      const data = await response.json();

      // O endpoint de fotos aleatórias com 'count' retorna um array diretamente
      images.value = (data || []).map((img) => ({
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

//obs: esse composable faz requisições à API do Unsplash para buscar imagens aleatórias com base em uma consulta de pesquisa fornecida. Ele gerencia o estado de carregamento, erros e os dados das imagens retornadas.