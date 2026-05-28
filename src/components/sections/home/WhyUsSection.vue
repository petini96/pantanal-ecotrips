<template>
  <section class="why-us" v-intersection.once="onIntersect" :class="{ 'is-visible': visible }">
    <!-- Background texture dots -->
    <div class="why-us__noise" />

    <div class="why-us__container">
      <!-- Header -->
      <div class="why-us__header animated-el" style="--d: 0.1s">
        <span class="why-us__label">
          <span class="why-us__label-line" />
          {{ t('guide_highlight_eyebrow').split(' ')[0] }}
        </span>
        <h2 class="why-us__title">{{ t('why_us_title') }}</h2>
      </div>

      <!-- Feature grid -->
      <div class="why-us__grid">
        <div
          v-for="(item, i) in features"
          :key="i"
          class="why-us__card animated-el"
          :style="`--d: ${0.2 + i * 0.12}s`"
        >
          <span class="why-us__card-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="why-us__card-icon">
            <q-icon :name="item.icon" size="2rem" />
          </div>
          <h3 class="why-us__card-title">{{ item.title }}</h3>
          <p class="why-us__card-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const visible = ref(false);
const onIntersect = (e: IntersectionObserverEntry) => { if (e.isIntersecting) visible.value = true; };

const features = computed(() => [
  { icon: 'mdi-map-marker-path',    title: t('why_us_item1_title'), desc: t('why_us_item1_desc') },
  { icon: 'mdi-star-check-outline', title: t('why_us_item2_title'), desc: t('why_us_item2_desc') },
  { icon: 'mdi-translate',          title: t('why_us_item3_title'), desc: t('why_us_item3_desc') },
  { icon: 'mdi-lifebuoy',           title: t('why_us_item4_title'), desc: t('why_us_item4_desc') },
]);
</script>

<style scoped lang="scss">
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
}

.why-us {
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  background: linear-gradient(158deg, #0c2017 0%, #0f2a1c 50%, #091810 100%);

  :global(body.body--dark) & {
    background: linear-gradient(158deg, #070f0b 0%, #0a1a11 50%, #060d09 100%);
  }
}

/* Subtle dot texture */
.why-us__noise {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
}

/* ── Container ── */
.why-us__container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;
}

/* ── Header ── */
.why-us__header {
  margin-bottom: 64px;
  text-align: center;
}

.why-us__label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #6fcf97;
  margin-bottom: 16px;
}

.why-us__label-line {
  display: inline-block;
  width: 32px;
  height: 1.5px;
  background: #6fcf97;
  border-radius: 1px;
}

.why-us__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: clamp(2rem, 3.5vw, 3rem);
  line-height: 1.1;
  color: #ffffff;
  margin: 0;
}

/* ── Grid ── */
.why-us__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
}

/* ── Card ── */
.why-us__card {
  position: relative;
  padding: 44px 36px 44px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.07);
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  overflow: hidden;

  &:hover {
    background: rgba(255,255,255,0.065);
    border-color: rgba(111,207,151,0.25);
    transform: translateY(-4px);

    .why-us__card-num {
      color: rgba(111,207,151,0.08);
    }
    .why-us__card-icon {
      color: #6fcf97;
      transform: scale(1.08);
    }
  }
}

.why-us__card-num {
  position: absolute;
  top: 16px;
  right: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 4.5rem;
  line-height: 1;
  color: rgba(255,255,255,0.04);
  transition: color 0.3s ease;
  user-select: none;
  letter-spacing: -2px;
}

.why-us__card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(111,207,151,0.1);
  color: rgba(111,207,151,0.85);
  margin-bottom: 24px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.why-us__card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.08rem;
  line-height: 1.3;
  color: #ffffff;
  margin: 0 0 12px;
}

.why-us__card-desc {
  font-size: 0.88rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.52);
  margin: 0;
}

/* ── Animations ── */
.animated-el { opacity: 0; }

.why-us.is-visible .animated-el {
  animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: var(--d, 0s);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .why-us { padding: 72px 0; }
  .why-us__container { padding: 0 24px; }
  .why-us__card { padding: 32px 24px; }
  .why-us__card-num { font-size: 3.5rem; }
  .why-us__header { margin-bottom: 48px; }
}
</style>
