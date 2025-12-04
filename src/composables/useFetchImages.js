import { ref } from 'vue';
// Composable para buscar imagens da API picsum.photos
export const useFetchImages = () => {
  const images = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchImages = async (count = 12) => {
    loading.value = true;
    error.value = null;

    try {
      // Gera 12 imagens da API picsum.photos
      const imageList = [];
      for (let i = 1; i <= count; i++) {
        imageList.push({
          id: i,
          src: `https://picsum.photos/400/600?random=${i}`,
          alt: `Imagem inspiradora ${i}`,
        });
      }
      images.value = imageList;
    } catch (err) {
      error.value = err.message || 'Erro ao buscar imagens';
      console.error('Erro ao buscar imagens:', err);
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
