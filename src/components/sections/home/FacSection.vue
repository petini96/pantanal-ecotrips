<template>
  <div
    id="faq-section"
    class="q-py-xl content-section"
    v-intersection.once="onIntersection"
  >
    <div class="container q-px-md" :class="{ 'is-visible': isVisible }">
      <div class="text-center q-mb-xl animated-item" style="--animation-delay: 0.2s;">
        <h2 class="section-title">{{ t('faq_title') }}</h2>
      </div>
      <div class="faq-list-container animated-item" style="--animation-delay: 0.4s;">
        <q-list class="faq-list">
          <q-expansion-item
            v-for="faq in faqItems"
            :key="faq.question"
            group="faqGroup"
            :icon="faq.icon"
            :label="t(faq.question)"
            header-class="faq-question"
            class="faq-item"
            flat
          >
            <q-card class="faq-card-answer">
              <q-card-section class="faq-answer">
                {{ t(faq.answer) }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
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

const faqItems = ref([
    { icon: 'mdi-calendar-check', question: 'faq_q1', answer: 'faq_a1' },
    { icon: 'mdi-shield-check-outline', question: 'faq_q2', answer: 'faq_a2' },
    { icon: 'mdi-airplane', question: 'faq_q3', answer: 'faq_a3' },
    { icon: 'mdi-credit-card-outline', question: 'faq_q4', answer: 'faq_a4' },
    { icon: 'mdi-cogs', question: 'faq_q5', answer: 'faq_a5' }
]);

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

.content-section {
  background-color: var(--bg-primary-color);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary-color, #1a2e29);
}

.faq-list-container {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.faq-list {
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--page-bg-color);
  box-shadow: 0 4px 15px rgba(44, 62, 80, 0.05);
}

.faq-item {
  border-bottom: 1px solid #eef2f7;

  &:last-child {
    border-bottom: none;
  }
}

.faq-question {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary-color);
  padding: 1.25rem;

  &.q-item--active {
    color: var(--primary-color);
  }
}

.faq-card-answer {
  box-shadow: none;
  border-radius: 0;
}

.faq-answer {
  background-color: var(--bg-primary-color);
  color: var(--text-secondary-color);
  line-height: 1.7;
  padding: 0 1.25rem 1.25rem 3.5rem;
  font-size: 1rem;
}

@media (max-width: $breakpoint-sm-max) {
  .section-title {
    font-size: 2.2rem;
  }
  .faq-question {
    font-size: 1rem;
    padding: 1rem;
  }
  .faq-answer {
    padding: 0 1rem 1rem 3rem;
  }
}
</style>