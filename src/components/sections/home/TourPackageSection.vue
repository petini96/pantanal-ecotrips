<template>
  <div>
    <div class="tours-section-container q-my-xl">
      <div class="text-center">
        <h2 class="section-title">{{ t('most_wanted_packages_title') }}</h2>
        <p>{{ t('most_wanted_packages_subtitle') }} <strong>Bonito e Pantanal</strong>.</p>
      </div>

      <div class="search-filter-container q-pa-md">
        <div class="row items-center q-gutter-md">
          <q-input
            v-model="filters.searchText"
            filled
            rounded
            :placeholder="t('search_placeholder')"
            class="col"
            dense
            clearable
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
            class="q-ml-sm"
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

      <div v-if="loading" class="text-center q-py-xl">
        <q-spinner-dots color="primary" size="3rem" />
         <p class="q-mt-md text-grey-7">{{ t('loading_packages') }}...</p>
      </div>

       <!-- Usando HorizontalGradientMask para o scroll horizontal -->
      <HorizontalGradientMask v-else-if="filteredPackages.length" @item-click="viewPackage">
        <!-- Loop pelos pacotes filtrados -->
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
                   <q-badge rounded color="secondary" class="q-py-xs q-px-sm text-caption text-weight-bold shadow-2">
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
                  <q-separator spaced="xs" style="width: 100%;" />
                  <div class="info-item">
                    <q-icon name="mdi-account-group" />
                    <span>Mín. {{ pkg.minPeople }} {{ t(pkg.minPeople > 1 ? 'people' : 'person') }}</span>
                  </div>
                </template>
              </div>
              <h3 class="card-title">{{ pkg.title }}</h3>
              <div v-if="pkg.region" class="region-subheader">
                <q-icon :name="pkg.region.icon || 'mdi-earth'" />
                <span>{{ pkg.region.name }}</span>
              </div>
              <p class="card-description">{{ pkg.subtitle }}</p>
              <div class="icon-section-wrapper">
                <div v-if="pkg.packageCategories?.length">
                  <h4 class="icon-list-title">{{ t('categories') }}</h4>
                  <div class="icon-list">
                    <q-chip
                        v-for="category in pkg.packageCategories"
                        :key="category.id"
                        class="icon-list-item"
                        dense
                        outline
                        color="primary"
                        text-color="primary"
                        size="sm"
                      >
                      <q-avatar :icon="category.icon" color="transparent" text-color="primary" size="xs" class="q-mr-xs"/>
                      {{ category.name }}
                    </q-chip>
                  </div>
                </div>
              </div>
              <div class="icon-section-wrapper q-mt-md">
                <div v-if="pkg.packageRecommendedFor?.length">
                  <h4 class="icon-list-title">{{ t('recommended_for') }}</h4>
                  <div class="icon-list">
                    <q-chip
                        v-for="audience in pkg.packageRecommendedFor"
                        :key="audience.id"
                        class="icon-list-item"
                        dense
                        outline
                        color="teal"
                        text-color="teal"
                        size="sm"
                       >
                       <q-avatar :icon="audience.icon" color="transparent" text-color="teal" size="xs" class="q-mr-xs"/>
                       {{ audience.name }}
                    </q-chip>
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
                aria-hidden="true"
                no-caps
              />
            </q-card-actions>
          </q-card>
        </div>
      </HorizontalGradientMask>

      <div v-else class="text-center text-grey-7 q-mt-xl q-pa-lg">
        <q-icon name="mdi-magnify-close" size="4rem" class="text-grey-5" />
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
import type { TranslatableTag } from 'src/model/Tags';
import HorizontalGradientMask from 'src/components/mask/HorizontalGradientMask.vue';

// --- Interfaces ---
interface RegionsModule {
  bonitoSerraBodoquenaPt: Region;
  pantanalPt: Region;
}

// Assumindo que seus arquivos 'all.ts' exportam arrays diretos
interface AudiencesModule {
  allAudiencesPt: TranslatableTag[];
}

interface CategoriesModule {
  allCategoriesPt: TranslatableTag[];
}

// --- SETUP GERAL ---
const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n(); // Adicionado locale para watch
const $q = useQuasar();

const packageStore = useTourPackageStore();
// Importante: fetchPackages deve ser chamado em algum lugar (ex: App.vue ou aqui)
const { allPackages: packages, loading } = storeToRefs(packageStore);

// --- ESTADOS DOS FILTROS ---
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

