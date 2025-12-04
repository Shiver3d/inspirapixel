<script setup>
import { Icon } from "@iconify/vue";
</script>

<!-- Footer em html -->
<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="contact-info">
        <h5>Contato</h5>
        <p><a href="mailto:contato@inspirolens.com">contato@inspirolens.com</a></p>
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
      <a href="#" class="social-icon"><Icon icon="entypo-social:facebook" width="30" height="30" /></a>
      <a href="#" class="social-icon"><Icon icon="entypo-social:linkedin" width="30" height="30" /></a>
      <a href="#" class="social-icon"><Icon icon="entypo-social:twitter" width="30" height="30" /></a>
      <a href="#" class="social-icon"><Icon icon="entypo-social:instagram" width="30" height="30" /></a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-section {
  background-color: var(--color-bg-primary);
  padding: 50px 10%;
  border-top: 1px solid var(--color-border);
  text-align: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

a {
  text-decoration: none;
  color: var(--color-text-tertiary);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 30px;
}

.contact-info, .about-info, .newsletter-form {
  flex-basis: 30%;
}

h5 {
  font-size: 1.2em;
  font-weight: bold;
  color: var(--color-text-secondary);
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

p {
  font-size: 1em;
  color: var(--color-text-tertiary);
  margin: 5px 0;
  cursor: pointer;
  transition: color 0.3s ease;
}

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
  border: 1px solid var(--color-input-border);
  background-color: var(--color-input-bg);
  border-radius: 5px;
  box-sizing: border-box;
  color: var(--color-text-primary);
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.email-input::placeholder {
  color: var(--color-text-tertiary);
}

.subscribe-button {
  background-color: var(--color-primary);
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.subscribe-button:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
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
  width: 50px;
  height: 50px;
  background-color: var(--color-text-secondary);
  color: var(--color-bg-primary);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2em;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.social-icon:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-3px);
}
</style>