<template>
  <div class="cta-wrap">
    <!-- Diagonal clip panel (text side) -->
    <div class="cta-panel">
      <div class="cta-panel__inner" v-intersection.once="onIntersect" :class="{ 'is-visible': visible }">
        <span class="cta-panel__label animated-el" style="--d:0.1s">
          <span class="cta-panel__label-line" />
          Pantanal EcoTrips
        </span>

        <h2 class="cta-panel__title animated-el" style="--d:0.22s">
          {{ t('all_tours_cta_title') }}
        </h2>

        <p class="cta-panel__sub animated-el" style="--d:0.35s">
          {{ t('all_tours_cta_subtitle') }}
        </p>

        <div class="cta-panel__actions animated-el" style="--d:0.48s">
          <q-btn
            :to="{
              name: 'allTours',
              params: {
                lang: locale,
                type: locale === 'pt' ? 'passeios' : (locale === 'es' ? 'excursiones' : 'all-tours')
              }
            }"
            unelevated
            rounded
            no-caps
            size="lg"
            icon-right="o_explore"
            :label="t('all_tours_cta_button')"
            class="cta-btn cta-btn--primary"
          />

          <q-btn
            unelevated
            rounded
            no-caps
            size="lg"
            icon-right="o_add_road"
            :label="t('all_tours_cta_button_secondary')"
            class="cta-btn cta-btn--ghost"
            @click="handleItineraryClick"
          />
        </div>

        <p class="cta-panel__hint animated-el" style="--d:0.58s">
          {{ t('all_tours_cta_subtitle_secondary') }}
        </p>
      </div>
    </div>

    <!-- Image side -->
    <div class="cta-image" :style="bgStyle" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import { scroll } from 'quasar';

const { t, locale } = useI18n();
const router = useRouter();
const route  = useRoute();
const { getScrollTarget, setVerticalScrollPosition } = scroll;

const visible = ref(false);
const onIntersect = (e: IntersectionObserverEntry) => { if (e.isIntersecting) visible.value = true; };

const bgStyle = {
  backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/628cdf23e74da0654141fc99/2a204630-8124-4741-9766-5496ec3f7dae/%40Alexandre.Socci_Bonito2024-1220.jpg"')`,
};

const handleItineraryClick = async (ev: Event) => {
  ev.preventDefault();
  if (route.name !== 'home') {
    await router.push({ name: 'home', params: { lang: locale.value } });
    setTimeout(scrollToContact, 350);
  } else {
    scrollToContact();
  }
};

const scrollToContact = () => {
  const el = document.getElementById('contact-section');
  if (!el) return;
  const target = getScrollTarget(el);
  setVerticalScrollPosition(target, el.offsetTop - 80, 500);
};
</script>

<style scoped lang="scss">
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Wrapper: full-width split ── */
.cta-wrap {
  position: relative;
  min-height: 560px;
  display: flex;
  overflow: hidden;
}

/* ── Image half ── */
.cta-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

/* ── Green panel (diagonal cut) ── */
.cta-panel {
  position: relative;
  z-index: 1;
  width: 58%;
  min-height: 560px;
  background: linear-gradient(155deg, #0b2016 0%, #16472e 60%, #1f6040 100%);

  /* Diagonal edge on the right */
  clip-path: polygon(0 0, 100% 0, 82% 100%, 0 100%);

  @media (max-width: 900px) {
    width: 100%;
    clip-path: none;
    background: linear-gradient(160deg, rgba(10,26,18,0.96) 0%, rgba(22,71,46,0.94) 100%);
  }
}

.cta-panel__inner {
  padding: 80px 72px 80px 56px;
  max-width: 580px;

  @media (max-width: 900px) {
    padding: 72px 28px;
    max-width: 100%;
  }
}

/* ── Label ── */
.cta-panel__label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(111, 207, 151, 0.9);
  margin-bottom: 20px;
}
.cta-panel__label-line {
  display: inline-block;
  width: 28px;
  height: 1.5px;
  background: #6fcf97;
  border-radius: 1px;
}

/* ── Title ── */
.cta-panel__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: clamp(1.9rem, 3.2vw, 3rem);
  line-height: 1.1;
  color: #ffffff;
  margin: 0 0 18px;
}

/* ── Subtitle ── */
.cta-panel__sub {
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.7);
  margin: 0 0 36px;
  max-width: 440px;
}

/* ── Actions ── */
.cta-panel__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 18px;
}

.cta-btn {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 700 !important;
  font-size: 0.9rem !important;
  letter-spacing: 0.3px;
  padding: 12px 32px !important;
  transition: transform 0.22s ease, box-shadow 0.22s ease !important;

  &:hover {
    transform: translateY(-2px) !important;
  }

  &--primary {
    background: #6fcf97 !important;
    color: #0b2016 !important;
    box-shadow: 0 8px 28px rgba(111,207,151,0.3) !important;

    &:hover {
      box-shadow: 0 12px 36px rgba(111,207,151,0.45) !important;
    }
  }

  &--ghost {
    background: transparent !important;
    color: #ffffff !important;
    border: 1.5px solid rgba(255,255,255,0.35) !important;
    box-shadow: none !important;

    &:hover {
      background: rgba(255,255,255,0.08) !important;
      border-color: rgba(255,255,255,0.6) !important;
    }
  }
}

/* ── Hint ── */
.cta-panel__hint {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
  margin: 0;
}

/* ── Animations ── */
.animated-el { opacity: 0; }
.is-visible .animated-el {
  animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: var(--d, 0s);
}

/* ── Dark mode ── */
:global(body.body--dark) .cta-panel {
  background: linear-gradient(155deg, #060f0a 0%, #0d3020 60%, #133d2a 100%);
}
</style>
