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
  padding: 80px 10%; /* Ajuste o padding conforme necessário */
  background-color: #f7f7f7; /* Fundo claro para contrastar com o texto */
}

.content {
  max-width: 50%;
}

h2 {
  font-size: 4em; /* Tamanho grande para o título */
  font-weight: 800; /* Negrito */
  color: #333;
  margin: 0 0 20px 0;
  line-height: 1.1;
}

.highlight {
  color: #e54d7d; /* Cor rosa vibrante */
}


p {
  font-size: 1.25em;
  color: #666;
  margin: 0;
}

.image-container {
  width: 45%;
  display: flex;
  justify-content: center;
}

.hero-image {
  width: 100%;
  max-width: 400px; /* Limite o tamanho da imagem */
  height: auto;
  border-radius: 20px; /* Borda arredondada conforme a imagem */
  object-fit: cover;
}

/* Estilo para a borda arredondada da imagem que é característica no original */
.image-container::before {
  content: '';
  position: absolute;
  width: 420px; /* Um pouco maior que a imagem */
  height: 420px;
  background-color: transparent;
  border-radius: 50%;
  /* Outros ajustes de posição e sombra podem ser necessários */
}
</style>