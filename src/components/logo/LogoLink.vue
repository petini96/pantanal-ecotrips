<template>
  <router-link :to="{ name: 'home' }" class="logo-container">
    <q-img :src="LogoImage" :ratio="1" class="logo-image" />
  </router-link>
</template>

<script setup lang="ts"> 
import LogoImage from '../../../public/pantanal_ecotrips_logo.png'
 
</script>
 <style scoped lang="scss">
.logo-container {
  display: flex;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 0 0 2px #fff;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.logo-container:hover {
  transform: scale(1.05);
  box-shadow: 0 0 5px #fff;
}

.logo-image {
  border-radius: 50%;
}

/* Para tablets e telas menores */
@media (max-width: 768px) {
  .logo-container {
    height: 70px;
    width: 70px;
  }
}

/* Para celulares */
@media (max-width: 480px) {
  .logo-container {
    /* ✨ Adicione esta linha para esconder o logo */
    display: none;
  }
}
</style>