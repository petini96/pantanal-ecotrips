<template>
  <footer class="home-footer bg-gradient-primary text-center q-pa-lg">
    <p class="footer-text q-ma-none">
      © {{ fullYear }} Pantanal Ecotrips. Todos os direitos reservados.
    </p>
  </footer>
</template>

<script setup lang="ts">

const fullYear = new Date().getFullYear()

</script>

<style scoped>

.home-footer {
  color: white;
}

.footer-text {
  color: rgba(255, 255, 255, 0.8);
}
</style>
