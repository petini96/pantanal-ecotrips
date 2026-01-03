<template>
  <q-page :class="['destinations-page', `theme-${currentTheme}`]">

    <SimpleBanner :hero_title="currentRegion?.name ? currentRegion?.name : ''"
      :hero_subtitle="currentRegion?.subtitle ? currentRegion?.subtitle : ''"
      :hero_background="currentRegion?.coverImage ? currentRegion?.coverImage : ''" :height="'50vh'" />

    <div class="container">
      <div class="row q-my-xl">
        <div class="col-9 q-px-xl">
          <h4>Resumo</h4>
          
          <div v-if="visibleDescription.length > 0">
            <p 
              v-for="(p, index) in visibleDescription" 
              :key="index"
              class="text-body1"
            >
              {{ p }}
            </p>
          </div>

          <div v-if="showReadMoreBtn" class="q-mt-md">
            <q-btn
              flat
              dense
              no-caps
              color="primary"
              :label="isExpanded ? 'Ler menos' : 'Continuar lendo'"
              :icon-right="isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="isExpanded = !isExpanded"
            />
          </div>
        </div>

        <div class="col-3">
          <h4>Localização</h4>
          
          <p class="text-caption q-mb-sm text-grey-8">
            <q-icon name="mdi-map-marker" size="xs" />
            {{ currentRegion?.location.address }}
          </p>

          <div 
            v-if="currentRegion?.location" 
            class="map-box shadow-2 rounded-borders overflow-hidden"
          >
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              style="border:0"
              :src="mapUrl"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          
          <q-btn 
            flat 
            dense 
            size="sm" 
            color="primary" 
            label="Ver no mapa ampliado" 
            class="q-mt-xs full-width"
            target="_blank"
            :href="`https://www.google.com/maps/search/?api=1&query=${currentRegion?.location.lat},${currentRegion?.location.lng}`"
          />
        </div>
      </div>

    </div>

    <section id="packages-section" class="section-wrapper ">

      <div class="row align-center justify-center">
        <div class="col-10">

          <TourPackageSection v-if="loadTourPackage" :packages="regionPackages" :show-filter="false" class="q-mt-xl" />
          <div v-else class="row justify-center q-py-xl">
            <q-spinner-dots size="3em" color="primary" />
          </div>
        </div>
      </div>

    </section>

  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMeta } from 'quasar';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { useTourPackageStore } from 'src/stores/useTourPackageStore';
import { langMap } from 'src/utils/langMap';
import { useRegionStore } from 'src/stores/useRegionStore';
import SimpleBanner from 'src/components/banner/SimpleBanner.vue';

const TourPackageSection = defineAsyncComponent(
  () => import('src/components/sections/home/TourPackageSection.vue')
);

const route = useRoute();
const regionStore = useRegionStore();
const { t, locale } = useI18n();
const layoutConfigStore = useLayoutConfigStore();
const tourPackageStore = useTourPackageStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const loadTourPackage = ref(false);
const destinationsSlug = computed(() => route.params.slug as string);

const currentRegion = computed(() => {
  return regionStore.getRegionBySlug(destinationsSlug.value);
});

const regionPackages = computed(() => {
  return tourPackageStore.getPackagesByRegionSlug(destinationsSlug.value);
});

const mapUrl = computed(() => {
  const loc = currentRegion.value?.location;
  if (!loc) return '';
  return `https://maps.google.com/maps?q=${loc.lat},${loc.lng}&hl=pt&z=6&output=embed`;
});

const loadData = async (langKey: string) => {
  loadTourPackage.value = false;

  const lang = langMap[langKey] || 'pt';

  locale.value = lang;

  if (tourPackageStore.clearPackages) tourPackageStore.clearPackages();

  if (regionStore.clearRegions) {
    regionStore.clearRegions();
  } else if (regionStore.$reset) {
    regionStore.$reset();
  }

  try {
    await Promise.all([
      regionStore.fetchRegion(lang),
      tourPackageStore.fetchPackages(lang)
    ]);
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  } finally {
    loadTourPackage.value = true;
  }
};

watch(
  () => route.params.lang,
  (newLang) => {
    void loadData(newLang as string);
  },
  { immediate: true }
);

defineOptions({
  preFetch: async ({ store, currentRoute }) => {
    const packageStore = useTourPackageStore(store);
    const rStore = useRegionStore(store);

    const langParam = currentRoute.params.lang as string;
    const lang = langMap[langParam] || 'pt';

    await Promise.all([
      packageStore.fetchPackages(lang),
      rStore.fetchRegion(lang)
    ]);
  },
});

const isExpanded = ref(false);

const visibleDescription = computed(()=>{
  const desc = currentRegion.value?.description;
  if(!Array.isArray(desc)) return []
  return isExpanded.value ? desc : desc.slice(0,3);
})

const showReadMoreBtn = computed(() => {
  return Array.isArray(currentRegion.value?.description) && currentRegion.value.description.length > 3;
});

useMeta(() => {
  const pageTitle = t('destinations_title') || 'Destinos';
  const rName = currentRegion.value?.name || destinationsSlug.value;
  const desc = currentRegion.value?.description || t('destinations_description') || `Pacotes para ${rName}`;

  return {
    title: `${pageTitle} - ${rName} | Pantanal Ecotrips`,
    meta: {
      description: { name: 'description', content: desc }
    }
  };
});
</script>

<style lang="scss" scoped>
.destinations-page {
  background-color: var(--page-bg-color);
  transition: background-color 0.3s ease;

  padding-top: 0;

  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.section-wrapper {
  min-height: 50vh;
}

.capitalize {
  text-transform: capitalize;
}
</style>