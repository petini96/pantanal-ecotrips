<template>
  <router-link :to="{ name: 'home' }" class="logo-container">
    <q-img :src="LogoImage" :ratio="1" class="logo-image" />
  </router-link>
</template>

<script setup lang="ts"> 
import LogoImage from '/pantanal_ecotrips_logo.png'
 
</script>
 <style scoped lang="scss">
.logo-container {
  display: flex;
  height: 100px;
  width: 100px;
  box-shadow: 0 0 2px ;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.logo-container:hover {
  transform: scale(1.05);
  box-shadow: 0 0 5px ;
}

.logo-image {
}

@media (max-width: 768px) {
  .logo-container {
    height: 70px;
    width: 70px;
  }
}

@media (max-width: 480px) {
  .logo-container {
    display: none;
  }
}
</style>