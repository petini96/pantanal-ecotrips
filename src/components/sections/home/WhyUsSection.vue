<template>
  <div
    class="q-py-xl content-section theme-light"
    v-intersection.once="onIntersection"
  >
    <div class="container text-center q-px-md" :class="{ 'is-visible': isVisible }">
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
            <q-icon name="mdi-map-marker-path" size="3.5rem" class="feature-icon" />
            <h5 class="q-mt-md q-mb-sm feature-title">{{ t('why_us_item1_title') }}</h5>
            <p class="feature-description">{{ t('why_us_item1_desc') }}</p>
          </div>
        </div>

        <div
          class="col-12 col-sm-6 col-md-3 animated-item"
          style="--animation-delay: 0.6s;"
        >
          <div class="feature-card">
            <q-icon name="mdi-star-check-outline" size="3.5rem" class="feature-icon" />
            <h5 class="q-mt-md q-mb-sm feature-title">{{ t('why_us_item2_title') }}</h5>
            <p class="feature-description">{{ t('why_us_item2_desc') }}</p>
          </div>
        </div>

        <div
          class="col-12 col-sm-6 col-md-3 animated-item"
          style="--animation-delay: 0.8s;"
        >
          <div class="feature-card">
            <q-icon name="mdi-translate" size="3.5rem" class="feature-icon" />
            <h5 class="q-mt-md q-mb-sm feature-title">{{ t('why_us_item3_title') }}</h5>
            <p class="feature-description">{{ t('why_us_item3_desc') }}</p>
          </div>
        </div>

        <div
          class="col-12 col-sm-6 col-md-3 animated-item"
          style="--animation-delay: 1.0s;"
        >
          <div class="feature-card">
            <q-icon name="mdi-lifebuoy" size="3.5rem" class="feature-icon" />
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

.theme-light {
  background-color: #ffffff;
}

/*
  AJUSTE: A seção agora ocupa a tela toda (100vh) e centraliza o conteúdo verticalmente.
*/
.content-section {
  min-height: 100vh;
  display: flex;
  align-items: center; // Centraliza o .container na vertical
  justify-content: center;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: #2c3e50;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f7f9fc;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(44, 62, 80, 0.1);
  }
}

.feature-icon {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.feature-title {
  font-weight: 600;
  font-size: 1.25rem;
  color: #2c3e50;
}

.feature-description {
  color: #596e83;
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
}

@media (max-width: $breakpoint-sm-max) {
  .section-title {
    font-size: 2.2rem;
  }
}
</style>