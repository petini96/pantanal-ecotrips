<template>
  <section id="about-us-section" class="about" :class="`theme-${currentTheme}`">
    <div class="about__container">

      <!-- Top: carousel + story -->
      <div class="about__split">

        <!-- Image side -->
        <div
          class="about__media-col"
          v-intersection.once="onIntersectionLeft"
          :class="{ 'slide-in-left': isVisibleLeft }"
        >
          <div class="about__carousel-wrap">
            <q-carousel
              animated
              v-model="slide"
              infinite
              :autoplay="autoplay"
              arrows
              transition-prev="fade"
              transition-next="fade"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
              class="about__carousel bg-black"
            >
              <q-carousel-slide
                v-for="(img, index) in carouselImages"
                :key="index"
                :name="index"
                class="q-pa-none flex flex-center"
              >
                <q-img :src="img" fit="contain" class="full-height full-width" />
              </q-carousel-slide>
            </q-carousel>

            <!-- Years badge -->
            <div class="about__badge">
              <span class="about__badge-num">20+</span>
              <span class="about__badge-txt">Anos de<br>Experiência</span>
            </div>
          </div>
        </div>

        <!-- Story side -->
        <div
          class="about__story-col"
          v-intersection.once="onIntersectionRight"
          :class="{ 'slide-in-right': isVisibleRight }"
        >
          <span class="about__label">
            <span class="about__label-line" />
            {{ t('about_page_title') }}
          </span>

          <h2 class="about__title">{{ t('about_section_heading') }}</h2>

          <h3 class="about__sub-heading">
            <q-icon name="mdi-account-tie-outline" size="1.1rem" class="q-mr-xs" />
            {{ t('about_history_title') }}
          </h3>

          <ul class="about__history">
            <li>
              <q-icon name="mdi-check-circle" color="positive" size="1.1rem" class="q-mr-sm" />
              <span>{{ t('about_history_1') }}</span>
            </li>
            <li>
              <q-icon name="mdi-check-circle" color="positive" size="1.1rem" class="q-mr-sm" />
              <span>{{ t('about_history_2') }}</span>
            </li>
            <li>
              <q-icon name="mdi-check-circle" color="positive" size="1.1rem" class="q-mr-sm" />
              <span>{{ t('about_history_3') }}</span>
            </li>
          </ul>

          <a
            :href="WA_ME_LINK"
            target="_blank"
            rel="noopener noreferrer"
            class="about__cta"
            @click="trackWhatsappClick"
          >
            <q-icon name="mdi-whatsapp" size="1.2rem" />
            {{ t('about_us_cta') }}
          </a>
        </div>
      </div>

      <!-- Bottom: feature cards -->
      <div
        class="about__cards"
        v-intersection.once="onIntersectionBottom"
      >
        <div
          class="about__card"
          :class="{ 'fade-up': isVisibleBottom }"
          style="--delay:0.1s"
        >
          <div class="about__card-icon">
            <q-icon name="mdi-map-marker-path" size="2rem" />
          </div>
          <h3 class="about__card-title">{{ t('about_card1_title') }}</h3>
          <p class="about__card-desc">{{ t('about_card1_desc') }}</p>
        </div>

        <div
          class="about__card"
          :class="{ 'fade-up': isVisibleBottom }"
          style="--delay:0.22s"
        >
          <div class="about__card-icon">
            <q-icon name="mdi-earth" size="2rem" />
          </div>
          <h3 class="about__card-title">{{ t('about_card2_title') }}</h3>
          <p class="about__card-desc">{{ t('about_card2_desc') }}</p>
        </div>

        <div
          class="about__card"
          :class="{ 'fade-up': isVisibleBottom }"
          style="--delay:0.34s"
        >
          <div class="about__card-icon">
            <q-icon name="mdi-leaf-circle-outline" size="2rem" />
          </div>
          <h3 class="about__card-title">{{ t('about_card3_title') }}</h3>
          <p class="about__card-desc">{{ t('about_card3_desc') }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { useAnalytics } from 'src/components/composables/useAnalytics';
import { WA_ME_LINK } from 'src/config/contacts';

const { t } = useI18n();
const { trackEvent } = useAnalytics();
const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const carouselImages = computed(() => {
  const images: string[] = [];
  const baseUrl = 'https://minio-s3.pantanalecotrips.com.br/general-bucket/ronaldo';
  for (let i = 1; i <= 49; i++) images.push(`${baseUrl}/img${i}.jpg`);
  return images;
});

const isVisibleLeft = ref(false);
const isVisibleRight = ref(false);
const isVisibleBottom = ref(false);
const slide = ref(0);
const autoplay = ref(true);

const onIntersectionLeft = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) isVisibleLeft.value = true;
};

const onIntersectionRight = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) {
    isVisibleRight.value = true;
    trackEvent('view_section', {
      section_name: 'About Us (Landing Page)',
      section_content: 'Historia e Diferenciais',
    });
  }
};

const onIntersectionBottom = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) isVisibleBottom.value = true;
};

