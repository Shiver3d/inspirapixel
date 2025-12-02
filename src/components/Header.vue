<script setup>
import { Icon } from "@iconify/vue";
</script>


<!-- header -->
<template>
  <header>
    <img src="../assets/logo.png" alt="Logo" />

    <nav>
      <ul>
        <li>
          <a href="">
            <Icon icon="material-symbols:search" width="24" height="24" />
          </a>
        </li>        
        <li>
          <a href=""
            ><Icon
              icon="material-symbols:person-outline"
              width="24"
              height="24"
          /></a>
        </li>
        <li><a href="#">Início</a></li>
        <li><a href="">Galeria</a></li>
        <li><a href="">Favoritos</a></li>

      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

a {
  text-decoration: none;
  color: #000;
}

li {
  font-weight: 500;
  font-size: 1rem;
}

</style>
