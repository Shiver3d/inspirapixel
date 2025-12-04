<script setup>
</script>



<!-- hero -->
<template>
  <section class="hero-section" id="hero">
    <div class="content">
      <h2>Onde a paisagem vira <span class="highlight">inspiração</span>.</h2>
      <p>
        Explore paisagens, cores e luzes que inspiram novas histórias através da fotografia.
      </p>
    </div>
    <div class="image-container">
      <img src="../assets/fotografo.png" alt="Pessoa tirando uma foto de um pôr do sol" class="hero-image" />
    </div>
  </section>
</template>


<style scoped lang="scss">

.hero-section {
  display: flex;
  margin-top: 9vh;
  align-items: center;
  justify-content: space-between;
  padding: 80px 10%;
  background-color: var(--color-bg-secondary);
  transition: background-color 0.3s ease;
}

.content {
  max-width: 50%;
}

h2 {
  font-size: 4.5rem;
  font-weight: 800;
  color: var(--color-text-secondary);
  margin: 0 0 20px 0;
  line-height: 1.1;
  transition: color 0.3s ease;
}

.highlight {
  color: var(--color-primary);
  transition: color 0.3s ease;
}

p {
  font-size: 1.25em;
  color: var(--color-text-tertiary);
  margin: 0;
  transition: color 0.3s ease;
}

.image-container {
  width: 80%;
  display: flex;
  justify-content: center;
}

.hero-image {
  width: 80%;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
}

.image-container::before {
  content: '';
  position: absolute;
  width: 420px;
  height: 420px;
  background-color: transparent;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    margin-top: 10vh;
  }

  .content {
    max-width: 100%;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 2.5rem;
  }

  .image-container {
    width: 100%;
  }

  .hero-image {
    width: 100%;
  }
}

</style>