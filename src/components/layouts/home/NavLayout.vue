<template>
  <nav class="main-nav">
    <LogoLink />
    <PageControls />
  </nav>
</template>

<script setup lang="ts">
import PageControls from 'src/components/controls/PageControls.vue';
import LogoLink from 'src/components/logo/LogoLink.vue';
</script>

<style scoped lang="scss">
.main-nav {
  /* Layout Flexbox para o nav */
  display: flex;
  justify-content: space-between; /* Empurra os itens para as extremidades */
  align-items: center;          /* Alinha verticalmente no centro */
  padding: 16px 30px;           /* Espaçamento interno (topo/baixo e lados) */
  width: 100%;
  position: absolute; /* Mantém a nav sobre a imagem de fundo */
  top: 0;
  left: 0;
  z-index: 2000;
}
</style>