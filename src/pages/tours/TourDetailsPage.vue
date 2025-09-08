<template>
  <q-page v-if="tour" :class="['tour-details-page', `theme-${currentTheme}`]">
    <div class="hero-container">
      <q-img :src="tour.image" class="hero-image" :ratio="16 / 9">
        <div class="hero-overlay"></div>
        <div class="hero-content text-center">
          <h1 class="hero-title">{{ t(`tour_${tourId}_title`) }}</h1>
          <p class="hero-subtitle">{{ t(`tour_${tourId}_type`) }}</p>
        </div>
      </q-img>
    </div>

    <div class="page-content q-pa-md q-gutter-y-xl">
      <q-card class="intro-card" flat bordered>
        <q-card-section>
          <div class="text-h5 q-mb-md">{{ t('tour_details_about_title') }}</div>
          <p class="text-body1">
            {{ t(`tour_${tourId}_desc`) }}
          </p>
        </q-card-section>
      </q-card>

      <div v-if="tour.itinerary" class="itinerary-section">
        <div class="text-h4 text-center q-mb-lg">{{ t('tour_details_itinerary_title') }}</div>
        <q-timeline color="primary">
          <q-timeline-entry
            v-for="day in tour.itinerary"
            :key="day.day"
            :title="`Dia ${day.day}: ${t(day.title)}`"
            :subtitle="t(day.subtitle)"
            :icon="day.icon"
            class="animated-timeline-entry"
          >
            <div class="text-body1">{{ t(day.description) }}</div>
          </q-timeline-entry>
        </q-timeline>
      </div>

      <div class="info-grid row q-col-gutter-md">
        <div class="col-12 col-md-6">
          <q-card class="info-card" flat bordered>
            <q-card-section>
              <q-icon name="check_circle" class="q-mr-sm" /><span>{{ t('tour_details_included_title') }}</span>
              <q-list separator>
                <q-item v-for="item in tour.included" :key="item">
                  <q-item-section>{{ t(item) }}</q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-card class="info-card" flat bordered>
            <q-card-section>
              <div class="text-h6">
                <q-icon name="cancel" class="q-mr-sm" /> <span>{{ t('tour_details_not_included_title') }}</span>
              </div>
              <q-list separator>
                <q-item v-for="item in tour.notIncluded" :key="item">
                  <q-item-section>{{ t(item) }}</q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <q-card class="packing-card" flat bordered>
        <q-card-section>
          <div class="text-h6">
            <q-icon name="backpack" class="q-mr-sm" /><span>{{ t('tour_details_packing_title') }}</span>
          </div>
          <p>{{ t('tour_details_packing_desc') }}</p>
        </q-card-section>
      </q-card>

      <div class="text-center q-mt-xl">
        <q-btn
          color="secondary"
          size="lg"
          :label="t('tour_details_cta_button')"
          icon="mdi-whatsapp"
          :href="`https://wa.me/5567999022073?text=${encodedWhatsAppMessage}`"
          target="_blank"
        />
      </div>
    </div>
  </q-page>
  <q-page v-else class="flex flex-center">
    <div class="text-center">
      <q-icon name="mdi-alert-circle-outline" size="4rem" color="warning" />
      <p class="text-h6 q-mt-md">{{ t('tour_not_found') }}</p>
      <q-btn to="/" :label="t('go_home')" color="primary" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useMeta } from 'quasar';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';

import image1 from 'src/assets/images/tours/tour_1.jpg';
import image3 from 'src/assets/images/tours/tour_3.jpg';

const route = useRoute();
const { t, locale } = useI18n();
const layoutConfigStore = useLayoutConfigStore();

const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const tourId = computed(() => route.params.id as string);

// This data would ideally come from a CMS or a dedicated data store
const toursData: Record<string, any> = {
  pantanal_jungle_lodge: {
    image: image1,
    itinerary: [
      { day: 1, title: 'tour_pjl_day1_title', subtitle: 'tour_pjl_day1_subtitle', icon: 'mdi-airplane-landing', description: 'tour_pjl_day1_desc' },
      { day: 2, title: 'tour_pjl_day2_title', subtitle: 'tour_pjl_day2_subtitle', icon: 'mdi-canoe', description: 'tour_pjl_day2_desc' },
      { day: 3, title: 'tour_pjl_day3_title', subtitle: 'tour_pjl_day3_subtitle', icon: 'mdi-jeep-wrangler', description: 'tour_pjl_day3_desc' },
      { day: 4, title: 'tour_pjl_day4_title', subtitle: 'tour_pjl_day4_subtitle', icon: 'mdi-horse-human-reach', description: 'tour_pjl_day4_desc' },
      { day: 5, title: 'tour_pjl_day5_title', subtitle: 'tour_pjl_day5_subtitle', icon: 'mdi-airplane-takeoff', description: 'tour_pjl_day5_desc' },
    ],
    included: ['tour_pjl_included_1', 'tour_pjl_included_2', 'tour_pjl_included_3', 'tour_pjl_included_4', 'tour_pjl_included_5'],
    notIncluded: ['tour_pjl_not_included_1', 'tour_pjl_not_included_2', 'tour_pjl_not_included_3', 'tour_pjl_not_included_4'],
  },
  // Placeholder for other tours
  safari_pantanal: { image: image3, itinerary: null, included: [], notIncluded: [] },
  flutuacao_prata: { image: image3, itinerary: null, included: [], notIncluded: [] },
  combo_pantanal_bonito: { image: image3, itinerary: null, included: [], notIncluded: [] },
  cavalgada_pantaneira: { image: image3, itinerary: null, included: [], notIncluded: [] },
  outro_exemplo_1: { image: image3, itinerary: null, included: [], notIncluded: [] },
  outro_exemplo_2: { image: image3, itinerary: null, included: [], notIncluded: [] },
};

const tour = computed(() => toursData[tourId.value] || null);

const tourTitle = computed(() => tour.value ? t(`tour_${tourId.value}_title`) : 'Tour');
const encodedWhatsAppMessage = computed(() => encodeURIComponent(t('whatsapp_message', { tour: tourTitle.value })));

// Dynamic meta tags
useMeta(() => ({
  title: `${tourTitle.value} | Pantanal Ecotrips`,
  meta: {
    description: { name: 'description', content: t(`tour_${tourId.value}_desc`) },
  },
}));

// Watch for language changes in the route and update i18n locale
const langMap: Record<string, string> = { pt: 'pt-BR', en: 'en-US', es: 'es' };
watch(() => route.params.lang, (newLang) => {
  locale.value = langMap[newLang as string] || 'pt-BR';
}, { immediate: true });

</script>

<style scoped lang="scss">
/* Styles are mostly the same, so I'll keep them as they are */
.tour-details-page {
  background-color: var(--page-bg-color);
}

.hero-container {
  position: relative;
  height: 60vh;
  color: white;
}

.hero-image {
  height: 100%;
  width: 100%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, transparent 100%);
}

.hero-content {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  z-index: 2;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
  line-height: 1.2;
}

.hero-subtitle {
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  opacity: 0.9;
}

.page-content {
  max-width: 960px;
  margin: -80px auto 0 auto;
  position: relative;
  z-index: 3;
}

.intro-card,
.info-card,
.packing-card {
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.itinerary-section .text-h4 {
  font-weight: 700;
  color: var(--primary-color);
}

.q-timeline__title {
  font-size: 1.25rem;
  font-weight: 700;
}

.info-card .text-h6 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .page-content {
    margin-top: -60px;
  }
}

.animated-timeline-entry {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0; // Start invisible
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
