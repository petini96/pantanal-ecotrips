<template>
  <q-page v-if="loading && !pkg" class="flex flex-center">
    <q-spinner-dots color="primary" size="4em" />
  </q-page>

  <q-page v-else-if="pkg" :class="['tour-details-page', `theme-${currentTheme}`]">
    <SimpleBannerDetails :hero_title="pkg.title"
      :hero_subtitle="`${pkg.durationInDays} ${t('days')} / ${pkg.durationInNights} ${t('nights')}`"
      :hero_image="pkg.image" />

    <div class="page-content q-pa-md q-gutter-y-xl">

      <q-card class="intro-card" flat bordered>
        <q-card-section>
          <div class="core-info-pill-details">
            <div class="info-item">
              <q-icon name="mdi-calendar-clock" />
              <span>{{ pkg.durationInDays }} {{ t('days') }} / {{ pkg.durationInNights }} {{ t('nights') }}</span>
            </div>
            <template v-if="pkg.minPeople">
              <q-separator vertical spaced="sm" />
              <div class="info-item">
                <q-icon name="mdi-account-group" />
                <span>Mín. {{ pkg.minPeople }} {{ t("people") }}</span>
              </div>
            </template>
          </div>
        </q-card-section>
      </q-card>

      <AboutTourSection :tour_details_about_title="t('tour_details_about_title')" :tour_desc="pkg.subtitle" />

      <TourItinerarySection v-if="pkg.itinerary && pkg.itinerary.length > 0"
        :tour_details_itinerary_title="t('tour_details_itinerary_title')" :itinerary="pkg.itinerary" />

      <q-card class="info-card" flat bordered>
        <q-card-section class="row q-col-gutter-md">
          <div class="col-12 col-sm-6" v-if="pkg.packageCategories && pkg.packageCategories.length">
            <div class="text-h6 icon-list-title"><q-icon name="mdi-shape-outline" />{{ t("categories") }}</div>
            <div class="icon-list">
              <div v-for="category in pkg.packageCategories" :key="category.id" class="icon-list-item">
                <q-icon :name="category.icon" />
                <span>{{ category.name }}</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6" v-if="pkg.packageRecommendedFor && pkg.packageRecommendedFor.length">
            <div class="text-h6 icon-list-title"><q-icon name="mdi-heart-outline" />{{ t("recommended_for") }}</div>
            <div class="icon-list">
              <div v-for="audience in pkg.packageRecommendedFor" :key="audience.id" class="icon-list-item">
                <q-icon :name="audience.icon" />
                <span>{{ audience.name }}</span>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <div class="info-grid row q-col-gutter-md">
        <div class="col-12 col-md-6" v-if="pkg.included && pkg.included.length > 0">
          <q-card class="info-card included-card" flat bordered>
            <q-card-section>
              <div class="text-h6"><q-icon name="mdi-check-circle-outline" /><span>{{ t('tour_details_included_title')
              }}</span></div>
              <q-list separator class="q-mt-sm">
                <q-item v-for="(item, index) in pkg.included" :key="`inc-${index}`">
                  <q-item-section>
                    <span>
                      <strong>{{ `${index + 1})` }}</strong> {{ ` ${item}` }}
                    </span>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6" v-if="pkg.notIncluded && pkg.notIncluded.length > 0">
          <q-card class="info-card not-included-card" flat bordered>
            <q-card-section>
              <div class="text-h6"><q-icon name="mdi-close-circle-outline" /><span>{{
                t('tour_details_not_included_title')
                  }}</span></div>
              <q-list separator class="q-mt-sm">
                <q-item v-for="(item, index) in pkg.notIncluded" :key="`not-inc-${index}`">
                  <q-item-section>
                    <span>
                      <strong>{{ `${index + 1})` }}</strong> {{ ` ${item}` }}
                    </span>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <q-card class="packing-card" flat bordered v-if="pkg.shouldIBring && pkg.shouldIBring.length > 0">
        <q-card-section>
          <div class="text-h6"><q-icon name="mdi-bag-suitcase-outline" /><span>{{ t('tour_details_packing_title')
          }}</span>
          </div>
          <q-list separator class="q-mt-sm">
            <q-item v-for="(item, index) in pkg.shouldIBring" :key="`bring-${index}`">
              <q-item-section>
                    <span>
                      <strong>{{ `${index + 1})` }}</strong> {{ ` ${item}` }}
                    </span>
                  </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <q-card class="info-card observation-card" flat bordered v-if="pkg.observation">
        <q-card-section>
          <div class="text-h6"><q-icon name="mdi-information-outline" /><span>{{ t('important_observations') }}</span>
          </div>
          <p class="q-mt-sm">{{ pkg.observation }}</p>
        </q-card-section>
      </q-card>

      <div class="text-center q-mt-xl">
        <q-btn color="secondary" size="lg" :label="t('tour_details_cta_button')" icon="mdi-whatsapp"
          :href="`https://wa.me/556791452985?text=${encodedWhatsAppMessage}`" target="_blank" />
      </div>
    </div>
  </q-page>

  <q-page v-else class="flex flex-center">
    <div class="text-center">
      <q-icon name="mdi-alert-circle-outline" size="4rem" color="warning" />
      <p class="text-h6 q-mt-md">{{ t('tour_not_found') }}</p>
      <q-btn :to="`/${locale}`" :label="t('go_home')" color="primary" />
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
import { useTourPackageStore } from 'src/stores/useTourPackageStore';
import SimpleBannerDetails from 'src/components/banner/SimpleBannerDetails.vue';
import AboutTourSection from 'src/components/tour/AboutTourSection.vue';
import TourItinerarySection from 'src/components/tour/TourItinerarySection.vue';

