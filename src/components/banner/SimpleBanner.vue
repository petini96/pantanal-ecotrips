<template>
  <section class="hero" :style="sectionStyle">
    <div class="hero__bg" :style="backgroundStyle" />
    <div class="hero__overlay" />

    <div class="hero__inner">
      <div class="hero__content">
        <div class="hero__eyebrow">
          <span class="hero__pulse" />
          Pantanal EcoTrips
        </div>

        <h1 class="hero__title">{{ hero_title }}</h1>
        <p class="hero__subtitle">{{ hero_subtitle }}</p>

        <button v-if="hero_cta" class="hero__btn" @click="scrollToTours">
          <span>{{ hero_cta }}</span>
          <span class="hero__btn-icon">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none"
                 stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </span>
        </button>
      </div>
    </div>

    <!-- Stats bar -->
    <div class="hero__stats">
      <div class="hero__stat">
        <span class="hero__stat-num">25+</span>
        <span class="hero__stat-lbl">Anos de Experiência</span>
      </div>
      <span class="hero__stat-sep" />
      <div class="hero__stat">
        <span class="hero__stat-num">500+</span>
        <span class="hero__stat-lbl">Aventuras Realizadas</span>
      </div>
      <span class="hero__stat-sep" />
      <div class="hero__stat">
        <span class="hero__stat-num">4</span>
        <span class="hero__stat-lbl">Destinos Únicos</span>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="hero__scroll-cue">
      <span class="hero__scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  hero_title?: string;
  hero_subtitle?: string;
  hero_cta?: string;
  hero_background: string;
  height?: string;
}>(), {
  hero_background: '',
  height: '100vh',
});

const scrollToTours = () =>
  document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.hero_background})`,
}));

const sectionStyle = computed(() => ({
  height: props.height,
  minHeight: props.height === '100vh' ? '620px' : 'auto',
}));
</script>

<style scoped lang="scss">
@keyframes kenBurns {
  from { transform: scale(1); }
  to   { transform: scale(1.07); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes scrollPulse {
  0%, 100% { height: 52px; opacity: 0.9; }
  50%       { height: 28px; opacity: 0.3; }
}
@keyframes pulseDot {
  0%, 100% { box-shadow: 0 0 0 4px rgba(111,207,151,0.2); }
  50%       { box-shadow: 0 0 0 8px rgba(111,207,151,0.05); }
}

/* ── Structure ── */
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  animation: kenBurns 20s ease-in-out alternate infinite;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    112deg,
    rgba(8, 24, 15, 0.88) 0%,
    rgba(8, 24, 15, 0.62) 55%,
    rgba(8, 24, 15, 0.25) 100%
  );
  z-index: 1;
}

/* ── Main content ── */
.hero__inner {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 56px;
  padding-bottom: 110px;
}

.hero__content { max-width: 660px; }

/* Eyebrow */
.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.65);
  margin-bottom: 22px;
  animation: fadeUp 0.7s 0.1s both;
}
.hero__pulse {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6fcf97;
  animation: pulseDot 2.8s ease-in-out infinite;
}

/* Title */
.hero__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: clamp(2.5rem, 4.8vw, 4.2rem);
  line-height: 1.07;
  color: #ffffff;
  margin: 0 0 22px;
  animation: fadeUp 0.7s 0.25s both;
}

/* Subtitle */
.hero__subtitle {
  font-size: clamp(1rem, 1.8vw, 1.18rem);
  line-height: 1.68;
  color: rgba(255,255,255,0.78);
  margin: 0 0 40px;
  max-width: 500px;
  animation: fadeUp 0.7s 0.4s both;
}

/* CTA */
.hero__btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 16px 42px;
  background: linear-gradient(135deg, #2e8b57 0%, #1a5c38 100%);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.4px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 36px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.12);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  animation: fadeUp 0.7s 0.55s both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 48px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.14);
  }
  &:active { transform: translateY(0); }
}
.hero__btn-icon {
  display: flex;
  align-items: center;
  transition: transform 0.22s ease;
  .hero__btn:hover & { transform: translateY(4px); }
}

/* ── Stats bar ── */
.hero__stats {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  background: rgba(6, 18, 11, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top: 1px solid rgba(255,255,255,0.1);
  animation: fadeUp 0.7s 0.7s both;
}
.hero__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 48px;
}
.hero__stat-num {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 1.9rem;
  line-height: 1;
  color: #6fcf97;
}
.hero__stat-lbl {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin-top: 4px;
}
.hero__stat-sep {
  width: 1px;
  height: 38px;
  background: rgba(255,255,255,0.18);
}

/* ── Scroll cue ── */
.hero__scroll-cue {
  position: absolute;
  bottom: 100px;
  right: 56px;
  z-index: 2;
  display: flex;
  align-items: flex-end;
}
.hero__scroll-line {
  display: block;
  width: 1.5px;
  background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.6));
  border-radius: 1px;
  animation: scrollPulse 2.2s ease-in-out infinite;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero__inner {
    padding: 0 28px;
    padding-bottom: 170px;
    align-items: flex-start;
    display: flex;
    align-items: flex-end;
  }
  .hero__stats { flex-wrap: wrap; gap: 4px; padding: 14px 16px; }
  .hero__stat { padding: 6px 22px; }
  .hero__stat-sep { display: none; }
  .hero__stat-num { font-size: 1.4rem; }
  .hero__scroll-cue { display: none; }
}

@media (max-width: 600px) {
  .hero__title { font-size: 2.2rem; }
  .hero__inner { padding: 0 20px; padding-bottom: 190px; }
}
</style>
