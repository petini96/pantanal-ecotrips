<template>
  <q-page padding :class="['destinations-page', `theme-${currentTheme}`]">
    
    <div class="container q-py-lg text-center">
      <h1 class="text-h3 text-weight-bold" :class="currentTheme === 'dark' ? 'text-white' : 'text-primary'">
        <span class="text-secondary capitalize">{{ currentRegion?.name }}</span>
      </h1>
      <p class="text-subtitle1 opacity-80" :class="currentTheme === 'dark' ? 'text-white' : 'text-primary'">
        {{currentRegion?.description|| 'Explore os melhores pacotes para este destino.' }}
      </p>
    </div>

    <section id="packages-section" class="section-wrapper">
      
      <TourPackageSection 
        v-if="loadTourPackage" 
        :packages="regionPackages" 
        class="q-mt-xl" 
      />
      
      <div v-else class="row justify-center q-py-xl">
        <q-spinner-dots size="3em" color="primary" />
      </div>

    </section>

  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMeta } from 'quasar';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { useTourPackageStore } from 'src/stores/useTourPackageStore';
import { langMap } from 'src/utils/langMap';
import { useRegionStore } from 'src/stores/useRegionStore';

const TourPackageSection = defineAsyncComponent(
  () => import('src/components/sections/home/TourPackageSection.vue')
);

const route = useRoute();
const regionStore = useRegionStore();
const { t } = useI18n();
const layoutConfigStore = useLayoutConfigStore();
const tourPackageStore = useTourPackageStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const loadTourPackage = ref(false);

const currentRegion = computed(() => {
  return regionStore.getRegionBySlug(destinationsSlug.value);
});

onMounted(async () => {
  await regionStore.fetchRegion('pt'); 
});
const destinationsSlug = computed(() => route.params.slug as string);

const regionPackages = computed(() => {
  return tourPackageStore.getPackagesByRegionSlug(destinationsSlug.value);
});

onMounted(() => {
  loadTourPackage.value = true;
});

defineOptions({
  preFetch: async ({ store, currentRoute }) => {
    const packageStore = useTourPackageStore(store);
    
    const langParam = currentRoute.params.lang as string;
    const lang = langMap[langParam] || 'pt';
    
    await packageStore.fetchPackages(lang); 
  },
});

// --- SEO Meta Tags ---
useMeta(() => {
  const pageTitle = t('destinations_title') || 'Destinos';
  const desc = t('destinations_description') || `Pacotes incríveis para ${destinationsSlug.value}`;
  
  return {
    title: `${pageTitle} - ${destinationsSlug.value} | Pantanal Ecotrips`,
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
  padding-top: 180px;
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