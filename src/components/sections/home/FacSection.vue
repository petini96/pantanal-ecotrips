<template>
  <section
    id="faq-section"
    class="faq"
    v-intersection.once="onIntersect"
    :class="{ 'is-visible': visible }"
  >
    <div class="faq__noise" />

    <div class="faq__inner">
      <!-- Header -->
      <div class="faq__head animated-el" style="--d:0.08s">
        <span class="faq__label">
          <span class="faq__label-line" />
          FAQ
        </span>
        <h2 class="faq__title">{{ t('faq_title') }}</h2>
      </div>

      <!-- Accordion -->
      <div class="faq__list animated-el" style="--d:0.22s">
        <div
          v-for="(item, i) in faqItems"
          :key="i"
          class="faq__item"
          :class="{ 'faq__item--open': openIndex === i }"
        >
          <button class="faq__question" @click="toggleItem(i)" :aria-expanded="openIndex === i">
            <q-icon :name="item.icon" class="faq__q-icon" size="1.2rem" />
            <span class="faq__q-text">{{ t(item.question) }}</span>
            <q-icon
              name="mdi-chevron-down"
              class="faq__chevron"
              :class="{ 'faq__chevron--open': openIndex === i }"
              size="1.2rem"
            />
          </button>

          <transition name="faq-expand">
            <div v-if="openIndex === i" class="faq__answer">
              <p class="faq__answer-text">{{ t(item.answer) }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const visible = ref(false);
const openIndex = ref<number | null>(null);

const onIntersect = (e: IntersectionObserverEntry) => {
  if (e.isIntersecting) visible.value = true;
};

const toggleItem = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i;
};

const faqItems = ref([
  { icon: 'mdi-calendar-check',        question: 'faq_q1', answer: 'faq_a1' },
  { icon: 'mdi-shield-check-outline',  question: 'faq_q2', answer: 'faq_a2' },
  { icon: 'mdi-airplane',              question: 'faq_q3', answer: 'faq_a3' },
  { icon: 'mdi-credit-card-outline',   question: 'faq_q4', answer: 'faq_a4' },
  { icon: 'mdi-cogs',                  question: 'faq_q5', answer: 'faq_a5' },
]);
</script>

<style scoped lang="scss">
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: max-height 0.36s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.28s ease;
  overflow: hidden;
  max-height: 600px;
}
.faq-expand-enter-from,
.faq-expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.faq {
  position: relative;
  overflow: hidden;
  background: linear-gradient(158deg, #0c2017 0%, #0f2a1c 50%, #091810 100%);
  padding: 96px 0;

  :global(body.body--dark) & {
    background: linear-gradient(158deg, #070f0b 0%, #0a1a11 50%, #060d09 100%);
  }
}

.faq__noise {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
}

.faq__inner {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Header */
.faq__head {
  margin-bottom: 56px;
}

.faq__label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(111,207,151,0.9);
  margin-bottom: 20px;
}

.faq__label-line {
  display: inline-block;
  width: 28px;
  height: 1.5px;
  background: #6fcf97;
  border-radius: 1px;
}

.faq__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: clamp(2rem, 3.5vw, 3rem);
  line-height: 1.1;
  color: #ffffff;
  margin: 0;
}

/* Accordion */
.faq__list {
  display: flex;
  flex-direction: column;
}

.faq__item {
  border-bottom: 1px solid rgba(255,255,255,0.07);

  &:first-child { border-top: 1px solid rgba(255,255,255,0.07); }

  &--open .faq__question {
    color: #6fcf97;
  }
}

.faq__question {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 0;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: rgba(255,255,255,0.85);
  transition: color 0.22s;

  &:hover { color: #ffffff; }
}

.faq__q-icon {
  flex-shrink: 0;
  color: rgba(111,207,151,0.7);
}

.faq__q-text {
  flex: 1;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.35;
}

.faq__chevron {
  flex-shrink: 0;
  color: rgba(255,255,255,0.4);
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), color 0.22s;

  &--open {
    transform: rotate(180deg);
    color: #6fcf97;
  }
}

.faq__answer {
  padding-bottom: 20px;
  padding-left: 36px;
}

.faq__answer-text {
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(255,255,255,0.56);
  margin: 0;
}

/* Animations */
.animated-el { opacity: 0; }
.faq.is-visible .animated-el {
  animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: var(--d, 0s);
}

@media (max-width: 768px) {
  .faq { padding: 72px 0; }
  .faq__inner { padding: 0 24px; }
  .faq__head { margin-bottom: 40px; }
  .faq__q-text { font-size: 0.97rem; }
  .faq__answer { padding-left: 0; }
}
</style>