// --- CARREGAMENTO DE DADOS (FILTROS) ---
async function loadFilterData() {
  if (regionOptions.value.length > 0) return;
  
  filtersLoading.value = true;
  try {
    // Carrega os pacotes se ainda não estiverem carregados
    if (packages.value.length === 0) {
       await packageStore.fetchPackages(route.params.lang as string || 'pt');
    }

    const [
      regionsModule,
      audiencesModule,
      categoriesModule
    ] = await Promise.all([
      import('src/data/regions/Regions') as Promise<RegionsModule>,
      import('src/data/audiences/all') as Promise<AudiencesModule>, // Verifique se esse arquivo existe
      import('src/data/categories/all') as Promise<CategoriesModule>, // Verifique se esse arquivo existe
    ]);

    // Carrega Regiões
    if (regionsModule.bonitoSerraBodoquenaPt && regionsModule.pantanalPt) {
       regionOptions.value = [regionsModule.bonitoSerraBodoquenaPt, regionsModule.pantanalPt];
    }

    // Carrega Públicos
    if (audiencesModule.allAudiencesPt) {
        audienceOptions.value = audiencesModule.allAudiencesPt;
    }
    
    // Carrega Categorias
    if (categoriesModule.allCategoriesPt) {
        categoryOptions.value = categoriesModule.allCategoriesPt;
    }

  } catch (error: unknown) {
    console.warn("Alguns filtros não puderam ser carregados. Verifique os caminhos dos imports.", error);
    // Não notificamos erro crítico para não assustar o usuário, apenas logamos
  } finally {
      filtersLoading.value = false;
  }
}

onMounted(() => {
  void loadFilterData();
});

// Atualiza opções de cidade quando a região muda
const cityOptions = computed(() => {
  if (filters.region && filters.region.cities) {
    return filters.region.cities;
  }
  return [];
});

// Limpar filtros
const clearFilters = () => {
  filters.searchText = '';
  filters.region = null;
  filters.cities = [];
  filters.categories = [];
  filters.recommendedFor = [];
};

// --- LÓGICA DE FILTRAGEM (CORRIGIDA) ---
const filteredPackages = computed(() => {
  // Se não houver pacotes, retorna vazio
  if (!packages.value || !packages.value.length) return [];

  return packages.value.filter(pkg => {
    // Verificação de segurança básica
    if (!pkg?.id) return false;

    const { searchText, region, cities, categories, recommendedFor } = filters;

    // 1. Busca de Texto (Insensitive + Remove acentos)
    let matchesSearchText = true;
    if (searchText) {
      const normalize = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      const query = normalize(searchText);
      const title = normalize(pkg.title || '');
      const subtitle = normalize(pkg.subtitle || '');
      
      matchesSearchText = title.includes(query) || subtitle.includes(query);
    }

    // 2. Região (Comparação por ID para segurança)
    let matchesRegion = true;
    if (region) {
      matchesRegion = pkg.region?.id === region.id;
    }

    // 3. Cidades (Verifica se alguma cidade selecionada está no itinerário do pacote)
    let matchesCities = true;
    if (cities.length > 0) {
      // Se o pacote não tem itinerário, falha na checagem de cidade
      if (!pkg.itinerary) {
        matchesCities = false; 
      } else {
        // Lógica: O pacote deve passar em PELO MENOS UMA das cidades selecionadas
        matchesCities = cities.some(filterCity => 
          pkg.itinerary?.some(day => 
            day.tours?.some(tour => tour.city?.id === filterCity.id)
          )
        );
      }
    }

    // 4. Categorias (Lógica OR - Pelo menos uma das selecionadas)
    let matchesCategory = true;
    if (categories.length > 0) {
      if (!pkg.packageCategories) {
        matchesCategory = false;
      } else {
        matchesCategory = categories.some(filterCat => 
          pkg.packageCategories?.some(pkgCat => pkgCat.id === filterCat.id)
        );
      }
    }

    // 5. Recomendado Para (Lógica OR - Pelo menos um dos selecionados)
    let matchesRecommendedFor = true;
    if (recommendedFor.length > 0) {
      if (!pkg.packageRecommendedFor) {
        matchesRecommendedFor = false;
      } else {
        matchesRecommendedFor = recommendedFor.some(filterAud => 
          pkg.packageRecommendedFor?.some(pkgAud => pkgAud.id === filterAud.id)
        );
      }
    }

    return matchesSearchText && matchesRegion && matchesCities && matchesCategory && matchesRecommendedFor;
  });
});

// --- NAVEGAÇÃO ---
const viewPackage = (packageSlug: string) => {
  if (!packageSlug) return;
  void router.push({
    name: 'tourDetails',
    params: { slug: packageSlug, lang: route.params.lang || 'pt' },
  });
};

// Monitora mudança de idioma na URL para recarregar dados se necessário
watch(() => locale.value, () => {
   // Opcional: recarregar store ou filtros
});
</script>

<style scoped lang="scss">
// O SEU <style> VEM AQUI, COM A CORREÇÃO DO SASS

