<template>
  <div
    class="content-section"
    v-intersection.once="onIntersection"
  >
    <div class="container text-center q-px-md" :class="{ 'is-visible': isVisible }">
      <div class="animated-item" style="--animation-delay: 0.2s;">
        <h2 class="section-title">{{ t('credibility_title') }}</h2>
        <p class="text-subtitle1 text-grey-7 q-mb-xl">{{ t('credibility_subtitle') }}</p>
      </div>
      <div
        class="row items-center justify-center q-col-gutter-xl animated-item"
        style="--animation-delay: 0.4s;"
      >
        <div class="col-xs-12 col-sm-4 credibility-logo">
          <q-img src="~assets/images/logo_cadastur.png" alt="Logo Cadastur" width="200px" />
        </div>
        <!-- <div class="col-xs-12 col-sm-4 credibility-logo">
          <q-img src="~assets/images/logo_fodors.png" alt="Logo Fodor's Travel" width="180px" />
        </div> -->
        <div class="col-xs-12 col-sm-4 credibility-logo">
          <q-img src="~assets/images/logo_petitfute.png" alt="Logo Petit Futé" width="220px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Lógica de animação
const isVisible = ref(false);
const onIntersection = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) {
    isVisible.value = true;
  }
};
</script>

<style scoped lang="scss">
/* AJUSTE: Animações de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-item {
  opacity: 0;
}

.container.is-visible .animated-item {
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: var(--animation-delay, 0s);
}

/* AJUSTE: A seção agora ocupa 100vh e centraliza o conteúdo */
.content-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff; // Fundo branco para um visual clean
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: #2c3e50;
}

.credibility-logo {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}

.credibility-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05); // Leve zoom no hover
}

// Media query para telas menores, ajustando o título
@media (max-width: $breakpoint-sm-max) {
  .section-title {
    font-size: 2.2rem;
  }
}
</style>