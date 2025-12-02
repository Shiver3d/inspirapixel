<script></script>

<!-- Footer em html -->
<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="contact-info">
        <h5>Contato</h5>
        <p>contato@inspirolens.com</p>
        <p>Central de ajuda</p>
        <p>Rio de Janeiro - Brasil</p>
      </div>

      <div class="about-info">
        <h5>Sobre</h5>
        <p>Políticas</p>
        <p>Políticas de privacidade</p>
        <p>Blog</p>
      </div>

      <div class="newsletter-form">
        <h5>Assine nossa newsletter</h5>
        <div class="form-group">
          <input type="email" placeholder="Digite seu email" class="email-input" />
          <button class="subscribe-button">Inscrever-se</button>
        </div>
      </div>
    </div>

    <div class="social-links">
      <a href="#" class="social-icon">F</a>
      <a href="#" class="social-icon">in</a>
      <a href="#" class="social-icon">T</a>
      <a href="#" class="social-icon">Ig</a>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background-color: #fff;
  padding: 40px 10%;
  border-top: 1px solid #eee;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 30px;
}

.contact-info, .about-info, .newsletter-form {
  flex-basis: 30%; /* Distribuição de espaço */
}

h5 {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

p {
  font-size: 1em;
  color: #666;
  margin: 5px 0;
  cursor: pointer;
}

/* Newsletter Styles */
.newsletter-form {
  text-align: right;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.email-input {
  width: 100%;
  max-width: 300px;
  padding: 15px 10px;
  margin-bottom: 10px;
  border: none;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-sizing: border-box;
}

.subscribe-button {
  background-color: #e54d7d; /* Cor rosa vibrante */
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  transition: background-color 0.3s;
}

.subscribe-button:hover {
  background-color: #c9436c;
}

/* Social Links Styles */
.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #333; /* Cor dos ícones no original é preta/escura */
  color: white;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2em;
}
</style>