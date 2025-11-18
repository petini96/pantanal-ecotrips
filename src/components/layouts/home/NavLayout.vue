<template>
  <nav class="main-nav">
    <LogoLink />

    <q-btn flat round dense
      :href="'https://www.tripadvisor.com.br/Attraction_Review-g303349-d33955815-Reviews-Pantanal_Ecotrips-Bonito_State_of_Mato_Grosso_do_Sul.html'"
      target="_blank" rel="noopener noreferrer" aria-label="Veja nossas avaliações no TripAdvisor">
      <q-avatar size="32px">
        <img src="/white-tripadvisor-logo.png" alt="TripAdvisor">
      </q-avatar>
    </q-btn>
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
  justify-content: space-between;
  /* Empurra os itens para as extremidades */
  align-items: center;
  /* Alinha verticalmente no centro */
  padding: 16px 30px;
  /* Espaçamento interno (topo/baixo e lados) */
  width: 100%;
  position: absolute;
  /* Mantém a nav sobre a imagem de fundo */
  top: 0;
  left: 0;
  z-index: 2000;
}
</style>