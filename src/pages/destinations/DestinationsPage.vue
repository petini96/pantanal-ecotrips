<template>
  <q-page padding :class="['destinations-page', `theme-${currentTheme}`]">
    
    <div class="container q-py-lg text-center">
      <h1 class="text-h3 text-weight-bold" :class="currentTheme === 'dark' ? 'text-white' : 'text-primary'">
        {{ t("destinations") }}: <span class="text-secondary capitalize">{{ destinationsSlug }}</span>
      </h1>
      <p class="text-subtitle1 opacity-80" :class="currentTheme === 'dark' ? 'text-white' : 'text-primary'">
        {{ t('destinations_description') || 'Explore os melhores pacotes para este destino.' }}
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

// --- Imports Assíncronos ---
const TourPackageSection = defineAsyncComponent(
  () => import('src/components/sections/home/TourPackageSection.vue')
);

// --- Configuração ---
const route = useRoute();
const { t } = useI18n();
const layoutConfigStore = useLayoutConfigStore();
const tourPackageStore = useTourPackageStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

// Controla o Lazy Load do componente visual
const loadTourPackage = ref(false);

// Pega o slug da URL
const destinationsSlug = computed(() => route.params.slug as string);

// --- FILTRO REATIVO ---
// Filtra os pacotes da Store baseado no slug da URL
const regionPackages = computed(() => {
  return tourPackageStore.getPackagesByRegionSlug(destinationsSlug.value);
});

// Ativa o componente visual logo que a página monta
onMounted(() => {
  loadTourPackage.value = true;
});

// --- SSR preFetch ---
defineOptions({
  preFetch: async ({ store, currentRoute }) => {
    const packageStore = useTourPackageStore(store);
    
    const langParam = currentRoute.params.lang as string;
    const lang = langMap[langParam] || 'pt';
    
    // Busca TODOS os pacotes. O filtro é feito localmente no computed acima.
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