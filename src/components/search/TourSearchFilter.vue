<template>
  <div class="search-filter-container q-pa-md">
    <div class="row items-center q-gutter-md">
      <q-input
        :model-value="modelValue.searchText"
        @update:model-value="updateFilter('searchText', $event)"
        filled
        rounded
        placeholder="Buscar passeios..."
        class="col"
        dense
        clearable
        debounce="300" 
        @clear="updateFilter('searchText', '')"
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
      >
        <q-tooltip>Filtros Avançados</q-tooltip>
      </q-btn>
    </div>

    <q-slide-transition>
      <div v-show="showAdvanced" class="advanced-filters q-mt-md">
        
        <div v-if="loadingOptions" class="text-center q-pa-sm">
            <q-spinner color="primary" size="2em" />
        </div>

        <div v-else class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-select
              :model-value="modelValue.region"
              @update:model-value="(val) => { updateFilter('region', val, true); }"
              :options="regionOptions"
              option-label="name"
              label="Região"
              filled dense options-dense clearable
            />
          </div>

          <div class="col-12 col-md-6">
            <q-select
              :model-value="modelValue.cities"
              @update:model-value="updateFilter('cities', $event)"
              :options="cityOptions"
              option-label="name"
              label="Cidades"
              multiple use-chips filled dense options-dense clearable
              :disable="!modelValue.region"
              :hint="!modelValue.region ? 'Selecione uma região primeiro' : ''"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-select
              :model-value="modelValue.categories"
              @update:model-value="updateFilter('categories', $event)"
              :options="categoryOptions"
              option-label="name"
              label="Categorias"
              multiple use-chips filled dense options-dense clearable
            />
          </div>

          <div class="col-12 col-md-6">
            <q-select
              :model-value="modelValue.recommendedFor"
              @update:model-value="updateFilter('recommendedFor', $event)"
              :options="audienceOptions"
              option-label="name"
              label="Recomendado para"
              multiple use-chips filled dense options-dense clearable
            />
          </div>
        </div>

        <div class="text-right q-mt-md">
          <q-btn 
            label="Limpar Filtros" 
            flat color="primary" 
            @click="clearAll" 
            dense no-caps
          />
        </div>
      </div>
    </q-slide-transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Region } from 'src/model/Region';
import type { TranslatableTag } from 'src/model/Tags';

// Definir a Prop como um objeto genérico para evitar erros de tipagem estrita no template
const props = defineProps<{
  modelValue: {
    searchText: string;
    region: Region | null;
    cities: TranslatableTag[];
    categories: TranslatableTag[];
    recommendedFor: TranslatableTag[];
  }
}>();

const emit = defineEmits(['update:modelValue']);

const showAdvanced = ref(false);
const loadingOptions = ref(false);
const regionOptions = ref<Region[]>([]);
const categoryOptions = ref<TranslatableTag[]>([]);
const audienceOptions = ref<TranslatableTag[]>([]);

onMounted(async () => {
  loadingOptions.value = true;
  try {
    const [regionsMod, audiencesMod, categoriesMod] = await Promise.all([
      import('src/data/regions/Regions'),
      import('src/data/audiences/all'),
      import('src/data/categories/all'),
    ]);

    if (regionsMod.bonitoSerraBodoquenaPt && regionsMod.pantanalSulPt) {
        regionOptions.value = [regionsMod.bonitoSerraBodoquenaPt, regionsMod.pantanalSulPt];
    }
    if (audiencesMod.allAudiencesPt) audienceOptions.value = audiencesMod.allAudiencesPt;
    if (categoriesMod.allCategoriesPt) categoryOptions.value = categoriesMod.allCategoriesPt;

  } catch (error) {
    console.error("Erro ao carregar filtros:", error);
  } finally {
    loadingOptions.value = false;
  }
});

const cityOptions = computed(() => {
  return props.modelValue.region?.cities || [];
});

// Helper para emitir atualização
const updateFilter = (key: string, value: any, resetCities = false) => {
  const newFilters = { ...props.modelValue, [key]: value };
  
  if (resetCities) {
    newFilters.cities = [];
  }

  emit('update:modelValue', newFilters);
};

const clearAll = () => {
  emit('update:modelValue', {
    searchText: '',
    region: null,
    cities: [],
    categories: [],
    recommendedFor: []
  });
};
</script>

<style scoped lang="scss">
.search-filter-container {
  background-color: #ffffff;
  border-radius: 28px;
  border: 1px solid #eef2f1;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease-in-out;
}

.advanced-filters {
  border-top: 1px solid #eef2f1;
  padding-top: 16px;
}
</style>