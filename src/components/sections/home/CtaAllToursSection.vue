<template>
  <div class="all-tours-cta-section text-white">
    <div class="cta-overlay"></div>
    <div class="container text-center relative-position">
      
      <h2 class="text-h3 text-weight-bold q-mb-md">
        {{ t('all_tours_cta_title') }}
      </h2>

      <p class="text-h6 text-weight-regular text-grey-3 q-mb-xl" style="max-width: 650px; margin-left: auto; margin-right: auto; line-height: 1.6;">
        {{ t('all_tours_cta_subtitle') }}
      </p>

      <div class="cta-buttons-group">
        <q-btn
          :to="{ name: 'allTours', params: { lang: locale } }"
          color="primary"
          text-color="white"
          size="lg"
          unelevated
          rounded
          icon-right="o_explore"
          :label="t('all_tours_cta_button')"
          class="q-px-xl q-py-md"
        />
        
        <q-btn
          :to="{ name: 'createItinerary', params: { lang: locale } }"
          color="white"
          text-color="primary"
          size="lg"
          unelevated
          rounded
          icon-right="o_add_road"
          :label="t('all_tours_cta_button_secondary')"
          class="q-px-xl q-py-md"
        />
      </div>
      
      <div classt="q-mt-md text-grey-4">
        {{ t('all_tours_cta_subtitle_secondary') }}
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

// Necessário para as traduções (t) e para o link do botão (locale)
const { t, locale } = useI18n();
</script>

<style scoped lang="scss">
/* Use as variáveis de cor do seu tema. 
  Estou assumindo que 'primary' é o verde escuro dos seus botões.
*/
:root {
  --primary-color: #266D4D; /* Verde escuro dos botões */
  --bg-color-2: #f8fcf7;    /* Cor de fundo clara */
  --border-color: #e0e0e0;
}

.all-tours-cta-section {
  position: relative;
  min-height: 70vh; /* Altura suficiente para ser impactante */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 16px;
  
  /* *** A MÁGICA ESTÁ AQUI ***
    Substitua pela URL de uma imagem de fundo de alta qualidade.
    Pode ser uma paisagem do Pantanal, Bonito, etc.
  */
  background-image: url('https://images.squarespace-cdn.com/content/v1/628cdf23e74da0654141fc99/2a204630-8124-4741-9766-5496ec3f7dae/%40Alexandre.Socci_Bonito2024-1220.jpg&quot');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Efeito parallax moderno */
  
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.cta-overlay {
  /* Este overlay garante que o texto branco seja legível */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Um gradiente sutil é mais moderno que uma cor sólida */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.45) 100%);
  z-index: 1;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 16px;
  position: relative; /* Garante que o conteúdo fique acima do overlay */
  z-index: 2;
}

.cta-buttons-group {
  display: flex;
  flex-wrap: wrap; /* Permite que os botões quebrem a linha em telas pequenas */
  justify-content: center;
  gap: 20px; /* Espaçamento moderno entre os botões */
  margin-bottom: 24px;
}

/* Ajustes para o tema escuro */
.theme-dark .all-tours-cta-section {
  border-color: #333;
}

.theme-dark .cta-overlay {
  background: linear-gradient(0deg, rgba(10, 10, 10, 0.75) 0%, rgba(10, 10, 10, 0.6) 100%);
}
</style>