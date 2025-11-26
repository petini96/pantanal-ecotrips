<template>
  <q-page padding>
    <div class="container q-py-lg">
      
      <div class="q-mb-lg text-center">
        <h1 class="text-h3 text-weight-medium q-mb-sm q-mt-xl">
          {{ t('all_tours_title') || 'Nossos Passeios' }}
        </h1>
        <p class="text-body1 text-grey-8">
          {{ t('all_tours_description') || 'Explore as melhores aventuras da região.' }}
        </p>
      </div>

      <div class="q-mb-xl">
        <TourSearchFilter v-model="filters" />
      </div>

      <div v-if="store.loading" class="row justify-center q-my-xl" style="min-height: 300px">
        <q-spinner color="primary" size="3em" />
      </div>

      <div v-else-if="store.error" class="text-center q-my-xl">
        <q-icon name="mdi-alert-circle-outline" color="negative" size="3em" />
        <p class="text-body1 q-mt-md">{{ t('error_loading_tours') }}</p>
        <p class="text-caption text-grey-7">{{ store.error }}</p>
      </div>

      <div v-else-if="paginatedTours.length > 0">
        <div class="text-grey-7 q-mb-md">
           {{ filteredTours.length }} {{ t('tours_found') || 'passeios encontrados' }}
        </div>

        <div class="row q-col-gutter-lg">
          <div
            v-for="tour in paginatedTours"
            :key="tour.id"
            class="col-12 col-sm-6 col-md-4"
          >
            <TourCard :tour="tour" />
          </div>
        </div>

        <div class="q-pa-lg flex flex-center q-mt-md">
          <q-pagination
            v-model="pagination.page"
            :max="totalPages"
            :max-pages="7"
            direction-links
            boundary-numbers
            color="primary"
            active-design="unelevated"
            active-color="primary"
            gutter="sm"
            @update:model-value="scrollToTop"
          />
        </div>
      </div>

      <div v-else class="text-center q-my-xl" style="min-height: 300px">
        <q-icon name="mdi-compass-off-outline" color="grey-6" size="3em" />
        <p class="text-body1 q-mt-md text-grey-7">
            {{ t('no_tours_found_filter') || 'Nenhum passeio encontrado com estes filtros.' }}
        </p>
        <q-btn 
            label="Limpar Filtros" 
            color="primary" 
            outline 
            class="q-mt-sm"
            @click="clearFilters"
        />
      </div>

    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'; // Removi 'reactive'
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useMeta } from 'quasar';
import { useTourStore } from 'src/stores/useTourStore';
import { langMap } from 'src/utils/langMap';
import TourCard from 'src/components/tour/TourCard.vue';
import TourSearchFilter from 'src/components/search/TourSearchFilter.vue';
import type { Region } from 'src/model/Region';
import type { TranslatableTag } from 'src/model/Tags';

const store = useTourStore();
const route = useRoute();
const { t, locale } = useI18n();

// --- CORREÇÃO 1: Usar REF em vez de REACTIVE ---
// Isso permite que o v-model substitua o objeto inteiro sem quebrar a reatividade
const filters = ref({
  searchText: '',
  region: null as Region | null,
  cities: [] as TranslatableTag[],
  categories: [] as TranslatableTag[],
  recommendedFor: [] as TranslatableTag[],
});

const clearFilters = () => {
    filters.value = {
      searchText: '',
      region: null,
      cities: [],
      categories: [],
      recommendedFor: []
    };
};

// --- LÓGICA DE FILTRAGEM ---
const normalize = (text: string) => text ? text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";

const filteredTours = computed(() => {
  if (!store.allTours || !store.allTours.length) return [];

  return store.allTours.filter(tour => {
      // 1. Busca Texto
      // CORREÇÃO 2: Acessar via .value
      if (filters.value.searchText) {
          const q = normalize(filters.value.searchText);
          const name = normalize(tour.name);
          const desc = normalize(tour.description);
          if (!name.includes(q) && !desc.includes(q)) return false;
      }

      // 2. Região
      if (filters.value.region) {
          if (!tour.city?.id) return false;
          // Verifica se a cidade do passeio existe na lista de cidades da região selecionada
          const regionHasCity = filters.value.region.cities.some(c => c.id === tour.city?.id);
          if (!regionHasCity) return false;
      }

      // 3. Cidades
      if (filters.value.cities.length > 0) {
          if (!tour.city?.id) return false;
          const match = filters.value.cities.some(c => c.id === tour.city?.id);
          if (!match) return false;
      }

      // 4. Categorias
      if (filters.value.categories.length > 0) {
          if (!tour.categories) return false;
          const match = filters.value.categories.some(fCat => 
              tour.categories?.some(tCat => tCat.id === fCat.id)
          );
          if (!match) return false;
      }

      // 5. Recomendado
      if (filters.value.recommendedFor.length > 0) {
          if (!tour.recommendedFor) return false;
          const match = filters.value.recommendedFor.some(fRec => 
              tour.recommendedFor?.some(tRec => tRec.id === fRec.id)
          );
          if (!match) return false;
      }

      return true;
  });
});

// --- PAGINAÇÃO ---
const pagination = ref({ page: 1, rowsPerPage: 9 });

// Watch profundo no filters.value para resetar página
watch(() => filters.value, () => { pagination.value.page = 1; }, { deep: true });

const paginatedTours = computed(() => {
  const start = (pagination.value.page - 1) * pagination.value.rowsPerPage;
  return filteredTours.value.slice(start, start + pagination.value.rowsPerPage);
});

const totalPages = computed(() => Math.ceil(filteredTours.value.length / pagination.value.rowsPerPage));

const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

// --- FETCH DATA ---
defineOptions({
  preFetch: async ({ store: piniaStore, currentRoute }) => {
    const s = useTourStore(piniaStore);
    s.clearTours(); 
    const lang = langMap[currentRoute.params.lang as string] || 'pt';
    await s.fetchTours(lang);
  },
});

watch(
  () => route.params.lang,
  (newLangParam) => {
    const newLang = langMap[newLangParam as string] || 'pt';
    locale.value = newLang; 
    pagination.value.page = 1; 
    void store.fetchTours(newLang); 
  },
  { immediate: true } 
);

// --- META TAGS ---
useMeta(() => {
  const pageTitle = t('all_tours_title') || 'Passeios';
  const desc = t('all_tours_description') || 'Lista de passeios';
  return {
    title: `${pageTitle} | Pantanal Ecotrips`,
    meta: { description: { name: 'description', content: desc } }
  };
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>