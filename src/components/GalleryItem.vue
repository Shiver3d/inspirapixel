<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import ScrollReveal from 'scrollreveal';

const props = defineProps({
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, default: 'Imagem inspiradora' },
  id: { type: [String, Number], default: null },
});

const emit = defineEmits(['toggle:like']);

const liked = ref(false);

function toggleLike() {
  liked.value = !liked.value;
  emit('toggle:like', { id: props.id, liked: liked.value });
}


onMounted(() => {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 1200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false // Se for true, a animação se repete toda vez que o elemento entra/sai da view
  });

  sr.reveal('.image-wrapper', { 
    origin: 'bottom',
    delay: 200 
  });

  sr.reveal('.gallery-item', {
    origin: 'bottom',
    interval: 150, 
    delay: 500
  });
});

</script>


<!-- html do componente card para as imagens-->
<template>
  <div class="gallery-item">
    <div class="image-wrapper">
      <img :src="imageSrc" :alt="imageAlt" class="item-image" />
      <div class="heart-icon" @click="toggleLike" :class="{ liked: liked }">
        <Icon 
          :icon="liked ? 'material-symbols:heart-check' : 'material-symbols:heart-plus-outline-rounded'" 
          width="24" 
          height="24" 
        />
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
}

.gallery-item:hover {
  box-shadow: 0 8px 24px var(--color-shadow-dark);
}

.image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 150%;
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
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-primary);
  background-color: rgba(250, 189, 189, 0.459);
}

.heart-icon:hover {
  transform: scale(1.3);
}

.heart-icon.liked {
  background-color: var(--color-primary);
  color: white;
}

.heart-icon.liked:hover {
  background-color: var(--color-primary-dark);
  transform: scale(1.15);
}
</style>