.search-filter-container {
  background-color: var(--card-bg-color, #ffffff); // Fallback adicionado
  border-radius: 28px;
  border: 1px solid var(--card-border-color, #eef2f1);
  max-width: 900px;
  margin: 0 auto 48px auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease-in-out;
  color: var(--text-primary-color); // Garante cor do texto
}

.advanced-filters {
  border-top: 1px solid var(--card-border-color, #eef2f1);
  padding-top: 16px;
}

.tours-section-container {
  padding: 0px 16px; // Padding horizontal geral
  max-width: 100%;    // Garante que o container não exceda a largura da tela
  overflow: hidden;   // Previne overflow horizontal indesejado do container
}

.section-title {
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-primary-color);
  @media (min-width: $breakpoint-sm-min) {
    font-size: 2.5rem;
  }
}
.package-card {
  --card-bg-color: #ffffff;
  --card-border-color: #eef2f1;
  --card-primary-color: #4db6ac;
  --card-secondary-color: #ffca28;
  --card-text-primary: #1a2e29;
  --card-text-secondary: #6c7a77;
  --card-subtle-bg: #f5f8f7;
  --card-shadow: 0 4px 15px rgba(77, 182, 172, 0.1);
  --card-hover-shadow: 0 8px 30px rgba(77, 182, 172, 0.18);
  // CORREÇÃO SASS: Defina uma variável CSS para a cor escura do hover.
  // Ajuste o valor hexadecimal (#3a9d92) se desejar.
  --card-primary-color-darker: #3a9d92;

  background-color: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 20px;
  box-shadow: none;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  overflow: hidden; // Previne conteúdo interno de vazar

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--card-hover-shadow);
  }
}

.card-image {
  border-top-left-radius: inherit; // Herda o radius do card
  border-top-right-radius: inherit;
  position: relative;
}

.image-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 80%);
  // Removido border-radius daqui, pois a imagem já corta
}

.card-content-section {
  padding: 20px; // Reduzido ligeiramente
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.core-info-pill {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px; // Reduzido
  padding: 10px 14px; // Reduzido
  background-color: var(--card-subtle-bg);
  border-radius: 16px; // Ajustado
  margin-bottom: 14px; // Ajustado
  color: var(--card-text-secondary);
  font-size: 0.8rem; // Ajustado
  font-weight: 500;

  .info-item {
    display: flex;
    align-items: center;
    gap: 6px;

    .q-icon {
      color: var(--card-primary-color);
      font-size: 1.1rem; // Ajustado
    }
  }
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.45rem; // Ajustado
  line-height: 1.35; // Ajustado
  margin: 0 0 6px 0;
  color: var(--card-text-primary);
  // Limita o título a 2 linhas
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: calc(1.45rem * 1.35 * 2); // Garante altura mínima para 2 linhas
}

.region-subheader {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
  font-size: 0.9rem; // Ajustado
  font-weight: 500;
  color: var(--card-primary-color);

  .q-icon {
    font-size: 1.2rem;
    opacity: 0.8;
  }
}

.card-description {
  font-family: 'Lato', sans-serif;
  font-size: 0.95rem; // Ajustado
  line-height: 1.55; // Ajustado
  color: var(--card-text-secondary);
  margin-bottom: 18px; // Ajustado
  // Limita a 3 linhas
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon-section-wrapper {
  margin-top: auto;
  padding-top: 12px; // Reduzido
  border-top: 1px solid var(--card-border-color);

  & + .icon-section-wrapper {
    border-top: none;
    padding-top: 0;
    margin-top: 10px; // Adiciona espaço se houver duas seções
  }
}

.icon-list-title {
  font-size: 0.75rem; // Ajustado
  font-weight: 600;
  text-transform: uppercase;
  color: var(--card-text-secondary);
  opacity: 0.7;
  letter-spacing: 0.5px;
  margin: 0 0 8px 0; // Reduzido
}

.icon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 8px; // Reduzido
}

// Estilo dos chips (antes era icon-list-item div)
.icon-list-item.q-chip {
  // O Quasar já aplica padding e border-radius
  // Ajustes finos se necessário
  margin: 0; // Remove margem padrão se houver
  font-size: 0.75rem;
  font-weight: 500;

  .q-avatar {
     margin-right: 4px; // Espaço entre ícone e texto no chip
  }
}

.card-actions {
  padding: 20px; // Ajustado
  padding-top: 0;

  .cta-button {
    background: var(--card-primary-color) !important;
    color: #ffffff !important;
    border-radius: 12px; // Ajustado
    font-weight: 600;
    padding: 12px; // Ajustado
    font-size: 0.95rem; // Ajustado
    text-transform: none;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

    &:hover {
      // CORREÇÃO SASS: Usa a variável CSS definida para o hover
      background-color: var(--card-primary-color-darker) !important;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); // Sombra sutil no hover
    }
     &:active {
        transform: translateY(0); // Remove o efeito de subida ao clicar
        box-shadow: none;
    }
  }
}

/* Ajustes responsivos */
@media (max-width: $breakpoint-xs-max) {
    // Não precisa de margem negativa se o container pai tem padding
    // .package-card {
    //     margin-left: -8px;
    //     margin-right: -8px;
    // }
    .card-title {
        font-size: 1.3rem;
        min-height: calc(1.3rem * 1.35 * 2);
    }
    .card-description {
        font-size: 0.9rem;
         -webkit-line-clamp: 2; // Menos linhas no mobile
    }
     .icon-list-item.q-chip {
        font-size: 0.7rem;
     }
     .card-actions .cta-button {
        font-size: 0.9rem;
        padding: 10px;
     }
}
</style>
