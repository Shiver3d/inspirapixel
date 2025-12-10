<script setup>
import { ref } from 'vue';
import GalleryItem from './GalleryItem.vue';
//props da main pra receber os dados e cards
const props = defineProps({
  images: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false },
  error: { type: String, default: null },
});

const likedIds = ref(new Set());

function onToggleLike(payload) {
  if (!payload || payload.id == null) return;
  if (payload.liked) likedIds.value.add(payload.id);
  else likedIds.value.delete(payload.id);
}
</script>
<!-- html da main-->
<template>
  <section class="main-section" id="galeria">
    <div class="section-text">
    <h3>Inspire-se</h3>
    <p>Para salvar as imagens, aperte o click direito ou pressione e segure na tela!</p>
    </div>

    <div v-if="loading" class="loading-message">
      Carregando imagens...
    </div>

    <div v-else-if="error" class="error-message">
      Erro ao carregar imagens: {{ error }}
    </div>

    <div v-else-if="images && images.length > 0" class="gallery-grid">
      <GalleryItem
        v-for="(image, index) in images"
        :key="image.id ?? index"
        :image-src="image.src"
        :image-alt="image.alt"
        :id="image.id ?? index"
        @toggle:like="onToggleLike"
      />
    </div>

    <div v-else class="empty-message">
      <span>Nenhuma imagem encontrada.</span>
    </div>
  </section>
</template>



<style scoped lang="scss">
.main-section {
  padding: 60px 10%;
  background-color: var(--color-bg-primary);
  transition: background-color 0.3s ease;
  min-height: 60vh;
}

.section-text {
  text-align: center;
  margin-bottom: 40px;
}

h3 {
  font-size: 2em;
  font-weight: 700;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
  transition: color 0.3s ease;
}

p {
  font-size: 1em;
  color: var(--color-text-tertiary);
  margin-bottom: 5vh;
  transition: color 0.3s ease;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.loading-message,
.error-message,
.empty-message {
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px;
  font-size: 1.1em;
}

.loading-message {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-tertiary);
  border: 2px solid var(--color-border);
}

.error-message {
  background-color: rgba(229, 77, 125, 0.1);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.empty-message {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-tertiary);
  border: 2px solid var(--color-border);
}

/* Responsividade básica - Ajustar para telas menores */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);  
  }
  
  .main-section {
    padding: 40px 6%;
  }
}

@media (max-width: 468px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .main-section {
    padding: 30px 5%;
  }
}
</style>