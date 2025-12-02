<script>
// script setup não é usado aqui porque precisamos definir props, então usamos a sintaxe padrão do Vue para o componente do card
export default {
  name: 'GalleryItem',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: 'Imagem inspiradora',
    },
  },
};
import { Icon } from "@iconify/vue";
</script>


<!-- html do componente card para as imagens-->
<template>
  <div class="gallery-item">
    <div class="image-wrapper">
      <img :src="imageSrc" :alt="imageAlt" class="item-image" />
      <div class="heart-icon">
      </div>
    </div>
  </div>
</template>


<style scoped>
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.image-wrapper {
  /* Para manter a proporção retrato, crucial para o layout */
  position: relative;
  width: 100%;
  padding-top: 150%; /* Altura 1.5x a largura (proporção retrato) */
}

.item-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .item-image {
  transform: scale(1.05);
}

.heart-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  opacity: 1; /* Coração sempre visível */
}
</style>