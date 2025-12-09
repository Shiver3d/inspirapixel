<script>

</script>



<!-- hero -->
<template>
  <section class="hero-section">
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


<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10vh;
  padding: 10vh 8%;
  background-color: var(--color-bg-secondary);
  transition: 0.3s ease;
}

.content {
  max-width: 50%;
}

h2 {
  font-size: 4em;
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
  width: 100%;
  display: flex;
  justify-content: center;
}

.hero-image {
  width: 65%;
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
    padding: 5vh 5%;
    gap: 30px;
  }

  .content {
    max-width: 100%;
  }

  h2 {
    font-size: 3rem;
  }

  span {
    font-size: 4rem;
  }

  p {
    font-size: 1rem;
  }

  .hero-image {
    width: 90%;
  }
}

@media (max-width: 468px) {
  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1.1em;
  }
}

</style>