const trackWhatsappClick = () => {
  trackEvent('click_whatsapp', {
    local_clique: 'secao_sobre_nos_landing',
    tipo_botao: 'cta_institucional',
  });
};
</script>

<style scoped lang="scss">
@keyframes slideInLeft  { from { opacity:0; transform:translateX(-48px); } to { opacity:1; transform:translateX(0); } }
@keyframes slideInRight { from { opacity:0; transform:translateX(48px);  } to { opacity:1; transform:translateX(0); } }
@keyframes fadeUp       { from { opacity:0; transform:translateY(32px);  } to { opacity:1; transform:translateY(0); } }

/* ── Section ── */
.about {
  background: #ffffff;
  padding: 96px 0;
  overflow: hidden;

  &.theme-dark {
    background: #0e1c13;
  }
}

.about__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) { padding: 0 24px; }
}

/* ── Split layout ── */
.about__split {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 72px;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 48px;
    margin-bottom: 56px;
  }
}

/* ── Carousel ── */
.about__media-col,
.about__story-col {
  opacity: 0;
}

.slide-in-left  { animation: slideInLeft  0.8s cubic-bezier(0.25,0.8,0.25,1) forwards; }
.slide-in-right { animation: slideInRight 0.8s cubic-bezier(0.25,0.8,0.25,1) forwards; }

.about__carousel-wrap {
  position: relative;
  border-radius: 24px;
  overflow: visible;
}

.about__carousel {
  border-radius: 24px;
  height: 480px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.14);
  border: 4px solid #ffffff;

  .theme-dark & { border-color: rgba(255,255,255,0.1); }

  @media (max-width: 960px) { height: 360px; }
  @media (max-width: 540px) { height: 280px; }
}

/* Badge */
.about__badge {
  position: absolute;
  bottom: -16px;
  right: -16px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: var(--q-primary);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  box-shadow: 0 10px 28px rgba(0,0,0,0.22);
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover { transform: translateY(-4px) scale(1.06); }

  @media (max-width: 540px) {
    width: 78px; height: 78px;
    bottom: -10px; right: -6px;
  }
}

.about__badge-num {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
}

.about__badge-txt {
  font-size: 0.58rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  line-height: 1.3;
  padding: 0 6px;
}

/* ── Story ── */
.about__label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #2e8b57;
  margin-bottom: 20px;

  .theme-dark & { color: #6fcf97; }
}

.about__label-line {
  display: inline-block;
  width: 28px;
  height: 1.5px;
  background: currentColor;
  border-radius: 1px;
}

.about__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
  line-height: 1.1;
  color: #0d2614;
  margin: 0 0 24px;

  .theme-dark & { color: #ffffff; }
}

.about__sub-heading {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #2e8b57;
  margin: 0 0 16px;
  display: flex;
  align-items: center;

  .theme-dark & { color: #6fcf97; }
}

/* History list */
.about__history {
  list-style: none;
  padding: 0;
  margin: 0 0 36px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  li {
    display: flex;
    align-items: flex-start;
    font-size: 0.97rem;
    line-height: 1.6;
    color: #3a4e3a;

    .theme-dark & { color: rgba(255,255,255,0.78); }

    span { flex: 1; }
  }
}

/* CTA */
.about__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: #2e8b57;
  color: #ffffff;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  box-shadow: 0 8px 28px rgba(46,139,87,0.32);
  transition: background 0.22s, transform 0.22s, box-shadow 0.22s;

  &:hover {
    background: #247a4c;
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(46,139,87,0.42);
  }
}

/* ── Feature cards ── */
.about__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

.about__card {
  padding: 40px 32px;
  background: #f8fbf8;
  border: 1px solid rgba(0,0,0,0.06);
  opacity: 0;
  transition: background 0.3s, border-color 0.3s, transform 0.3s;

  &:hover {
    background: #f0f7f0;
    border-color: rgba(46,139,87,0.2);
    transform: translateY(-4px);

    .about__card-icon { color: #2e8b57; transform: scale(1.08); }
  }

  .theme-dark & {
    background: rgba(255,255,255,0.03);
    border-color: rgba(255,255,255,0.07);

    &:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(111,207,151,0.25);
    }
  }

  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 32px 24px;
  }
}

.fade-up { animation: fadeUp 0.65s cubic-bezier(0.25,0.46,0.45,0.94) both; animation-delay: var(--delay, 0s); }

.about__card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(46,139,87,0.1);
  color: rgba(46,139,87,0.85);
  margin-bottom: 20px;
  transition: color 0.3s, transform 0.3s;

  .theme-dark & {
    background: rgba(111,207,151,0.1);
    color: rgba(111,207,151,0.85);
  }
}

.about__card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 1.3;
  color: #0d2614;
  margin: 0 0 10px;

  .theme-dark & { color: #ffffff; }
}

.about__card-desc {
  font-size: 0.88rem;
  line-height: 1.7;
  color: rgba(0,0,0,0.52);
  margin: 0;

  .theme-dark & { color: rgba(255,255,255,0.5); }
}

@media (max-width: 768px) {
  .about { padding: 72px 0; }
}
</style>
