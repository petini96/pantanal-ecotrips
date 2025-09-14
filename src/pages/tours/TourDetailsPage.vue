<template>
  <q-page v-if="loading" class="flex flex-center">
    <q-spinner-dots color="primary" size="4em" />
  </q-page>

  <q-page v-else-if="tour" :class="['tour-details-page', `theme-${currentTheme}`]">
    <SimpleBannerDetails
      :hero_title="t(`tour_${tourId}_title`)"
      :hero_subtitle="t(`tour_${tourId}_type`)"
      :hero_image="tour?.image"
    />

    <div class="page-content q-pa-md q-gutter-y-xl">
      <AboutTourSection
        :tour_details_about_title="t('tour_details_about_title')"
        :tour_desc="t(`tour_${tourId}_desc`)"
      />

      <TourItinerarySection
        v-if="tour.itinerary"
        :tour_details_itinerary_title="t('tour_details_itinerary_title')"
        :itinerary="tour.itinerary"
      />

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
import { computed, onMounted, watch } from 'vue';
import { useMeta } from 'quasar';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { useTourStore } from 'src/stores/useTourStore';
import SimpleBannerDetails from 'src/components/banner/SimpleBannerDetails.vue';
import AboutTourSection from 'src/components/tour/AboutTourSection.vue';
import TourItinerarySection from 'src/components/tour/TourItinerarySection.vue';

const route = useRoute();
const { t, locale } = useI18n();

const layoutConfigStore = useLayoutConfigStore();
const tourStore = useTourStore();

const { theme: currentTheme } = storeToRefs(layoutConfigStore);
const { getTourById, loading } = storeToRefs(tourStore);

const tourId = computed(() => route.params.id as string);

const tour = computed(() => getTourById.value(tourId.value));

const tourTitle = computed(() => (tour.value ? t(`tour_${tourId.value}_title`) : 'Tour'));
const encodedWhatsAppMessage = computed(() => encodeURIComponent(t('whatsapp_message', { tour: tourTitle.value })));

onMounted(async () => {
  await tourStore.fetchTours();
});

useMeta(() => ({
  title: `${tourTitle.value} | Pantanal Ecotrips`,
  meta: {
    description: { name: 'description', content: t(`tour_${tourId.value}_desc`) },
  },
}));

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
