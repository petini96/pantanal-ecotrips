<template>
  <div class="all-tours-cta-section text-white q-my-xxl">
    <div class="cta-overlay"></div>
    <div class="container text-center relative-position">
      
      <h2 class="hero-title">
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
          class="hero-cta-button"
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
          class="hero-cta-button-white secondary-btn"
        />
      </div>
      
      <div class="q-mt-md text-grey-4">
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
/* Use as variáveis de cor do seu tema. */
:root {
  --primary-color: #266D4D; /* Verde escuro dos botões */
  --bg-color-2: #f8fcf7;    /* Cor de fundo clara */
  --border-color: #e0e0e0;
}

.all-tours-cta-section {
  position: relative;
  min-height: 70vh; 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 16px;
  
  /* Background Image */
  background-image: url('https://images.squarespace-cdn.com/content/v1/628cdf23e74da0654141fc99/2a204630-8124-4741-9766-5496ec3f7dae/%40Alexandre.Socci_Bonito2024-1220.jpg&quot');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
  
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.45) 100%);
  z-index: 1;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 16px;
  position: relative; 
  z-index: 2;
}

.cta-buttons-group {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: 20px; 
  margin-bottom: 24px;
}

/* --- ESTILOS VINDOS DO HERO SECTION --- */

/* Título Hero */
.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #FFFFFF !important; 
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.9);
}

/* Botão Estilo Hero */
.hero-cta-button {
    background-color: var(--secondary-color) !important;
    color: #FFFFFF !important;
    font-weight: 700;
    border-radius: 50px;
    padding: 12px 36px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-3px);
        filter: brightness(1.1);
    }
}

.hero-cta-button-white {
    background-color: var(--primary-color) !important;
    color: #FFFFFF !important;
    font-weight: 700;
    border-radius: 50px;
    padding: 12px 36px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-3px);
        filter: brightness(1.1);
    }
}

/* Ajuste específico para Dark Mode */
:global(body.body--dark) .hero-cta-button {
    box-shadow: 0 0 15px rgba(2, 123, 227, 0.6);
}

/* Ajuste específico para o botão secundário (branco) não ficar com sombra estranha no dark mode se necessário, 
   ou manter a consistência */
:global(body.body--dark) .hero-cta-button.secondary-btn {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}



@media (max-width: 768px) {
    .hero-title { 
        font-size: 2.5rem; 
    }

    /* Reduz o tamanho do botão APENAS no mobile, igual ao Hero */
    .hero-cta-button {
        font-size: 0.95rem !important; /* Reduz a fonte */
        padding: 10px 24px !important; /* Reduz o padding gordo do desktop */
        min-height: auto !important;   /* Remove a altura forçada do size="lg" */
        width: auto;                   /* Garante que não estique 100% se não quiser */
        max-width: 90%;                /* Segurança para telas muito pequenas */
    }
    
    .hero-cta-button-white {
        font-size: 0.45rem !important; /* Reduz a fonte */
        padding: 10px 24px !important; /* Reduz o padding gordo do desktop */
        min-height: auto !important;   /* Remove a altura forçada do size="lg" */
        width: auto;                   /* Garante que não estique 100% se não quiser */
        max-width: 90%;                /* Segurança para telas muito pequenas */
    }

    /* ==================================================================
       ADICIONE ESTE BLOCO AQUI PARA CORRIGIR O BOTÃO SECUNDÁRIO ESTOURADO
    ================================================================== */
    .hero-cta-button.secondary-btn {
        /* Permite que o botão cresça verticalmente para acomodar o texto */
        height: auto !important;
        padding: 16px 24px !important; /* Mais respiro vertical */
        
        /* Força o conteúdo interno (texto e ícone) a se organizar */
        :deep(.q-btn__content) {
            white-space: normal !important; /* Permite quebra de linha no texto */
            flex-direction: column; /* Coloca o ícone embaixo do texto */
            gap: 8px; /* Espacinho entre o texto e o ícone */
            line-height: 1.2; /* Melhora o espaçamento entre as linhas de texto */
        }

        /* Ajusta o ícone quando está em coluna */
        :deep(.q-icon) {
             margin-left: 0 !important; /* Remove a margem padrão lateral do icon-right */
        }
    }
    /* ================================================================== */
}

/* Ajustes para o tema escuro geral */
.theme-dark .all-tours-cta-section {
  border-color: #333;
}

.theme-dark .cta-overlay {
  background: linear-gradient(0deg, rgba(10, 10, 10, 0.75) 0%, rgba(10, 10, 10, 0.6) 100%);
}
</style>