<script>
import GalleryItem from './GalleryItem.vue';

export default {
  components: {
    GalleryItem,
  },
  data() {
    return {
      // ARRAY DE OBJETOS COM INFORMAÇÕES DAS IMAGENS
      galleryImages: [
        { src: 'path/to/image1.jpg', alt: 'Montanha nevada' },
        { src: 'path/to/image2.jpg', alt: 'Gaivotas voando' },
        { src: 'path/to/image3.jpg', alt: 'Passarela de madeira na praia' },
        { src: 'path/to/image4.jpg', alt: 'Pôr do sol no lago' },
        { src: 'path/to/image5.jpg', alt: 'Pôr do sol na costa' },
        { src: 'path/to/image6.jpg', alt: 'Vista da praia urbana' },
        { src: 'path/to/image7.jpg', alt: 'Barco no rio ao pôr do sol' },
        { src: 'path/to/image8.jpg', alt: 'Campo de margaridas' },
        { src: 'path/to/image9.jpg', alt: 'Montanhas e lago espelhado' },
        { src: 'path/to/image10.jpg', alt: 'Formação rochosa na praia' },
        { src: 'path/to/image11.jpg', alt: 'Cachoeira' },
        { src: 'path/to/image12.jpg', alt: 'Aurora Boreal' },
      ],
    };
  },
};
</script>




<template>
  <section class="main-section">
    <h3>Inspire-se</h3>

    <div class="gallery-grid">
      <GalleryItem v-for="(image, index) in galleryImages" :key="index" :image-src="image.src" :image-alt="image.alt" />
    </div>
  </section>
</template>



<style scoped>
.main-section {
  padding: 60px 10%;
}

h3 {
  font-size: 2em;
  font-weight: 700;
  color: #333;
  margin-bottom: 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colunas */
  gap: 20px; /* Espaço entre as imagens */
}

/* Responsividade básica - Ajustar para telas menores */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>