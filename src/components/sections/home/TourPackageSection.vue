<template>
  <div>
    <div class="tours-section-container q-my-xl">
      <div class="text-center q-mb-lg">
        <h2 class="section-title">{{ t('most_wanted_packages_title') }}</h2>
        <p class="section-subtitle">
          {{ t('most_wanted_packages_subtitle') }} <strong>Bonito e Pantanal</strong>.
        </p>
      </div>

      <div class="search-filter-container q-pa-md shadow-2">
        <div class="row items-center q-gutter-md">
          <q-input
            v-model="filters.searchText"
            filled
            rounded
            :placeholder="t('search_placeholder')"
            class="col custom-input"
            dense
            clearable
            color="primary"
            @clear="filters.searchText = ''"
          >
            <template #prepend>
              <q-icon name="mdi-magnify" />
            </template>
          </q-input>

          <q-btn
            flat
            round
            dense
            color="primary"
            :icon="showAdvanced ? 'mdi-chevron-up' : 'mdi-tune-variant'"
            @click="showAdvanced = !showAdvanced"
            class="q-ml-sm filter-toggle-btn"
            aria-label="Mostrar/Esconder filtros avançados"
          >
            <q-tooltip>{{ t(showAdvanced ? 'hide_filters' : 'advanced_filters') }}</q-tooltip>
          </q-btn>
        </div>

        <q-slide-transition>
          <div v-show="showAdvanced" class="advanced-filters q-mt-md">
             <div v-if="filtersLoading" class="text-center q-pa-md">
                 <q-spinner color="primary" size="2em" />
                 <p class="text-caption q-mt-sm">{{ t('loading_filters') }}...</p>
             </div>
            <div v-else class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-select
                  v-model="filters.region"
                  :options="regionOptions"
                  :option-label="(region: Region) => region.name"
                  :label="t('region')"
                  filled
                  dense
                  clearable
                  class="custom-input"
                  color="primary"
                  @update:model-value="filters.cities = []"
                  options-dense
                />
              </div>
              <div class="col-12 col-md-6">
                <q-select
                  v-model="filters.cities"
                  :options="cityOptions"
                  :option-label="(city: TranslatableTag) => city.name"
                  :label="t('cities')"
                  multiple
                  use-chips
                  filled
                  dense
                  class="custom-input"
                  color="primary"
                  :disable="!filters.region"
                  :hint="!filters.region ? t('select_region_first') : ''"
                  options-dense
                  clearable
                />
              </div>
              <div class="col-12 col-md-6">
                <q-select
                  v-model="filters.categories"
                  :options="categoryOptions"
                  :option-label="(cat: TranslatableTag) => cat.name"
                  :label="t('categories')"
                  multiple
                  use-chips
                  filled
                  dense
                  class="custom-input"
                  color="primary"
                  options-dense
                  clearable
                />
              </div>
              <div class="col-12 col-md-6">
                <q-select
                  v-model="filters.recommendedFor"
                  :options="audienceOptions"
                  :option-label="(aud: TranslatableTag) => aud.name"
                  :label="t('recommended_for')"
                  multiple
                  use-chips
                  filled
                  dense
                  class="custom-input"
                  color="primary"
                  options-dense
                  clearable
                />
              </div>
            </div>
            <div class="text-right q-mt-md">
              <q-btn :label="t('clear_filters')" flat color="primary" @click="clearFilters" />
            </div>
          </div>
        </q-slide-transition>
      </div>

      <div v-if="loading && availablePackages.length === 0" class="text-center q-py-xl">
        <q-spinner-dots color="primary" size="3rem" />
         <p class="q-mt-md text-grey-7">{{ t('loading_packages') }}...</p>
      </div>

       <HorizontalGradientMask v-else-if="filteredPackages.length" @item-click="viewPackage">
        <div
          v-for="pkg in filteredPackages"
          :key="pkg.id"
          :data-slug="pkg.slug"
          class="col-12"
          :class="$q.screen.gt.xs ? 'q-pr-lg' : 'q-px-md'"
          :style="$q.screen.gt.xs ? { width: '360px', flexShrink: 0 } : {}"
        >
          <q-card class="package-card" flat bordered @click="() => viewPackage(pkg.slug)">
             <q-img
               :src="pkg.image"
               :alt="pkg.title"
               height="200px"
               fit="cover"
               class="card-image"
               loading="lazy"
             >
                <template v-slot:loading>
                   <q-spinner-puff color="primary" />
                </template>
               <div class="absolute-bottom-left bg-transparent q-pa-sm image-overlay">
                  <q-badge rounded color="secondary" text-color="black" class="q-py-xs q-px-sm text-caption text-weight-bold shadow-2">
                    {{ t('package_tour') }}
                  </q-badge>
               </div>
             </q-img>

            <q-card-section class="card-content-section">
              <div class="core-info-pill">
                <div class="info-item">
                  <q-icon name="mdi-calendar-clock" />
                  <span>
                    {{ pkg.durationInDays }} {{ t(pkg.durationInDays > 1 ? 'days' : 'day') }} /
                    {{ pkg.durationInNights }} {{ t(pkg.durationInNights > 1 ? 'nights' : 'night') }}
                  </span>
                </div>
                <template v-if="pkg.minPeople">
                  <q-separator vertical class="q-mx-sm bg-grey-5" />
                  <div class="info-item">
                    <q-icon name="mdi-account-group" />
                    <span>Min. {{ pkg.minPeople }}</span>
                  </div>
                </template>
              </div>
              
              <h3 class="card-title">{{ pkg.title }}</h3>
              
              <div v-if="pkg.region" class="region-subheader">
                <q-icon :name="pkg.region.icon || 'mdi-earth'" />
                <span>{{ pkg.region.name }}</span>
              </div>
              
              <p class="card-description">{{ pkg.subtitle }}</p>
              
              <div class="icon-section-wrapper" v-if="pkg.packageCategories?.length">
                  <div class="icon-list">
                    <q-chip
                        v-for="category in pkg.packageCategories.slice(0, 3)"
                        :key="category.id"
                        class="theme-chip"
                        dense
                        outline
                        size="sm"
                      >
                      {{ category.name }}
                    </q-chip>
                    <span v-if="pkg.packageCategories.length > 3" class="text-caption q-ml-xs text-grey">+{{pkg.packageCategories.length - 3}}</span>
                  </div>
              </div>
            </q-card-section>

            <q-card-actions class="card-actions q-mt-auto">
              <q-btn
                :label="t('tours_cta_button')"
                class="full-width cta-button"
                unelevated
                icon-right="mdi-arrow-right"
                tabindex="-1"
                aria-hidden="true"
                no-caps
              />
            </q-card-actions>
          </q-card>
        </div>
      </HorizontalGradientMask>

      <div v-else class="text-center text-grey-7 q-mt-xl q-pa-lg">
        <q-icon name="mdi-magnify-close" size="4rem" class="opacity-50" />
        <p class="q-mt-md text-h6">{{ t('no_packages_found_title') }}</p>
        <p>{{ t('no_packages_found_subtitle') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useTourPackageStore } from 'src/stores/useTourPackageStore';
import type { Region } from 'src/model/Region';
import type { TourPackage } from 'src/model/TourPackage';
import type { TranslatableTag } from 'src/model/Tags';
import HorizontalGradientMask from 'src/components/mask/HorizontalGradientMask.vue';

// --- PROPS ---
// Agora aceita uma lista opcional de pacotes vindos do pai (ex: DestinationsPage)
const props = defineProps<{
  packages?: TourPackage[]
}>();

// --- SETUP ---
const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();
const $q = useQuasar();

const packageStore = useTourPackageStore();
// Renomeamos para 'storePackages' para não conflitar com a lógica unificada
const { allPackages: storePackages, loading } = storeToRefs(packageStore);

const showAdvanced = ref(false);
const filtersLoading = ref(false);

const filters = reactive({
  searchText: '',
  region: null as Region | null,
  cities: [] as TranslatableTag[],
  categories: [] as TranslatableTag[],
  recommendedFor: [] as TranslatableTag[],
});

const regionOptions = ref<Region[]>([]);
const categoryOptions = ref<TranslatableTag[]>([]);
const audienceOptions = ref<TranslatableTag[]>([]);

// --- COMPUTED: Fonte de Dados ---
// Define qual lista usar: A que veio da Prop ou a da Store
const availablePackages = computed(() => {
  if (props.packages !== undefined) {
    return props.packages;
  }
  return storePackages.value;
});

async function loadFilterData() {
  if (regionOptions.value.length > 0) return;
  filtersLoading.value = true;
  try {
    // Se a lista base estiver vazia e não tivermos props, busca na store
    if (availablePackages.value.length === 0 && !props.packages) {
       await packageStore.fetchPackages(route.params.lang as string || 'pt');
    }
    const [regionsMod, audiencesMod, categoriesMod] = await Promise.all([
      import('src/data/regions/all'),
      import('src/data/audiences/all'),
      import('src/data/categories/all'),
    ]);

    if (regionsMod.allRegionsPt) regionOptions.value = regionsMod.allRegionsPt;
    if (audiencesMod.allAudiencesPt) audienceOptions.value = audiencesMod.allAudiencesPt;
    if (categoriesMod.allCategoriesPt) categoryOptions.value = categoriesMod.allCategoriesPt;

  } catch (error) {
    console.warn("Erro ao carregar filtros", error);
  } finally {
      filtersLoading.value = false;
  }
}

onMounted(() => { void loadFilterData(); });

const cityOptions = computed(() => filters.region?.cities || []);

const clearFilters = () => {
  filters.searchText = '';
  filters.region = null;
  filters.cities = [];
  filters.categories = [];
  filters.recommendedFor = [];
};

// Filtra sobre a lista unificada 'availablePackages'
const filteredPackages = computed(() => {
  if (!availablePackages.value?.length) return [];
  
  return availablePackages.value.filter(pkg => {
    if (!pkg?.id) return false;
    const { searchText, region, cities, categories, recommendedFor } = filters;

    let matchesSearchText = true;
    if (searchText) {
      const normalize = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      const query = normalize(searchText);
      matchesSearchText = normalize(pkg.title || '').includes(query) || normalize(pkg.subtitle || '').includes(query);
    }
    
    const matchesRegion = region ? pkg.region?.id === region.id : true;
    
    let matchesCities = true;
    if (cities.length > 0) {
      if (!pkg.itinerary) matchesCities = false;
      else matchesCities = cities.some(fCity => pkg.itinerary?.some(day => day.tours?.some(tour => tour.city?.id === fCity.id)));
    }
    
    const matchesCategory = categories.length > 0 ? (pkg.packageCategories ? categories.some(fCat => pkg.packageCategories?.some(pCat => pCat.id === fCat.id)) : false) : true;

    const matchesRecommendedFor = recommendedFor.length > 0 ? (pkg.packageRecommendedFor ? recommendedFor.some(fAud => pkg.packageRecommendedFor?.some(pAud => pAud.id === fAud.id)) : false) : true;

    return matchesSearchText && matchesRegion && matchesCities && matchesCategory && matchesRecommendedFor;
  });
});

const viewPackage = (packageSlug: string) => {
  if (!packageSlug) return;
  void router.push({ name: 'tourDetails', params: { slug: packageSlug, lang: route.params.lang || 'pt' } });
};

watch(() => locale.value, () => {});
</script>

<style scoped lang="scss">
.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 1.1;
  color: var(--text-primary-color, #1a2e29);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-family: 'Lato', sans-serif;
  font-size: 1.1rem;
  color: var(--text-secondary-color, #6c7a77);
}

.search-filter-container {
  background-color: var(--card-bg-color, #ffffff);
  border: 1px solid var(--border-color, #eef2f1);
  border-radius: 28px;
  max-width: 900px;
  margin: 0 auto 48px auto;
  transition: all 0.3s ease-in-out;
  
  backdrop-filter: blur(10px); 
}

:deep(.custom-input .q-field__control),
:deep(.custom-input .q-field__marginal) {
    color: var(--text-primary-color);
}

:deep(.custom-input .q-field__label) {
    color: var(--text-secondary-color);
}

.tours-section-container {
  padding: 0px 16px;
  max-width: 100%;
  overflow: hidden;
}
.package-card {
  background-color: var(--card-bg-color, #ffffff);
  border: 1px solid var(--border-color, rgba(255,255,255,0.05));
  border-radius: 20px;
  box-shadow: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(2, 123, 227, 0.15); 
  }
}

:global(body.body--dark) .package-card:hover {
    box-shadow: 0 0 20px rgba(0, 229, 255, 0.15); 
    border-color: var(--secondary-color);
}

.card-image {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  position: relative;
}

.image-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
  width: 100%;
}

.card-content-section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.core-info-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: var(--section-alt-bg, #f5f8f7);
  border-radius: 50px;
  margin-bottom: 14px;
  align-self: flex-start;
  
  color: var(--text-secondary-color);
  font-size: 0.8rem;
  font-weight: 600;

  .info-item {
    display: flex;
    align-items: center;
    gap: 6px;
    
    .q-icon {
      color: var(--primary-color);
      font-size: 1.1rem;
    }
  }
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.3;
  margin: 0 0 8px 0;
  color: var(--text-primary-color);
  
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.4rem * 1.3 * 2);
}

.region-subheader {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--secondary-color, #00E5FF);

  .q-icon {
    font-size: 1rem;
  }
}

.card-description {
  font-family: 'Lato', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary-color);
  margin-bottom: 18px;
  
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.icon-section-wrapper {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--border-color, #eee);
}

.theme-chip {
    color: var(--text-primary-color) !important;
    border-color: var(--primary-color) !important;
    background: transparent !important;
    
    :deep(.q-chip__content) {
        font-weight: 500;
    }
}

.card-actions {
  padding: 20px;
  padding-top: 0;

  .cta-button {
    background: var(--primary-color) !important; 
    color: #ffffff !important;
    
    border-radius: 50px;
    font-weight: 700;
    padding: 10px 0;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
  }
}

:global(body.body--dark) .cta-button {
    background-color: var(--accent-color) !important;
    color: #000000 !important;
    box-shadow: 0 0 10px rgba(255, 214, 0, 0.4);
}

@media (max-width: 599px) {
    .section-title { font-size: 1.8rem; }
    .card-title { font-size: 1.25rem; min-height: unset; }
    .package-card { height: auto; }
}
</style>