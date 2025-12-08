import { ref } from 'vue';
import axios from 'axios';

// Composable para buscar imagens da API Unsplash (com fallback para picsum.photos)
// Configuração: defina VITE_UNSPLASH_ACCESS_KEY no arquivo .env para ativar o Unsplash
export const useFetchImages = () => {
  const images = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const UNSPLASH_KEY = typeof import.meta !== 'undefined' ? import.meta.env.VITE_UNSPLASH_ACCESS_KEY : undefined;

  /**
   * Busca imagens.
   * @param {number} count Quantidade de imagens (padrão 12)
   * @param {string} query Texto de busca opcional (ex: 'nature')
   */
  const fetchImages = async (count = 12, query = '') => {
    loading.value = true;
    error.value = null;

    // Helper: gera fallback com picsum
    const picsumFallback = (c) => {
      const list = [];
      for (let i = 1; i <= c; i++) {
        list.push({
          id: `picsum-${i}`,
          src: `https://picsum.photos/400/600?random=${i}`,
          alt: `Imagem inspiradora ${i}`,
        });
      }
      return list;
    };

    try {
      if (!UNSPLASH_KEY) {
        // Sem chave: usar fallback local (picsum)
        images.value = picsumFallback(count);
        return;
      }

      const url = 'https://api.unsplash.com/photos/random';
      const params = { count };
      if (query) params.query = query;

      const res = await axios.get(url, {
        params,
        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
      });

      // Unsplash pode retornar um objeto (quando count=1) ou um array
      const data = Array.isArray(res.data) ? res.data : [res.data];

      images.value = data.map((img, idx) => ({
        id: img.id || `unsplash-${idx}`,
        src: img.urls?.regular || img.urls?.small || img.urls?.thumb,
        alt: img.alt_description || img.description || `Imagem inspiradora ${idx + 1}`,
        author: img.user?.name,
        link: img.links?.html,
      }));
    } catch (err) {
      // Em caso de erro na requisição, registrar e fornecer fallback
      error.value = err.response?.data?.errors?.[0] || err.message || 'Erro ao buscar imagens';
      console.error('Erro ao buscar imagens (Unsplash):', err);
      images.value = picsumFallback(count);
    } finally {
      loading.value = false;
    }
  };

  return {
    images,
    loading,
    error,
    fetchImages,
  };
};
