<template>
  <div
    class="content-section q-py-xl"
    v-intersection.once="onIntersection"
  >
    <div class="container text-center q-px-md q-px-lg-xl" :class="{ 'is-visible': isVisible }">
      
      <h2
        class="section-title animated-item"
        style="--animation-delay: 0.2s;"
      >
        {{ t('why_us_title') }}
      </h2>

      <div class="row q-mt-xl justify-center q-col-gutter-lg">

        <div
          class="col-12 col-sm-6 col-md-3 animated-item"
          style="--animation-delay: 0.4s;"
        >
          <div class="feature-card">
            <q-icon name="mdi-map-marker-path" size="4rem" class="feature-icon" />
            <h5 class="q-mt-md q-mb-sm feature-title">{{ t('why_us_item1_title') }}</h5>
            <p class="feature-description">{{ t('why_us_item1_desc') }}</p>
          </div>
        </div>

        <div
          class="col-12 col-sm-6 col-md-3 animated-item"
          style="--animation-delay: 0.6s;"
        >
          <div class="feature-card">
            <q-icon name="mdi-star-check-outline" size="4rem" class="feature-icon" />
            <h5 class="q-mt-md q-mb-sm feature-title">{{ t('why_us_item2_title') }}</h5>
            <p class="feature-description">{{ t('why_us_item2_desc') }}</p>
          </div>
        </div>

        <div
          class="col-12 col-sm-6 col-md-3 animated-item"
          style="--animation-delay: 0.8s;"
        >
          <div class="feature-card">
            <q-icon name="mdi-translate" size="4rem" class="feature-icon" />
            <h5 class="q-mt-md q-mb-sm feature-title">{{ t('why_us_item3_title') }}</h5>
            <p class="feature-description">{{ t('why_us_item3_desc') }}</p>
          </div>
        </div>

        <div
          class="col-12 col-sm-6 col-md-3 animated-item"
          style="--animation-delay: 1.0s;"
        >
          <div class="feature-card">
            <q-icon name="mdi-lifebuoy" size="4rem" class="feature-icon" />
            <h5 class="q-mt-md q-mb-sm feature-title">{{ t('why_us_item4_title') }}</h5>
            <p class="feature-description">{{ t('why_us_item4_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const isVisible = ref(false);

const onIntersection = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) {
    isVisible.value = true;
  }
};
</script>

<style lang="scss" scoped>
/* --- Animações --- */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.animated-item { opacity: 0; }
.container.is-visible .animated-item {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: var(--animation-delay, 0s);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* =========================================================================
   ESTILOS COM DARK MODE ANINHADO (Técnica "Selector Nesting")
   Isso garante que o Dark Mode funcione mesmo com CSS Scoped
   ========================================================================= */

/* 1. SEÇÃO PRINCIPAL */
.content-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s ease, color 0.4s ease;

  /* --- MODO LIGHT (Padrão) --- */
  background-color: var(--bg-div-primary); /* Off-white esverdeado */
  color: #1D2B24;

  /* --- MODO DARK (Override) --- */
  :global(body.body--dark) & {
    background-color: #050906 !important; /* Preto Floresta Profundo */
    background-image: radial-gradient(circle at 50% 0%, #0f1a13 0%, #050906 60%);
    color: #ECF0F1 !important;
  }
}

/* 2. TÍTULO */
.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  /* Light */
  color: var(--text-primary-color, #1a2e29);

  /* Dark */
  :global(body.body--dark) & {
    color: #FFFFFF !important;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
  }
}

/* 3. CARD */
.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 2.5rem 1.5rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  /* Light */
  background-color: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.04);
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);

  /* Dark */
  :global(body.body--dark) & {
    background-color: #101612 !important; /* Cinza Escuro Esverdeado */
    border: 1px solid #1F2E25 !important;
    box-shadow: none !important;
  }

  /* HOVER EFFECTS */
  &:hover {
    transform: translateY(-10px);
    
    /* Light Hover */
    box-shadow: 0 20px 40px rgba(46, 91, 62, 0.15);
    border-color: transparent;

    /* Dark Hover */
    :global(body.body--dark) & {
      background-color: #151C17 !important;
      border-color: #4DB6AC !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7) !important;
    }
  }
}

/* 4. ÍCONES */
.feature-icon {
  margin-bottom: 1.5rem;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* Light */
  color: #2E5B3E;

  /* Dark */
  :global(body.body--dark) & {
    color: #4DB6AC !important; /* Verde Neon Suave */
  }
}

.feature-card:hover .feature-icon {
  transform: scale(1.15) rotate(5deg);
  
  /* Dark Hover Glow */
  :global(body.body--dark) & {
    color: #64FFDA !important;
    text-shadow: 0 0 15px rgba(100, 255, 218, 0.4);
  }
}

/* 5. TEXTOS DO CARD */
.feature-title {
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.8rem;
  
  /* Light */
  color: #18241E;

  /* Dark */
  :global(body.body--dark) & {
    color: #E0E0E0 !important;
  }
}

.feature-description {
  font-size: 0.95rem;
  line-height: 1.6;
  
  /* Light */
  color: #546E63;

  /* Dark */
  :global(body.body--dark) & {
    color: #9E9E9E !important;
  }
}

/* --- RESPONSIVIDADE --- */
@media (max-width: 1023px) {
  .section-title {
    font-size: 2rem;
  }
  
  .content-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

@media (max-width: 599px) {
  .feature-card {
    padding: 2rem 1rem;
  }
  
  :deep(.q-icon) {
    font-size: 3.5rem !important; 
  }
}
</style>