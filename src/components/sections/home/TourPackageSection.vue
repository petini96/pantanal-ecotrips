<template>
  <div>
    <div class="search-filter-container q-pa-md">
      <div class="row items-center q-gutter-md">
        <q-input
          v-model="filters.searchText"
          outlined
          rounded
          :placeholder="t('search_placeholder')"
          class="col"
          dense
        >
          <template v-slot:prepend>
            <q-icon name="mdi-magnify" />
          </template>
        </q-input>

        <q-btn
          flat
          round
          dense
          :icon="showAdvanced ? 'mdi-chevron-up' : 'mdi-tune-variant'"
          @click="showAdvanced = !showAdvanced"
          class="q-ml-sm"
        >
          <q-tooltip>{{ t(showAdvanced ? 'hide_filters' : 'advanced_filters') }}</q-tooltip>
        </q-btn>
      </div>

      <q-slide-transition>
        <div v-show="showAdvanced" class="advanced-filters q-mt-md">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-select
                v-model="filters.region"
                :options="regionOptions"
                :option-label="(region) => region.name"
                :label="t('region')"
                outlined
                dense
                clearable
                @update:model-value="filters.cities = []"
              />
            </div>
            <div class="col-12 col-md-6">
              <q-select
                v-model="filters.cities"
                :options="cityOptions"
                :option-label="(city) => city.name"
                :label="t('cities')"
                multiple
                use-chips
                outlined
                dense
              />
            </div>
            <div class="col-12 col-md-6">
              <q-select
                v-model="filters.categories"
                :options="categoryOptions"
                :option-label="(cat) => cat.name"
                :label="t('categories')"
                multiple
                use-chips
                outlined
                dense
              />
            </div>
            <div class="col-12 col-md-6">
              <q-select
                v-model="filters.recommendedFor"
                :options="audienceOptions"
                :option-label="(aud) => aud.name"
                :label="t('recommended_for')"
                multiple
                use-chips
                outlined
                dense
              />
            </div>
          </div>
          <div class="text-right q-mt-md">
            <q-btn :label="t('clear_filters')" flat color="primary" @click="clearFilters" />
          </div>
        </div>
      </q-slide-transition>
    </div>

    <div id="packages-section" class="tours-section-container q-py-xl">
      <div class="text-center q-mb-xl">
        <h2 class="section-title">{{ t('most_wanted_packages_title') }}</h2>
      </div>

      <div v-if="loading" class="text-center">
        <q-spinner-dots color="primary" size="3rem" />
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
          <q-card class="package-card" flat bordered>
            <HeroBanner
              :image-src="pkg.image"
              :subtitle="t('package_tour')"
              :title="pkg.title"
            />
            <q-card-section class="card-content-section">
              <div class="core-info-pill">
                <div class="info-item">
                  <q-icon name="mdi-calendar-clock" />
                  <span>
                    {{ pkg.durationInDays }} {{ t('days') }} /
                    {{ pkg.durationInNights }} {{ t('nights') }}
                  </span>
                </div>
                <template v-if="pkg.minPeople">
                  <q-separator spaced="xs" style="width: 100%;" />
                  <div class="info-item">
                    <q-icon name="mdi-account-group" />
                    <span>Mín. {{ pkg.minPeople }} {{ t('people') }}</span>
                  </div>
                </template>
              </div>
              <h3 class="card-title">{{ pkg.title }}</h3>
              <div class="region-subheader">
                <q-icon :name="pkg.region.icon || 'mdi-earth'" />
                <span>{{ pkg.region.name }}</span>
              </div>
              <p class="card-description">{{ pkg.subtitle }}</p>
              <div class="icon-section-wrapper">
                <div v-if="pkg.packageCategories?.length">
                  <h4 class="icon-list-title">{{ t('categories') }}</h4>
                  <div class="icon-list">
                    <div
                      v-for="category in pkg.packageCategories"
                      :key="category.id"
                      class="icon-list-item"
                    >
                      <q-icon :name="category.icon" />
                      <span>{{ category.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="icon-section-wrapper q-mt-md">
                <div v-if="pkg.packageRecommendedFor?.length">
                  <h4 class="icon-list-title">{{ t('recommended_for') }}</h4>
                  <div class="icon-list">
                    <div
                      v-for="audience in pkg.packageRecommendedFor"
                      :key="audience.id"
                      class="icon-list-item"
                    >
                      <q-icon :name="audience.icon" />
                      <span>{{ audience.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-card-actions class="card-actions q-my-md">
              <q-btn
                :label="t('tours_cta_button')"
                class="full-width cta-button"
                unelevated
                icon-right="mdi-arrow-right"
                tabindex="-1"
              />
            </q-card-actions>
          </q-card>
        </div>
      </HorizontalGradientMask>
      
      <div v-else class="text-center text-grey-7 q-mt-xl">
          <q-icon name="mdi-magnify-close" size="4rem" class="text-grey-5" />
          <p class="q-mt-md text-h6">Nenhum pacote encontrado.</p>
          <p>Tente ajustar ou limpar os filtros de busca.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useTourPackageStore } from 'src/stores/useTourPackageStore';
import type { Region } from 'src/model/Region';
import type { TranslatableTag } from 'src/model/Tags';
import HeroBanner from 'src/components/banner/HeroBanner.vue';
import HorizontalGradientMask from 'src/components/mask/HorizontalGradientMask.vue';

// Supondo que você tenha arquivos 'index.ts' em cada pasta de dados para facilitar a importação
import { bonitoSerraBodoquenaPt, pantanalPt } from 'src/data/regions/Regions';
import { couplesPt } from 'src/data/audiences/Couples';
import { familiesPt } from 'src/data/audiences/Families';
import { groupsPt } from 'src/data/audiences/Groups';
import { seniorsPt } from 'src/data/audiences/Seniors';
import { adventurePt } from 'src/data/categories/Adventuree';
import { aquaticPt } from 'src/data/categories/Aquaticc';
import { cavesPt } from 'src/data/categories/Cavess';
import { ecotourismPt } from 'src/data/categories/Ecotourismm';


// --- LÓGICA GERAL ---
const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();
const $q = useQuasar();

const packageStore = useTourPackageStore();
const { allPackages: packages, loading } = storeToRefs(packageStore);


// --- LÓGICA DE BUSCA E FILTRO ---
const showAdvanced = ref(false);

const filters = reactive({
  searchText: '',
  region: null as Region | null,
  cities: [] as TranslatableTag[],
  categories: [] as TranslatableTag[],
  recommendedFor: [] as TranslatableTag[],
});

const regionOptions = ref([bonitoSerraBodoquenaPt, pantanalPt]);
const categoryOptions = ref([adventurePt, aquaticPt, cavesPt, ecotourismPt]);
const audienceOptions = ref([couplesPt, familiesPt, groupsPt, seniorsPt]);

const cityOptions = computed(() => {
  if (filters.region) {
    return filters.region.cities;
  }
  return regionOptions.value.flatMap(r => r.cities);
});

const clearFilters = () => {
  filters.searchText = '';
  filters.region = null;
  filters.cities = [];
  filters.categories = [];
  filters.recommendedFor = [];
};

const filteredPackages = computed(() => {
  return packages.value.filter(pkg => {
    if (!pkg?.id || !pkg.slug) return false;

    const { searchText, region, categories, recommendedFor } = filters;
    const searchLower = searchText.toLowerCase();

    const matchesSearchText = !searchText ||
      pkg.title.toLowerCase().includes(searchLower) ||
      pkg.subtitle.toLowerCase().includes(searchLower);
    
    const matchesRegion = !region || pkg.region.id === region.id;

    const matchesCategory = !categories.length ||
      categories.every(filterCat =>
        pkg.packageCategories.some(pkgCat => pkgCat.id === filterCat.id)
      );

    const matchesRecommendedFor = !recommendedFor.length ||
      recommendedFor.every(filterAud =>
        pkg.packageRecommendedFor.some(pkgAud => pkgAud.id === filterAud.id)
      );

    return matchesSearchText && matchesRegion && matchesCategory && matchesRecommendedFor;
  });
});


// --- LÓGICA DA PÁGINA ---
const langMap: Record<string, string> = { pt: 'pt-BR', en: 'en-US', es: 'es' };

const viewPackage = (packageSlug: string) => {
  void router.push({
    name: 'tourDetails',
    params: { slug: packageSlug, lang: route.params.lang || 'pt' },
  });
};

watch(
  () => route.params.lang,
  async (newLang) => {
    packageStore.clearPackages();
    const lang = langMap[newLang as string] || 'pt-BR';
    locale.value = lang;
    await packageStore.fetchPackages(lang);
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.search-filter-container {
  background-color: var(--card-subtle-bg, #f5f8f7);
  border-radius: 20px;
  border: 1px solid var(--card-border-color, #eef2f1);
  max-width: 900px;
  margin: 0 auto 48px auto;
  box-shadow: var(--card-shadow, 0 4px 15px rgba(77, 182, 172, 0.1));
}
.advanced-filters {
  border-top: 1px solid var(--card-border-color, #eef2f1);
  padding-top: 16px;
}

/* O resto do seu CSS original */
.section-title {
  font-weight: 800;
  font-size: 2rem;
  @media (min-width: $breakpoint-sm-min) {
    font-size: 2.5rem;
  }
}
.package-card {
  --card-bg-color: #ffffff;
  --card-border-color: #eef2f1;
  --card-primary-color: #4db6ac;
  --card-text-primary: #1a2e29;
  --card-text-secondary: #6c7a77;
  --card-subtle-bg: #f5f8f7;
  --card-shadow: 0 4px 15px rgba(77, 182, 172, 0.1);
  --card-hover-shadow: 0 8px 30px rgba(77, 182, 172, 0.18);
  background-color: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 20px;
  box-shadow: none;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--card-hover-shadow);
  }
}
.card-content-section {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.core-info-pill {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 12px 16px;
  background-color: var(--card-subtle-bg);
  border-radius: 20px;
  margin-bottom: 16px;
  color: var(--card-text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
  .info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    .q-icon {
      color: var(--card-primary-color);
      font-size: 1.2rem;
    }
  }
}
.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.3;
  margin: 0 0 8px 0;
  color: var(--card-text-primary);
}
.region-subheader {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--card-primary-color);
  .q-icon {
    font-size: 1.3rem;
    opacity: 0.8;
  }
}
.card-description {
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--card-text-secondary);
  margin-bottom: 24px;
}
.icon-section-wrapper {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--card-border-color);
  & + .icon-section-wrapper {
    border-top: none;
    padding-top: 0;
  }
}
.icon-list-title {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--card-text-secondary);
  opacity: 0.7;
  letter-spacing: 0.5px;
  margin: 0 0 12px 0;
}
.icon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
}
.icon-list-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--card-text-secondary);
  background-color: var(--card-subtle-bg);
  padding: 6px 12px;
  border-radius: 20px;
  .q-icon {
    color: var(--card-primary-color);
    font-size: 1.2rem;
  }
}
.card-actions {
  padding: 24px;
  padding-top: 0;
  .cta-button {
    background: var(--card-primary-color) !important;
    color: #ffffff !important;
    border-radius: 14px;
    font-weight: 600;
    padding: 14px;
    font-size: 1rem;
    text-transform: none;
  }
}
</style>