const route = useRoute();
const { t, locale } = useI18n();

const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const packageStore = useTourPackageStore();
// ATUALIZADO: Usando o getter correto 'getPackageBySlug'
const { getPackageBySlug, loading } = storeToRefs(packageStore);

// ATUALIZADO: Lendo o parâmetro 'slug' da rota, em vez de 'id'
const packageSlug = computed(() => route.params.slug as string);

// ATUALIZADO: A variável principal 'pkg' agora busca pelo slug
const pkg = computed(() => getPackageBySlug.value(packageSlug.value));

const langMap: Record<string, string> = { pt: 'pt', en: 'en', es: 'es' };

onMounted(async () => {
  const lang = langMap[route.params.lang as string] || 'pt';
  locale.value = lang;
  await packageStore.fetchPackages(lang);
});

watch(() => route.params.lang, async (newLang) => {
  packageStore.clearPackages();
  const lang = langMap[newLang as string] || 'pt';
  locale.value = lang;
  await packageStore.fetchPackages(lang);
});

const encodedWhatsAppMessage = computed(() => {
  const title = pkg.value?.title ?? 'este pacote';
  return encodeURIComponent(t('whatsapp_message', { tour: title }));
});

useMeta(() => {
  if (!pkg.value) {
    return { title: t('tour_not_found') };
  }
  const baseUrl = 'https://www.pantanalecotrips.com.br';
  const currentLang = (route.params.lang as string || 'pt');

  return {
    title: `${pkg.value.title} | Pantanal Ecotrips`,
    meta: {
      description: { name: 'description', content: pkg.value.subtitle },
    },
    link: {
      // ATUALIZADO: Usando o slug na URL canônica para SEO
      canonical: { rel: 'canonical', href: `${baseUrl}/${currentLang}/tours/${pkg.value.slug}` },
    },
  };
});
</script>

<style scoped lang="scss">
.tour-details-page {
  background-color: #f8f9fa;
}

.page-content {
  max-width: 960px;
  margin: -100px auto 60px auto;
  position: relative;
  z-index: 3;

  @media (max-width: $breakpoint-sm-max) {
    margin-top: -60px;
  }
}

.intro-card,
.info-card,
.packing-card {
  border-radius: 16px;
  border: 1px solid #eef2f1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.core-info-pill-details {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: #34495e;

  .info-item {
    display: flex;
    align-items: center;
    gap: 8px;

    .q-icon {
      color: var(--q-primary);
      font-size: 1.5rem;
    }
  }
}

.info-card .text-h6,
.packing-card .text-h6 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 8px;

  .q-icon {
    color: var(--q-primary);
  }
}

.included-card .text-h6 .q-icon {
  color: #2ecc71;
}

.not-included-card .text-h6 .q-icon {
  color: #e74c3c;
}

.observation-card .text-h6 .q-icon {
  color: #3498db;
}

.icon-list-title {
  margin-bottom: 16px;

  .q-icon {
    margin-right: 8px;
  }
}

.icon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.icon-list-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #34495e;
  background-color: #f5f8f7;
  padding: 8px 16px;
  border-radius: 20px;

  .q-icon {
    color: var(--q-primary);
    font-size: 1.3rem;
  }
}

.q-list--separator>.q-item {
  border-top: 1px solid #f0f0f0;
}
</style>